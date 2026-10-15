# RPO HUB

An open-source project exploring a connected hub of code-created worlds, personal spaces and social experiences.

**Current stage: community foundation.** The application is not implemented. The next application milestone is a bounded, local S1 creator prototype. This repository publishes requirements, research, work proposals and verified progress before that build begins.

[Project progress](https://killacalione.github.io/RPO-HUB/) · [Roadmap](docs/planning/ROADMAP.md) · [Contribute](CONTRIBUTING.md) · [Discussions](https://github.com/killacalione/RPO-HUB/discussions) · [Issues](https://github.com/killacalione/RPO-HUB/issues)

## Start here

- Read the [project brief](PROJECT-BRIEF.md), [requirements](docs/project/PRD.md) and [decision log](docs/planning/DECISIONS.md).
- Check [current work](docs/planning/WORK-STATE.md) and the [S1 implementation brief](docs/planning/S1-IMPLEMENTATION-BRIEF.md).
- Propose an improvement through Discussions; use an Issue for work with a clear outcome and acceptance criteria.
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md). Report security concerns through [private reporting](SECURITY.md).

## Run the foundation locally

Requires Node.js 24 LTS or newer. No dependency installation is needed.

```sh
npm run check
npm run build
npm run dev
```

Open the URL printed by the local server. The site is generated from `data/project-status.json`; it publishes no accounts, comments, telemetry or application runtime. Builds record their source commit in `release.json`. GitHub Actions validates pull requests and deploys approved `main` changes to Pages.

## Working with GitHub Desktop

Choose **File → Add local repository** and select this folder. Work on a branch, commit a focused change, publish the branch and open a pull request. `origin` points to this repository. Required checks run on every pull request; `main` uses the repository's reviewed change workflow.

## Project boundaries

The intended first online release includes public worlds, text/proximity/party voice and children, teens and adults. Those are requirements under research, not live services or readiness claims. S1 has no accounts, online sharing, payments or recording. See [public-release gates](docs/planning/PUBLIC-RELEASE.md).

## Provenance and license

This foundation combines two supplied planning packages. [The consolidation report](docs/provenance/MERGE-REPORT.md) explains identical files, meaningful differences and preserved legacy requirements. Original inputs and the earlier prototype remain preserved locally; unreviewed input artifacts are excluded from publication.

New maintained project files and contributions use [Apache-2.0](LICENSE). Third-party assets and code must retain their own licenses and attribution. See [NOTICE](NOTICE) and [governance](GOVERNANCE.md).
