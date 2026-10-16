# Contributing

The Oasis is establishing its product and community foundation. Useful contributions include source-backed research, clearer acceptance criteria, accessibility review and improvements to the progress site. Application work begins only from a separately scoped and authorized issue after F1.

## Propose and implement

1. Read [current work](docs/planning/WORK-STATE.md), the [experience blueprint](docs/planning/OASIS-EXPERIENCE.md), [requirements](docs/planning/REQUIREMENTS.md) and [decisions](docs/planning/DECISIONS.md).
2. Discuss uncertain direction in Discussions. Open an Issue with the problem, sources, proposed outcome, boundaries and acceptance criteria before substantial work.
3. Fork the repository or create a focused branch. With GitHub Desktop, select **New branch**, make a small change, commit, publish and create a pull request.
4. Run `npm run check` and `npm run build` using Node 24 LTS or newer. No install is required.
5. Describe behavior, validation and limitations in the PR. Update status data/docs when the actual state changes. Link the Issue and wait for maintainer review.

Keep requirement/decision IDs. Do not replace requirements with easier features. Label new implementation choices Proposed until selected, and claims Verified only with reproducible evidence. Cite primary sources and dates for version-sensitive research.

## Public data and licensing

Never commit credentials, personal interview notes, child/user data, model endpoints, local machine paths or raw incident evidence. Redact examples. Only submit work you have authority to contribute under Apache-2.0; third-party code/assets need compatible terms, source and attribution. No CLA or DCO is currently required. Clearly disclose material generated assistance and verify its output yourself.

## Checks and review

Foundation CI checks public-file boundaries, data shape, local documentation links, script syntax and site generation. It does not establish application security, accessibility conformance or public-release safety. Maintainers review workflow and permission changes especially carefully. Do not use privileged fork workflows or public self-hosted runners.

There is one active source/document writer per shared checkout when agents are used. Portable role cards are supplied explicitly; do not assume client-specific configuration loads elsewhere.

## Maintainer merge procedure

After the initial bootstrap, `main` requires a PR, the **Foundation checks** status and resolved conversations, with force-push/deletion blocked. A sole maintainer may merge their own passing PR; peer approvals become required when another maintainer accepts that responsibility. Contributor PRs are reviewed by the owner. Do not bypass failed checks or merge unreviewed external changes.

Use [private vulnerability reporting](SECURITY.md) for security concerns and follow the [Code of Conduct](CODE_OF_CONDUCT.md).
