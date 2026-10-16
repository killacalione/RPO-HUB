> Foundation adoption 2026-10-16: current product and phase instructions are in the maintained root/docs; check client and tool availability per session in WORK-STATE.md. No S1 implementation or client configuration is implied.

# Portable development workflow

**Requirement, interview round seven, 2026-10-14:** Use Codex, Hermes, Copilot and other agents; mainly cloud models, with switching and compatible local models capable of tool use and reasoning. This is a development-workflow requirement, separate from the hub's eventual AI visitors/characters. **Proposed:** Shared repository context, explicit task ownership, a handoff record and per-client/model capability checks. No user's client settings, model routes or MCP registrations were changed.

## Shared project state

[AGENTS.md](../../AGENTS.md) routes to maintained requirements, the canonical [Oasis experience](OASIS-EXPERIENCE.md), decisions, roadmap, architecture/security/testing and portable role cards. [WORK-STATE.md](WORK-STATE.md) records actual progress, ownership and next steps; [CLIENT-CAPABILITIES.md](CLIENT-CAPABILITIES.md) records observed client/model/runtime support. [AGENT-HANDOFF.md](AGENT-HANDOFF.md) contains a queued S1 prompt and handoff format, not the current task. F1 foundation must be completed and the owner must separately authorize an S1 scope before an agent uses it. Chat transcripts are supplementary. Switching clients does not automatically transfer conversation history or hidden reasoning.

Use the same scoped acceptance and current source snapshot across clients. Before resuming, read current work state and actual file/Git status. Preserve pending user edits and recorded decisions. Do not rewrite implementation or restart research merely because the model changed. Each role is a bounded responsibility; a role name does not choose a provider or grant tools.

## Client adapters observed in current docs

| Client | Instructions and route | Check on actual installation |
|---|---|---|
| Codex | AGENTS discovery/overrides; MCP client and provider configuration [S90–S92] | Active instruction chain, client version, available models and actual tool list |
| Hermes | AGENTS or higher-priority project context; model/provider picker and MCP configuration [S96–S98] | Project context loaded, current provider/model, endpoint protocol and enabled tools |
| Copilot | Support varies by surface; repository copilot-instructions shim plus AGENTS where supported [S93, S94] | IDE/CLI/cloud-agent distinction, loaded instructions, plan and MCP source |
| Local inference | A compatible agent calls a local server/model; template/parser/protocol support matters [S99, S100, S103] | Model/quantization, actual context and memory, structured calls, result round trips and task behavior |
| Other agents | Explicitly supply shared entry prompt and relevant role card | Supported instruction/config formats and permissions remain unknown until tested |

The preserved seven Codex TOMLs are a client-specific adapter with matching portable role text. They are not a universal loader for every agent. The added `.github/copilot-instructions.md` is a small context router; file presence alone does not demonstrate client loading. Existing personal/project overrides still need inspection. Keep one project policy; adapt configuration syntax rather than duplicating conflicting rules.

## Switching and concurrency

Recommended default is one active writer per task/checkout. Before switching, finish or stop active tool processes, record modified files and actual test results, save the next concrete step, and transfer ownership. The next agent checks those records against actual files before editing. Use only task-relevant context; a smaller model's window may not contain the prior chat.

For explicitly authorized parallel implementation, assign non-overlapping tasks and separate branches/worktrees in an existing Git repository [S101]. A reviewer can inspect a fixed patch/revision with read-only tools when the client enforces that. Coordinate shared documentation/lockfiles and artifact-writing tests. Worktrees do not themselves restrict network, secrets or OS access. Do not let multiple agents edit the same checkout or resolve each other's ongoing work through destructive resets.

## Capability probe before relying on a route

For each new or materially changed client/model/endpoint combination, use a disposable fixture and actual tool schemas. Verify reading the scoped file, a bounded edit, executing a known check, reading its result, recovery from a failed tool, and continuation after a tool-result round trip. Record exact versions/model ID/protocol and observed limitations. A planning-only client can still research or review, but cannot claim changes/tests it could not execute.

A short decision explanation and proposed checks help review reasoning; do not ask for hidden reasoning traces or treat a model's self-description as evidence. A tool-trained model still needs the runtime's supported parser and endpoint. Loading a model, exposing a tools array or matching an API shape is insufficient to establish reliable project execution. Small probe success establishes only that route's bounded behavior, not public-script security or release readiness.

## MCP and agent bridges

Record desired capability, transport, target environment and required access, then use the client's supported configuration. Codex uses its MCP client settings; Hermes uses mcp_servers configuration; Copilot CLI and VS Code use different JSON roots/paths [S92, S94, S98]. A cloud model inside a local agent can use local tools; a remotely hosted agent needs tools reachable in its own environment. Do not copy localhost endpoints or credentials between those environments.

Current Hermes documentation still shows a Codex MCP-server preset [S98], while current OpenAI documentation says codex mcp-server was removed and describes a distinct app-server protocol [S102]. Keep that bridge unconfigured pending installed-version checks. Codex can still connect to external MCP tools. Shared file handoffs do not depend on exposing one agent as another agent's server. REA is optional; its availability and configuration are client/session-specific. See [integration notes](../research/REA-INTEGRATION.md).

## Cloud-first cost and local model policy

Use already available/entitled cloud routes for substantive implementation and review. Local models are proposed for bounded support or implementation after their capability probe; specific models/hardware fit have not been chosen or tested. Record selected provider/model and reasoning effort if supported; test quality rather than hardcoding one vendor into project rules.

Current GitHub docs say Copilot Free and Student use automatic model selection, with student access tied to verification [S95]. Manual switching is therefore client/plan-dependent. Actual entitlements and quotas must be checked privately before use. Distinguish hosting/voice/AI-character costs from development-agent usage. Remain within existing authorized routes and budgets; save a handoff if a limit blocks work. No new subscription, credit activation, inference service, paid provider or unattended job is configured by this package.

S1 is a future local proof of the Oasis Hub/dashboard, local avatar/Home and exact-resume rules, shared SDK, both creator coding paths, two exploration/personalization/portal scenes and recoverable local visibility/save/export behavior. It is not the current F1 task and the handoff prompt does not authorize implementation. Public accounts/social/voice, trusted publishing and worldwide child eligibility remain later evidence-driven stages. See [S1 brief](S1-IMPLEMENTATION-BRIEF.md), [experience blueprint](OASIS-EXPERIENCE.md), [roadmap](ROADMAP.md), [v0.1](V0.1-SPEC.md), [sources](../research/SOURCES.md) and [operating plan](OPERATING-PLAN.md).
