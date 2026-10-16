# The Oasis

**The Oasis is an open-source project for a welcoming, persistent hub that connects people to personal spaces and community-made worlds.** People will be able to arrive in a central Hub, find a world to visit, personalize an avatar and Home, or build a world of their own. Creation is a core capability inside the larger hub experience; people should not need to write code just to visit.

## What exists today

The project is in **F1 — product definition and community foundation**. This public repository contains the product blueprint, phased requirements and proposals, community contribution process, and a static pixel-art progress site. It does not provide real sign-in, a playable Hub or Home, a wardrobe, user-made world hosting, chat, voice or any other online product service. S1 application implementation has not started. The site’s progress data and [work ledger](docs/planning/WORK-STATE.md) distinguish implemented source, verified checks, planned work and remaining gaps.

## Start here

- New to the project? Read the [project brief](PROJECT-BRIEF.md) and [experience blueprint](docs/planning/OASIS-EXPERIENCE.md).
- Want to see what comes next? Read the [phased roadmap and acceptance gates](docs/planning/ROADMAP.md) and [requirements](docs/planning/REQUIREMENTS.md).
- Want current evidence? Start with [Progress](https://killacalione.github.io/The-Oasis/progress/) and [VERIFY](VERIFY.md).
- Want to contribute? Read [CONTRIBUTING](CONTRIBUTING.md), then discuss ideas or propose a small, testable issue.
- Looking for engineering boundaries? Follow [AGENTS.md](AGENTS.md), [architecture](docs/project/Architecture.md), [security](docs/project/security.md), [testing](docs/project/testing.md) and the task-specific handoff in [WORK-STATE](docs/planning/WORK-STATE.md). Use `roles/implementation-engineer.md` as the portable implementation role when assigned; native Codex prompts are client adapters, not portable instructions.

## Run the project information site

Requires Node.js 24 or newer. No dependency installation is needed.

```sh
npm run check
npm run build
npm run dev
```

Open the URL printed by the local server. The site reads `data/project-status.json`, generates five static routes and publishes no application accounts, comments, telemetry or product runtime. GitHub Actions validates pull requests and deploys only generated `dist/` from `main`.

## Contribute

Use the public [Discussions](https://github.com/killacalione/The-Oasis/discussions) for questions and early proposals. Use [Issues](https://github.com/killacalione/The-Oasis/issues) for bounded work with a clear outcome and acceptance criteria. Changes follow the protected `main` pull-request workflow. Read the [Code of Conduct](CODE_OF_CONDUCT.md); report vulnerabilities through [private security reporting](SECURITY.md).

## Product boundaries

The intended first public release serves eligible children, teens and adults and includes public world discovery, text/proximity/party voice and trusted direct publishing. These are requirements under research, not live services or launch-readiness claims. S1 is an internal local proof with no real accounts, online publishing, payments, recording or child-data collection. The exact stack and online providers remain unselected until evidence supports a scoped decision.

## Provenance and license

This foundation consolidates two supplied planning packages. The [merge report](docs/provenance/MERGE-REPORT.md) describes identical files, meaningful differences and preserved legacy requirements. Original inputs and an earlier prototype remain preserved locally; unreviewed input artifacts are excluded from publication. New maintained files and accepted contributions use [Apache-2.0](LICENSE). Third-party assets and code retain their own licenses and attribution; see [NOTICE](NOTICE) and [governance](GOVERNANCE.md).
