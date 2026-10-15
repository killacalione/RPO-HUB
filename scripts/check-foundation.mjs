import { readdir, readFile, stat } from 'node:fs/promises';
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
  if(rel.endsWith('.mjs')){
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
const states=new Set(['implemented','verified','planned','blocked']);
assert(data.schemaVersion===1,'Status schemaVersion must be 1');
assert(/^\d{4}-\d{2}-\d{2}$/.test(data.updated),'Status date invalid');
assert(data.repository==='https://github.com/killacalione/RPO-HUB','Repository identity mismatch');
for(const item of [...data.currentWork,...data.milestones])assert(states.has(item.state),`Unknown evidence state: ${item.state}`);
assert(data.milestones.find(x=>x.id==='S1')?.state==='planned','Foundation must not claim S1 implemented');
for(const item of data.currentWork)assert(files.includes(item.evidence),`Missing evidence: ${item.evidence}`);
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
if(errors.length){console.error(errors.map(x=>'- '+x).join('\n'));process.exit(1);}
console.log(`Foundation checks passed: ${files.length} public files, ${roles.length} role mirrors, links/status/scripts/publication boundaries.`);
