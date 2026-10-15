import { mkdir, readFile, writeFile, copyFile, rm, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const data = JSON.parse(await readFile(path.join(root, 'data/project-status.json'), 'utf8'));
export const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const e = escapeHtml;
let revision = process.env.GITHUB_SHA || 'local-uncommitted';
if (!process.env.GITHUB_SHA) {
  try { revision = execFileSync('git', ['rev-parse', 'HEAD'], {cwd:root,stdio:['ignore','pipe','ignore']}).toString().trim(); } catch {}
}
const repo = data.repository;
const source = rel => `${repo}/blob/${process.env.GITHUB_SHA || 'main'}/${rel.split('/').map(encodeURIComponent).join('/')}`;
const badge = state => `<span class="badge ${e(state)}">${e(state)}</span>`;
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="RPO HUB project progress, roadmap and community contribution guide.">
<meta name="color-scheme" content="light"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'">
<title>RPO HUB — Built in the open</title><link rel="stylesheet" href="styles.css"><link rel="icon" href="favicon.svg" type="image/svg+xml"></head>
<body><a class="skip" href="#main">Skip to content</a>
<header class="wrap masthead"><a class="wordmark" href="#">RPO<span>HUB</span><small>PROJECT JOURNAL / 001</small></a><nav aria-label="Main"><a href="#work">Current work</a><a href="#roadmap">Roadmap</a><a href="#contribute">Contribute</a><a href="${e(repo)}">GitHub ↗</a></nav></header>
<main id="main"><section class="wrap hero" aria-labelledby="title"><div><p class="eyebrow"><span class="dot"></span> ${e(data.stage)} · Built in the open</p><h1 id="title">A foundation for<br><em>worlds we build together.</em></h1><p class="lead">${e(data.summary)}</p><div class="actions"><a class="button" href="${e(repo)}/issues/new/choose">Find a way to contribute <span>↗</span></a><a class="text-link" href="${e(source('PROJECT-BRIEF.md'))}">Read the project brief →</a></div></div><aside class="blueprint" aria-label="Conceptual connected worlds illustration, not a running application"><div class="map-label">THE IDEA / CONNECTED WORLDS</div><div class="world world-a">CREATE<span>01</span></div><div class="world world-b">PERSONALIZE<span>02</span></div><div class="world world-c">EXPLORE<span>03</span></div><svg viewBox="0 0 420 330" aria-hidden="true"><path d="M110 106 L294 155 L157 256 Z"/><circle cx="110" cy="106" r="5"/><circle cx="294" cy="155" r="5"/><circle cx="157" cy="256" r="5"/></svg><p>Small, testable steps.<br>Shared possibilities.</p><span class="map-foot">CONCEPT / APPLICATION NOT BUILT</span></aside></section>
<div class="notice-band"><div class="wrap"><strong>Where we are</strong><p>${e(data.limits)}</p></div></div>
<section class="wrap section" id="work" aria-labelledby="work-title"><div class="section-heading"><p class="eyebrow">01 / CURRENT WORK</p><h2 id="work-title">Make the starting point solid.</h2><p>Clear requirements, preserved decisions and a contribution path before the first world.</p></div><div class="work-grid">${data.currentWork.map((item,i)=>`<article class="work-card"><div class="card-top"><span class="number">0${i+1}</span>${badge(item.state)}</div><h3>${e(item.title)}</h3><p>${e(item.detail)}</p><a href="${e(source(item.evidence))}">View the evidence →</a></article>`).join('')}</div></section>
<section class="wrap section roadmap" id="roadmap" aria-labelledby="roadmap-title"><div class="section-heading"><p class="eyebrow">02 / THE PATH AHEAD</p><h2 id="roadmap-title">Progress has a sequence.</h2><p>These are outcomes to prove. Dates and completion percentages would imply certainty we do not have.</p></div><ol class="milestones">${data.milestones.map(item=>`<li><span class="milestone-id">${e(item.id)}</span><div><h3>${e(item.title)}</h3><p>${e(item.detail)}</p></div>${badge(item.state)}</li>`).join('')}</ol><a class="text-link" href="${e(source('docs/planning/S1-IMPLEMENTATION-BRIEF.md'))}">Explore the next application milestone →</a></section>
<section class="contribute" id="contribute" aria-labelledby="contribute-title"><div class="wrap contribute-inner"><div><p class="eyebrow">03 / OPEN TO THOUGHTFUL CONTRIBUTIONS</p><h2 id="contribute-title">Help shape<br>what comes next.</h2><p>You do not need to build an entire world to make a useful contribution. Start with a question, a source or a small improvement.</p><div class="actions"><a class="button light" href="${e(repo)}/discussions">Join the discussion ↗</a><a class="text-link" href="${e(source('CONTRIBUTING.md'))}">Contribution guide →</a></div></div><div class="areas">${data.contributionAreas.map(item=>`<article><h3>${e(item.title)}</h3><p>${e(item.detail)}</p></article>`).join('')}</div></div></section>
<section class="wrap evidence section"><div><p class="eyebrow">A NOTE ON EVIDENCE</p><h2>Show the work.<br>Keep the claims honest.</h2></div><div><p><strong>Implemented</strong> means source/configuration exists. <strong>Verified</strong> requires recorded checks. <strong>Planned</strong> is future work. <strong>Blocked</strong> needs a prerequisite.</p><p>Project status is maintained in a reviewed data file. The site rebuilds when changes reach main; it does not infer readiness from commit counts or activity.</p><a href="${e(source('docs/planning/WORK-STATE.md'))}">Read the work ledger →</a></div></section>
</main><footer class="wrap"><div><a class="wordmark" href="#">RPO<span>HUB</span></a><p>Open source. Deliberate progress.</p></div><div class="footer-links"><a href="${e(source('GOVERNANCE.md'))}">Governance</a><a href="${e(source('CODE_OF_CONDUCT.md'))}">Conduct</a><a href="${e(repo)}/security/advisories/new">Security</a><a href="${e(source('LICENSE'))}">Apache-2.0</a></div><p class="revision">Status reviewed ${e(data.updated)} · Source <a href="${e(repo)}/commit/${e(revision)}">${e(revision.slice(0,12))}</a> · <a href="release.json">Build record</a></p></footer></body></html>`;
const output=path.resolve(root,'dist');
if(path.dirname(output)!==path.resolve(root)||path.basename(output)!=='dist')throw new Error('Unsafe site output path');
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
await writeFile(path.join(root,'dist/index.html'),html);
await copyFile(path.join(root,'site/styles.css'),path.join(root,'dist/styles.css'));
await copyFile(path.join(root,'site/favicon.svg'),path.join(root,'dist/favicon.svg'));
await writeFile(path.join(root,'dist/.nojekyll'),'');
await writeFile(path.join(root,'dist/release.json'),JSON.stringify({project:data.project,revision,statusUpdated:data.updated,schemaVersion:1},null,2)+'\n');
const outputFiles=(await readdir(output)).sort();
if(JSON.stringify(outputFiles)!==JSON.stringify(['.nojekyll','favicon.svg','index.html','release.json','styles.css']))throw new Error('Unexpected publication file');
console.log(`Built curated site: dist/ (source ${revision})`);
