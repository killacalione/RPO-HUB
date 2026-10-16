# Foundation verification

The foundation separates implemented configuration, locally passing checks and observed remote deployment. Current commands:

```sh
npm run check
npm run build
npm run dev
```

Input archive equality and merge counts are documented in [consolidation evidence](docs/provenance/MERGE-REPORT.md). Current publication requires clean public-file review, valid local links/role mirrors/status data, generated-only Pages artifacts, passing Actions, a matching live `release.json`, branch policy and the correct repository in GitHub Desktop.

## Observed results, 2026-10-15

- `npm run check`: passed for 81 public files, status/link/script checks and seven native/card mirrors. Python 3.11 parsed all seven TOMLs independently.
- `npm run build`: passed; output contains exactly HTML, CSS, favicon, release JSON and `.nojekyll`. A planted stale output fixture was removed by the next build.
- Fresh remote clone: check/build passed with no dependency installation; working tree clean. Public content-hash scan found zero byte-identical duplicate groups.
- Source preservation: all 94 original input files compared byte-for-byte with their archives immediately before removing redundant source trees. One top-level project folder remains.
- Public repository, HTTPS origin/main and Desktop registration verified. Desktop showed RPO-HUB/main, correct public identity and zero changed files; unrelated repository edits were untouched.
- [First Actions run](https://github.com/killacalione/RPO-HUB/actions/runs/38796090652): Foundation checks and Publish progress succeeded at source `ff3502881fe35a9c3e4672e1bb8c8f6635120f19`.
- Live site returned HTTP 200; `release.json` matched that source. Pages uses Actions/HTTPS. Deployment environment permits main only. Discussions, issue labels and private vulnerability reporting verified; GitHub community profile reported 100%.
- REA Chromium 156.0.4314.23: desktop navigation passed (`ev_729efdfaf80728752501add089fc1ad380f69beb898a889237e9205433e855b9`); 375×812 reduced-motion/keyboard skip link passed (`ev_8959a33ff06265681c4731746a79c3d3da00f177d6736deda21fc3dd321cc7f1`); live roadmap/contribute navigation passed without page/console errors (`ev_a82d075aabcd13b710b02d9c16ded7973a8d37b27146e672464dc5c6419bf049`). Each capture terminated its provider-owned browser.

Final publication updates only evidence/status labels. Its exact revision and deployment result are available from Git history, Actions and the live release record. Branch protection is established at bootstrap completion. No external fork PR, native-role loading, broad device/accessibility conformance, S1 hostile runtime, privacy or public-release readiness is claimed.

## PR #4 completion checkpoint — 2026-10-16 UTC

The owner authorized merge and branch cleanup after the earlier implementation checkpoint. Dependency PRs #1–#3 were each updated against then-current main, passed their refreshed Foundation check and merged. Their remote branches are absent. PR #4 now exists, and `gh pr update-branch 4 --repo killacalione/RPO-HUB`, `git fetch origin --prune`, and `git merge --ff-only origin/feat/pixel-art-community-hub` succeeded; source synchronized at `9c3ddf4` before this correction. Local main had been stale; remote main is `a8a30f80c62fb21c0accde6edcd516cb58d934cb`.

Read-only review found no merge blocker in the site diff. It identified an ineffective `frame-ancestors` directive in a CSP meta element. That directive has been removed because it requires an HTTP response header; no anti-framing protection is claimed from this site's metadata. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors). Earlier captured console observations remain point-in-time evidence, not proof that all browsers accepted every directive.

GitHub CLI works through the existing normal Windows user/keyring context; sandbox authentication returned HTTP 401. No credential or global configuration was changed. Required branch policy was read through that working route: strict Foundation checks, conversation resolution, administrator enforcement, no force-push/deletion of main and zero required peer approvals. Repository merge policy permits squash only and automatically deletes merged remote heads. Final check results and post-merge verification will be reported for their actual source revisions; a passing PR check does not prove deployment.

The first completion-check run rejected a personal absolute source path added to the public ledger. It was replaced with a portable project-relative root before continuing; no personal path was committed. The corrected run of `npm run check` passed (84 public files, seven role mirrors, five routes, links, theme/motion and curated output); `npm run build` passed (five pages); `git diff --check` passed. A clean post-commit build correctly identified final head `c044ca6235d97ebbb837e9a2957e8db1f2d00e5d`. Runtime: Node `v25.9.0`, npm `11.12.1`, PowerShell `7.6.5`.

### Verified merge, live rollout and cleanup

- [Final-head Node 24 checks](https://github.com/killacalione/RPO-HUB/actions/runs/38829418269) passed. `gh pr merge 4 --repo killacalione/RPO-HUB --squash --match-head-commit c044ca6235d97ebbb837e9a2957e8db1f2d00e5d` succeeded without administrator bypass. Merged revision: `bd043428a2fd0add5f9f880dd1bf440205f0e32f`.
- [Main Actions run](https://github.com/killacalione/RPO-HUB/actions/runs/38829490402) completed successfully, including Pages publication. Live `release.json` returned HTTP 200 and that exact SHA. A local `npm run build` on the clean merged source produced the same revision.
- `Invoke-WebRequest` checked Home, Project, Progress, Roadmap, Community, `app.js`, `styles.css`, favicon and release JSON: nine HTTP 200 responses with expected MIME types. SHA-256 byte comparison found Windows CRLF differences in JS and Home's inline SVG; comparing all nine UTF-8 text resources after CRLF/LF normalization matched completely. No asset/content difference was dismissed as a pass without this follow-up comparison.
- Codex in-app browser opened the Home portal and all five main-navigation routes with matching headings/current links. Arcade Night persisted across navigation; Meadow selected correctly; Sunset was restored. Home had no overflow at 375×812, 1280×720 or the default 1008×1187. All four portal bounds were inside the 375×812 viewport. Captured warning/error log was empty. Reduced-motion mode remained active with its disabled control; normal-motion pause/resume remains unverified. Temporary viewport overrides were reset.
- `git fetch origin --prune`, `git switch main`, and `git merge --ff-only origin/main` synchronized main. `git diff --exit-code c044ca6235d97ebbb837e9a2957e8db1f2d00e5d bd043428a2fd0add5f9f880dd1bf440205f0e32f` proved identical source trees after the required squash merge. The unchanged local feature ref was then removed; the remote head had auto-deleted. At this functional checkpoint, local/remote main was the sole branch and the checkout was clean. This subsequent evidence-only update follows the same protected PR and verified cleanup procedure; its final publication SHA is available from Git, Actions and the live release record.

## Pixel-art project hub iteration — 2026-10-15

Scope is the information site and curated Pages output only; S1 application development remains unstarted. The focused source branch starts at `0d6b0f29c8c1387cca14588455a2a06937da6c4e`; implementation commit is `8dd5822882be4d8493491be9c205ce7c3bf09b87` before this evidence/hand-off follow-up. Local preview builds label a dirty tree `local-uncommitted`; clean, CI and live builds retain their exact source SHA. A PR/main merge is required before public Pages changes.

### Reference research and design choices

- GitHub currently shows [NES.css](https://github.com/nostalgic-css/NES.css/) at 21.8k stars. Its own documentation describes it as an 8-bit component style and says the site author supplies the layout. This informed crisp borders and button affordances; no package or third-party asset was imported.
- [React95](https://github.com/react95-io/React95) is shown at 7.3k stars and presents themed retro controls. It informed selectable visual palettes and familiar native controls; RPO HUB remains dependency-free and does not copy its components.
- The [Papercade demo](https://anandparth.github.io/papercade/) informed the idea of placing clearly labeled, interactive destinations within a small scene. Its sprites and assets were not reused. The earlier REA reference observations are `ev_052b1953982ff86822c7f4a03ace8390b6b3a81d31c78fc3816f6cd481bfb258` (NES.css) and `ev_20363a835c7d274df421dd50267802ebe8348af99a274bf83fed67c37d3f71dc` (Papercade); these are reference evidence, not review evidence for this new build.
- Pixel scaling follows MDN's [`image-rendering`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/image-rendering) guidance; ambient animation is slow, user-pausable when motion is allowed, and suppressed for reduced-motion preferences per [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion) and [W3C](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions) accessibility guidance.
- New scenery is hand-authored SVG with local CSS/JS only. Five routes present the vision, evidence-backed progress, F0–S5 roadmap and contribution links; status remains sourced from `data/project-status.json`.

### Local checks and browser observations

- Environment: PowerShell 7.6.5, Node `v25.9.0` (package requires `>=24`), npm `11.12.1`, Codex In-App Browser. No package was installed and no new runtime dependency was added.
- `npm run check`: passed for 84 public source files and seven role mirrors; checked status/content, JavaScript syntax, all five generated routes, every generated relative link, session-theme/motion controls and the exact curated output allowlist.
- `npm run build`: passed with exactly five route HTML files plus `app.js`, `styles.css`, favicon, release JSON and `.nojekyll` in `dist/`.
- `npm run dev`: served `/`, `/project/`, `/progress/`, `/roadmap/`, `/community/` and all four shared assets with HTTP 200. JavaScript was served as `text/javascript; charset=utf-8` so the browser executes it under `nosniff`.
- In-browser Home fit was measured with no page overflow at **1280×720**, **1440×900** and **375×812**. The four portal links remained visible at 375×812. All five routes opened from the navigation and reported the matching page heading/current item; detail pages can scroll.
- Arcade Night and Handheld Meadow were selected and visually reviewed at 375×812. Sunset Portal remained the default. Changing themes carried through navigation across Project, Progress, Community and Home. No console errors or warnings were captured.
- Keyboard Tab focused the visible “Skip to content” link with a 3px focus outline; Enter moved to `#main`. In this browser `prefers-reduced-motion` evaluated to `true`; the control announced reduced motion, was disabled, and CSS reduced animation duration to `0.01ms` with one iteration. **Pause/resume with a no-preference browser was not exercised** because the available in-app browser was already in reduced-motion mode and its controls did not provide a per-tab media override.
- **REA local-build review is an explicit gap:** two controlled REA browser-capture attempts against `http://127.0.0.1:4173/` did not return a result and were cancelled. No REA evidence ID is claimed for the new build. The observations above are from the actual Codex in-app browser and the local HTTP server; they do not replace a future REA replay if the runner becomes available.
- Main-branch deployment is verified in the completion checkpoint above. Physical phones, assistive technology beyond browser keyboard/accessibility inspection, other browser engines and broad accessibility conformance remain unverified. No online product, account, social, child-safety, runtime-security or release readiness is implied.
