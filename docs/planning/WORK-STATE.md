# Current work state

## F1 foundation and release evidence

Task recorded 2026-10-15; release closeout continued 2026-10-16. Scope: establish The Oasis as a hub-centered community project, keep the planning/site foundation accurate, and verify protected publication. PR #6 delivered the product blueprint, F0–S5 roadmap, requirement/decision traceability, portable contributor guidance, repository/Pages branding, and the five-page pixel-art site. Its mobile follow-up fixes Home overflow and the malformed CSS selector. The separate release-evidence PR updates structured status after the first release was independently verified. S1 application implementation remains unstarted.

Writer: current Codex desktop coordinator using the portable `roles/implementation-engineer.md` scope; one active source/document writer. Independent GitHub snapshot/review was read-only. Client: Codex desktop. Model route: GPT-6 family; exact API route identifier is not exposed in this session. No client/model route change or global machine setting changed.

Source root: `project-foundation-new-project/` inside the existing RPO-HUB workspace; Git origin `https://github.com/killacalione/The-Oasis.git`. PR #6 reviewed `de8b3786458e44ccb45803e3f1732a631ef191f8` and squash-merged to main as `3e12e9dcbb134782dba5c6c4ddc303ae2b56ed20`. The current follow-up work starts on `docs/f1-release-evidence` from that verified main revision. Runtime observed: Node `v25.9.0`, npm `11.12.1`, Git `2.55.0.3`, PowerShell `7.6.5`; the package requires Node 24 or newer and has no dependencies. GitHub Desktop confirmed the correct repository, project folder, branch and renamed remote before source edits.

Owned/changed scope: PR #6 contains the foundation source set, the mobile CSS fix, and pre-release QA evidence. The release-evidence follow-up changes `data/project-status.json`, `README.md`, `PROJECT-BRIEF.md`, `START-HERE.md`, `site/site-content.json`, `VERIFY.md`, and this ledger. F1 status is set to verified only after the live site and first merged revision matched. No app source or later-milestone behavior was added.

