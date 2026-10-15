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
