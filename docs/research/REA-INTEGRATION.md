> Foundation adoption 2026-10-15: current root/work ledger supersedes historical repository and tool-availability statements. REA and Context7 are available here; S1 remains unstarted. No new configuration is implied.

# REA research integration checkpoint

Checked 2026-10-14. The earlier unspecified Rea reference has a **likely** match: [morluto/rea](https://github.com/morluto/rea), REA: Reverse Engineer Anything. Its original README identifies that repository, rea.tools and the rea-agents npm package as official sources [S86]. The owner's intended match is not independently confirmed.

## Observed connection state

GitHub connector reads of the original public repository, installation documentation and package metadata succeeded. Active tool discovery found no REA tools. Exact plugin searches for REA and morluto returned no matches; the directory is not exhaustive. REA was not installed, registered, restarted or used to analyze a target here. Existing GitHub and web capabilities remain usable for this research.

## Role in this project

Proposed optional engineering aid: inspect our own or permitted reference JavaScript structure and investigate bounded behavior when source inspection is insufficient. It is not the world engine, hosting backend, age verifier or visitor scripting authority. Start with a concrete question and compare findings against actual tests and source rights. No proprietary game/application target has been selected.

REA describes local CLI/MCP analysis for JavaScript/Electron, native applications and other artifacts; static JavaScript analysis does not need a native decompiler [S86]. REA-authored code uses MIT, while dependency/asset/commercial-tool rights remain separate [S89]. No paid Hopper/IDA installation is part of the proposed baseline.

## Reviewable local integration path

The original installation guide supports scoped setup, dry-run JSON, client-specific doctor checks, backups and restart/reconnection [S87]. Choose the actual local agent and device before preparing its configuration; preserve existing MCP entries and use existing session authorization for the bounded change.

| Local step | Upstream pattern; not executed here |
|---|---|
| Resolve published package | npm view rea-agents dist-tags.latest |
| Inspect a selected client | rea doctor --client codex --json |
| Prepare the configuration diff | rea setup --client codex --dry-run --json |
| Apply only authorized scope | rea setup --client codex --yes --json |
| Verify availability | Reconnect/restart, inspect actual tools and complete a harmless bounded source-analysis check |

These patterns assume an available verified local REA CLI. Substitute an actually supported client ID; current main documentation lists Codex and Hermes. Pin the exact verified published package in a persistent registration. The observed main package version is 6.4.0 with Node range ^22.19.0, ^24.11.0 or >=26.0.0 [S88]; neither npm publication nor executable readiness was verified. Main may differ from the installed/released code. No blind latest-version adoption or paid analysis-provider installation is implied.

Evidence: installation blob SHA 72bf11d3ef31922d8ce5a4702a9a057407259146; package blob SHA 1159cbb5eca7e9476868c87d9f97ec5ba7e86a4f. These identify fetched files, not a tested package/commit. See the [source register](SOURCES.md) for primary URLs.

## Round-seven client scope

Owner intends Codex, Hermes, Copilot and other clients, mainly cloud models. Preserve one desired REA capability with client-specific registrations and actual tool checks; a universal configuration file is not assumed. Current user-device client/version and REA package readiness remain unknown. Use [portable workflow](../planning/AGENT-WORKFLOW.md) and [capability record](../planning/CLIENT-CAPABILITIES.md).