Verified commands: `npm run check`, `npm run build`, and `git diff --check` passed on the mobile fix and again on synced main at `3e12e9dcbb134782dba5c6c4ddc303ae2b56ed20`. The checker covered 85 public files, seven role mirrors, five routes, links, status and curated Pages output. The main Foundation workflow and Pages publication passed in run [38863385434](https://github.com/killacalione/The-Oasis/actions/runs/38863385434). Live `release.json` matches that merged SHA; all five routes and four shared files returned HTTP 200 and matched the clean local build after CRLF/LF normalization. Public contribution/evidence links returned 200; issue/security reporting redirected anonymous requests to GitHub login as expected.

Browser evidence: Home fits 1280×720, 1440×900 and 375×812; all four portals stay visible at phone size. Detail pages scroll without horizontal overflow. Portal and five-route navigation, current-page state, skip-link focus/Enter, all three theme choices through navigation/reload, reduced motion and normal-motion pause/resume were checked. REA Chromium 156.0.4314.23 normal-motion evidence is `ev_0f76b6babd0479b225de4f91daa3ec2ba36900a3b02bc814f38f86589760e5e4`. Actual 200% browser zoom, physical devices, other engines and broad assistive-technology coverage remain unverified. No global setting or client configuration changed.

Cleanup proof: PR #6 merged without bypass. The reviewed head and squash merge have identical tree `d19a54a44bdfa8edd41b680717c23062eb8c58b0`. GitHub auto-deleted its remote branch; local `docs/the-oasis-foundation` was removed after the tree comparison, and local main was fast-forwarded to the merged SHA before creating this follow-up. The task-owned QA server and provider-owned REA browser process are stopped. Next: merge the release-evidence follow-up after its required check passes, verify its deployment/release record, and then let the owner select a separate next task. S1 remains unstarted.

## Completed task: PR #4 and repository cleanup

Owner authorization covered refreshing/merging the three dependency PRs and pixel-art PR, verifying Pages, and deleting only proven-merged work branches. Dependency PRs #1–#3 merged with refreshed passing checks; their remote branches are gone. [PR #4](https://github.com/killacalione/RPO-HUB/pull/4) squash-merged on 2026-10-16 UTC as `bd043428a2fd0add5f9f880dd1bf440205f0e32f`. Its tested head was `c044ca6235d97ebbb837e9a2957e8db1f2d00e5d`, incorporating current main and the CSP metadata correction. No branch protection or global configuration was changed.

Writer: the current Codex desktop coordinator is the only source/document writer. An independent reviewer performed read-only source inspection and found no merge blocker. A chat model switch occurred externally; the current session identifies the GPT-6 family, with the exact route ID unexposed. No global machine/client settings were changed.

Source root: the `project-foundation-new-project` directory in the local RPO-HUB workspace, Git origin `https://github.com/killacalione/RPO-HUB.git`. Source at this functional-release checkpoint is `bd043428a2fd0add5f9f880dd1bf440205f0e32f`; the subsequent evidence-only commit owns `VERIFY.md` and this ledger, with its exact revision recorded by Git and the generated release metadata. The completed functional correction owned those documents and `scripts/build-site.mjs`. GitHub requires Foundation checks on an up-to-date branch, resolved conversations and zero peer approvals; administrator bypass was not used. Only squash merging is enabled, with automatic remote-head deletion.

Actual checks: `npm run check` passed for 84 public files, seven role mirrors, five routes, links, theme/motion controls and curated output; `npm run build` and `git diff --check` passed. The clean local build identified tested head `c044ca6`. Node 24 [final-head Actions](https://github.com/killacalione/RPO-HUB/actions/runs/38829418269) passed, followed by successful [main validation and Pages publication](https://github.com/killacalione/RPO-HUB/actions/runs/38829490402) at `bd04342`. Live release JSON matched that exact main SHA. All five route URLs plus JS, CSS, favicon and release JSON returned HTTP 200; they matched the local main build after CRLF/LF normalization (raw bytes differ for Windows JS/inline SVG line endings). Runtime remains Node `v25.9.0` / npm `11.12.1`, PowerShell `7.6.5`. The first completion check rejected a personal path; the portable root corrected it before commit.

Live Codex in-app browser: portal and all five navigation destinations opened correctly; Arcade Night persisted across travel, Meadow selected successfully, and Sunset was restored. Home/page size equaled viewport at 375×812, 1280×720 and the default 1008×1187; all four portals were inside the phone viewport. No console warnings/errors were captured. Reduced motion was active and the motion button disabled; the normal-motion gap remains. Temporary viewport overrides were reset.

Cleanup proof: `git diff --exit-code c044ca6235d97ebbb837e9a2957e8db1f2d00e5d bd043428a2fd0add5f9f880dd1bf440205f0e32f` showed identical complete source trees. After confirming the local feature ref still equaled the reviewed head, its local branch was deleted; its remote head had already auto-deleted. Local main was synchronized and clean. The final evidence-only branch follows the same protected PR, exact-head check and proven-tree cleanup procedure; it adds no application behavior. No application/S1 work started. Remaining gaps are REA local capture, normal-motion pause/resume, physical devices, other engines and broader assistive-technology coverage. Next concrete project step: the owner selects the next scoped foundation or S1 task. No local QA/server process or source ownership transfer is active.

## Implementation checkpoint: pixel-art community hub

Task recorded 2026-10-15 before implementation. Scope: replace the long foundation landing page with an original pixel-art Home map and Project, Progress, Roadmap and Community routes; add three session-persistent themes and a user-controlled, reduced-motion-aware animation; retain verified foundation status and curated Pages output. Local implementation and browser review are complete. S1 application work, merge and deployment are out of scope for this writer.

Writer: coordinator/implementation engineer in Codex desktop, working alone on source and documents. No source ownership transfer is in progress. Client/model route has not changed.

Source root: the `project-foundation-new-project` folder in the RPO-HUB checkout. Starting revision: `0d6b0f29c8c1387cca14588455a2a06937da6c4e`; implementation commit: `8dd5822882be4d8493491be9c205ce7c3bf09b87`; branch: `feat/pixel-art-community-hub`; origin: `https://github.com/killacalione/RPO-HUB.git`. The implementation is committed locally; a follow-up evidence/hand-off commit will update this ledger. Runtime observed: Node `v25.9.0`, npm `11.12.1`, PowerShell `7.6.5`; package requires Node 24 or newer and no dependency was added.

Owned/changed files: `VERIFY.md`, `data/project-status.json`, this ledger, `docs/project/Architecture.md`, `docs/project/DESIGN_SYSTEM.md`, `docs/project/testing.md`, `scripts/build-site.mjs`, `scripts/check-foundation.mjs`, `scripts/serve.mjs`, `site/app.js`, `site/portal-world.svg`, `site/site-content.json`, `site/styles.css`.

## Checks and decisions

- `npm run check`: passed for 84 public source files and seven role mirrors; validated status/copy, script syntax, all five generated pages and their local links, theme/motion controls, exact output allowlist and release revision labeling.
- `npm run build`: passed; curated `dist/` contains five routes, one JS controller, CSS, favicon, release record and `.nojekyll`.
- `git diff --check`: passed.
- `npm run dev`: all five routes and four shared assets returned HTTP 200 with expected MIME types. Browser review at 1280×720, 1440×900 and 375×812 found no Home overflow; all routes/navigation, theme carry-over/reload, visible keyboard skip focus and reduced-motion behavior passed. No browser console errors/warnings were captured. Exact details are in [VERIFY](../../VERIFY.md).

Decisions retained: no framework/dependencies or remote visual assets; original inline SVG and same-origin CSS/JS; status stays sourced from the project JSON; three named session themes; relative route paths preserve `/RPO-HUB/`; local working trees do not claim a stale commit revision. Existing Pages workflow remains main-only and deploys curated `dist/` after merge.

Unverified/blockers: REA's local controlled browser capture did not return after two bounded attempts; no REA result is claimed for the built site. The available in-app browser already requested reduced motion, so the no-preference pause/resume click path could not be exercised. Physical devices, assistive technology, other engines and this branch's Actions/live Pages deployment remain unverified. These do not block a review PR; no public rollout is claimed.

Next concrete step: finish the post-commit evidence checkpoint, push the branch and open a review PR; wait for its Node 24 checks and leave merge/deployment to the maintainer.

---

Historical checkpoint: 2026-10-15. Task F0: consolidate both supplied packages and establish the public collaboration foundation before application development.

Writer: coordinator/implementation engineer in Codex desktop. Independent research and publication reviewers are read-only. Existing model route retained; native adapter discovery is unverified.

Source root: the top-level `project-foundation-new-project` folder; local `main` tracks public `killacalione/RPO-HUB` through HTTPS origin. GitHub Desktop shows this repository on main with no pending changes at the verification checkpoint. Original source bytes are preserved in ignored local ZIP archives; no input history is lost. See [merge report](../provenance/MERGE-REPORT.md).

## Scope and evidence

Owned files: adopted root/project/planning documents, role adapters, community guidance, status/site/scripts and GitHub workflows. Actual shell/browser/Git/API results are recorded in local execution evidence and summarized in [VERIFY](../../VERIFY.md). No S1 application source has been created.

| Task | State |
| --- | --- |
| Input inventory and byte-verified archives | Verified: 94 source files; 64 relative-path union; 2 identical same-path files and 1 cross-name manifest duplicate |
| Semantic merge and legacy requirement crosswalk | Verified: 23 current requirement rows, 42 legacy IDs, 81 public files and zero byte-identical public duplicate groups |
| Local/public Git and Desktop link | Verified: public origin/main, Desktop main and clean working tree at bootstrap checkpoint |
| PR checks and main-only Pages deployment | Main validation/deployment verified; read-only PR workflow configured but no external fork PR exercised |
| S1-001 through S1-006 | Not started; retained in S1 implementation brief |

Owner decisions: Apache-2.0 for new maintained files/contributions; public repository under killacalione/RPO-HUB; consolidation into this folder; foundation before S1. No global settings, new model route, application cloud service or billing activated.

First successful source/deployment: [ff350288](https://github.com/killacalione/RPO-HUB/commit/ff3502881fe35a9c3e4672e1bb8c8f6635120f19), [Actions run](https://github.com/killacalione/RPO-HUB/actions/runs/38796090652). Live HTTP 200 and release revision matched. REA live navigation passed without console/page errors; local desktop/mobile and keyboard replay passed. Both npm commands passed in a fresh clone without dependency installation. See [verification](../../VERIFY.md).

The final evidence/status commit remains within the initial bootstrap. Repository branch protection is enabled after bootstrap with required PR/check/conversation resolution, no force-push/deletion and zero peer approvals while only one maintainer exists. Future work uses a branch and human-maintained PR workflow; the live release record identifies the deployed revision.

Remaining unverified: fresh native-role discovery, external fork PR behavior, physical/accessibility-assistive device coverage and every S1/online/public-readiness gate. No source writer transfer or model/client change is in progress. Stop local QA processes at closeout; provider-owned REA browsers terminated after each capture.

Next concrete step: review community proposals and select the next scoped S1 task. No application implementation is started by this foundation.
