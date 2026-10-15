import { readdir, readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const errors=[];
const assert=(ok,message)=>{if(!ok)errors.push(message);};
let files;
try {files=execFileSync('git',['ls-files','--cached','--others','--exclude-standard'],{cwd:root,stdio:['ignore','pipe','ignore']}).toString().trim().split(/\r?\n/).filter(Boolean);}
catch {
  async function walk(dir=''){
    const result=[];
    for(const ent of await readdir(path.join(root,dir),{withFileTypes:true})){
      const rel=path.posix.join(dir,ent.name);
      if(/^\.(?:local|git|agents)(?:\/|$)|^(?:dist|node_modules|artifacts|prototype|project-foundation-new-project)(?:\/|$)|^RPO-HUB-MASTER-DESIGN\.md$/.test(rel))continue;
      if(ent.isDirectory())result.push(...await walk(rel));else result.push(rel);
    }return result;
  } files=await walk();
}
assert(new Set(files).size===files.length,'Duplicate public paths');
for(const rel of files){
  assert(!/^\.(?:local|agents)\/|^(?:prototype|project-foundation-new-project)\//.test(rel),`Private/history input tracked: ${rel}`);
  assert(!/(^|\/)\.env(?:\.|$)|\.(?:zip|pem|pfx|key)$/i.test(rel),`Sensitive/archive file tracked: ${rel}`);
  const text=await readFile(path.join(root,rel),'utf8');
  assert(!/(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-[A-Za-z0-9]{32,}|-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----)/.test(text),`Recognizable secret pattern: ${rel}`);
  assert(!/[A-Z]:[\\/]Users[\\/][A-Za-z0-9_.-]+/i.test(text),`Personal local path: ${rel}`);
  if(/\.(?:mjs|js)$/.test(rel)){
    try{execFileSync(process.execPath,['--check',path.join(root,rel)],{stdio:'pipe'});}catch{errors.push(`JavaScript syntax: ${rel}`);}
  }
  if(rel.endsWith('.md')){
    for(const match of text.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)){
      const dest=match[1].replace(/^<|>$/g,'').split('#')[0];
      if(!dest || /^[a-z][a-z0-9+.-]*:|^\/\//i.test(dest))continue;
      let resolved;
      try{resolved=path.resolve(path.dirname(path.join(root,rel)),decodeURIComponent(dest));}catch{errors.push(`Invalid link: ${rel} -> ${dest}`);continue;}
      const relative=path.relative(root,resolved).replaceAll('\\','/');
      assert(!relative.startsWith('..'),`Link outside public root: ${rel} -> ${dest}`);
      assert(files.includes(relative) || files.some(x=>x.startsWith(relative+'/')),`Unpublished/missing local link: ${rel} -> ${dest}`);
    }
  }
}
const data=JSON.parse(await readFile(path.join(root,'data/project-status.json'),'utf8'));
const content=JSON.parse(await readFile(path.join(root,'site/site-content.json'),'utf8'));
const states=new Set(['implemented','verified','planned','blocked']);
assert(data.schemaVersion===1,'Status schemaVersion must be 1');
assert(/^\d{4}-\d{2}-\d{2}$/.test(data.updated),'Status date invalid');
assert(data.repository==='https://github.com/killacalione/RPO-HUB','Repository identity mismatch');
for(const item of [...data.currentWork,...data.milestones])assert(states.has(item.state),`Unknown evidence state: ${item.state}`);
assert(data.milestones.find(x=>x.id==='S1')?.state==='planned','Foundation must not claim S1 implemented');
for(const item of data.currentWork)assert(files.includes(item.evidence),`Missing evidence: ${item.evidence}`);
assert(content.home?.intro && content.home?.now,'Home copy missing');
assert(content.project?.pillars?.length===3,'Project page requires three concise project pillars');
assert(content.progress?.intro && content.roadmap?.intro && content.community?.intro,'A detail-page introduction is missing');
const roles=files.filter(x=>x.startsWith('.codex/agents/')&&x.endsWith('.toml'));
assert(roles.length===7,'Expected seven scoped native role adapters');
for(const rel of roles){
  const toml=await readFile(path.join(root,rel),'utf8');
  const name=path.basename(rel,'.toml');
  const body=toml.match(/developer_instructions = """\n([\s\S]*?)\n"""/m)?.[1];
  const card=await readFile(path.join(root,'roles',name+'.md'),'utf8');
  assert(body && card.includes('```text\n'+body+'\n```'),`Role mirror mismatch: ${name}`);
  assert(!/^(?:model|model_reasoning_effort|max_threads)\s*=/m.test(toml),`Unrequested model/concurrency override: ${name}`);
}
const workflow=await readFile(path.join(root,'.github/workflows/foundation.yml'),'utf8');
assert(!/pull_request_target|workflow_run/.test(workflow),'Privileged untrusted workflow event');
for(const match of workflow.matchAll(/uses:\s*([^\s#]+)/g))assert(/@[a-f0-9]{40}$/.test(match[1]),`Action not SHA pinned: ${match[1]}`);
assert(/path: dist/.test(workflow),'Pages must upload only dist');

const style=await readFile(path.join(root,'site/styles.css'),'utf8');
const app=await readFile(path.join(root,'site/app.js'),'utf8');
const scene=await readFile(path.join(root,'site/portal-world.svg'),'utf8');
for(const theme of ['sunset','arcade','meadow'])assert(style.includes(`data-theme="${theme}"`) || theme==='sunset','Missing theme palette: '+theme);
assert(style.includes('prefers-reduced-motion'),'Reduced-motion CSS behavior missing');
assert(style.includes('image-rendering: pixelated'),'Crisp pixel-art rendering guidance missing');
assert(style.includes('motion-paused') && app.includes('setPaused'),'Motion pause/resume behavior missing');
assert(app.includes('sessionStorage') && app.includes('prefers-reduced-motion'),'Theme/motion session or device preference missing');
assert(scene.includes('class="world-art"') && scene.includes('pixel-traveler') && scene.includes('glow-portal'),'Original animated landscape pieces missing');
assert(!/(?:href|xlink:href)=["']https?:\/\//i.test(scene),'World artwork must not load external resources');

// Build first, then validate the actual curated tree and its generated routes/links.
try{execFileSync(process.execPath,['scripts/build-site.mjs'],{cwd:root,stdio:'pipe'});}catch(error){
  errors.push(`Generated site build failed: ${error.stderr?.toString().trim()||error.message}`);
}
const dist=path.join(root,'dist');
const expected=['.nojekyll','app.js','community/index.html','favicon.svg','index.html','progress/index.html','project/index.html','release.json','roadmap/index.html','styles.css'].sort();
async function outputFiles(dir=dist,rel=''){
  const found=[];
  for(const item of await readdir(dir,{withFileTypes:true})){
    const name=path.posix.join(rel,item.name);
    if(item.isDirectory())found.push(...await outputFiles(path.join(dir,item.name),name));else found.push(name);
  }
  return found;
}
const built=(await outputFiles()).sort();
assert(JSON.stringify(built)===JSON.stringify(expected),`Generated Pages allowlist mismatch: ${JSON.stringify(built)}`);
const pagePaths=['index.html','project/index.html','progress/index.html','roadmap/index.html','community/index.html'];
const pageNames=['home','project','progress','roadmap','community'];
for(let i=0;i<pagePaths.length;i++){
  const rel=pagePaths[i];
  const html=await readFile(path.join(dist,rel),'utf8');
  assert(new RegExp(`<body data-page="${pageNames[i]}">`).test(html),`Generated route missing or wrong page id: ${rel}`);
  assert(html.includes('id="theme-select"') && ['sunset','arcade','meadow'].every(theme=>html.includes(`value="${theme}"`)),`Three-theme control missing: ${rel}`);
  assert(html.includes('class="motion-toggle"') && html.includes('aria-pressed="false"'),`Motion control missing: ${rel}`);
  assert(html.includes('Content-Security-Policy') && html.includes("connect-src 'none'"),`Static-site CSP missing: ${rel}`);
  assert((html.match(/<script\b/g)||[]).length===1 && /<script src="(?:\.\/|\.\.\/)?app\.js" defer><\/script>/.test(html),`Unexpected or inline script in generated page: ${rel}`);
  for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
    const dest=match[1].split(/[?#]/,1)[0];
    if(!dest || /^[a-z][a-z0-9+.-]*:|^\/\//i.test(dest))continue;
    assert(!dest.startsWith('/'),`Root-absolute path breaks the GitHub project base path: ${rel} -> ${dest}`);
    let normalized=path.posix.normalize(path.posix.join(path.posix.dirname(rel),decodeURIComponent(dest)));
    if(normalized==='.')normalized='index.html';
    if(dest.endsWith('/'))normalized=path.posix.join(normalized,'index.html');
    assert(expected.includes(normalized),`Generated local link has no published target: ${rel} -> ${dest}`);
  }
  if(i===0){
    const portalCount=(html.match(/class="portal-card portal-/g)||[]).length;
    assert(portalCount===4,`Home portal map has ${portalCount} destinations, expected four`);
    assert(html.includes('A project map — not a playable world'),'Home must distinguish the concept map from an existing game');
  }
}
const release=JSON.parse(await readFile(path.join(dist,'release.json'),'utf8'));
assert(release.project==='RPO HUB' && release.schemaVersion===1 && release.revision,'Release metadata missing project/revision');
let expectedRevision=process.env.GITHUB_SHA||'local-uncommitted';
if(!process.env.GITHUB_SHA){
  try{
    const dirty=execFileSync('git',['status','--porcelain'],{cwd:root,stdio:['ignore','pipe','ignore']}).toString().trim();
    if(!dirty)expectedRevision=execFileSync('git',['rev-parse','HEAD'],{cwd:root,stdio:['ignore','pipe','ignore']}).toString().trim();
  }catch{}
}
assert(release.revision===expectedRevision,`Release revision does not match the local/CI source state: expected ${expectedRevision}, got ${release.revision}`);
if(errors.length){console.error(errors.map(x=>'- '+x).join('\n'));process.exit(1);}
console.log(`Foundation checks passed: ${files.length} public files, ${roles.length} role mirrors, status/content, scripts, five generated routes, theme/motion controls, local links and curated Pages output.`);
