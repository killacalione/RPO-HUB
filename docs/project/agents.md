# Agents and handoff

The coordinator owns integration and final evidence. One active source/document writer per checkout; independent reviewers work read-only until explicit transfer. Shared files, not chat memory, carry the task across clients.

The seven `.codex/agents/*.toml` files are the maintained native prompt definitions. `roles/*.md` mirrors the same bodies for explicit use in another client. Models, effort and concurrency inherit the owner's defaults. The adapter's presence and parse checks do not prove native discovery; verify loading in a fresh client before claiming execution. Read-only role text is not an OS sandbox in clients without enforcement.

Roles: product-planner for scope; architecture-data-specialist for interfaces/data; design-system-specialist for UI/accessibility; documentation-researcher for primary-source research; implementation-engineer for bounded writes; security-reviewer for trust boundaries; qa-release-reviewer for checks and evidence. Use [work state](../planning/WORK-STATE.md) for task, writer, changed files/checks/decisions, blockers and the next concrete action.

Before a model/client change, checkpoint the actual route and task evidence privately when sensitive, stop owned processes and explicitly transfer ownership. Test structured calls/result handling for a materially changed route. No provider switch or paid route is required for the foundation.
