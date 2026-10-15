> Foundation adoption 2026-10-15: current root/work ledger supersedes historical repository and tool-availability statements. REA and Context7 are available here; S1 remains unstarted. No new configuration is implied.

# S1: shared World SDK and dual authoring

Concrete next engineering assignment, prepared after seven interview rounds. **Proposed internal spike; not executed.** Current package contains no app. The goal is a reviewable local prototype toward the confirmed worldwide/public/all-age platform, preserving both coding paths, text/proximity/party voice and trusted publishing for later integration.

## Goal and acceptance

Implement a small versioned SDK and world-project bundle used through local source tools and an integrated desktop browser editor. Two original code-authored scenes demonstrate exploration, visitor personalization and portal travel. At least one color choice and one approved object arrangement persist after travel/Return home and a successful local save/reload. Browser editing, preview Run/Stop, diagnostics/logs and export/import work. Local and browser builds validate the same manifest/asset/source/capability contract. Visitor navigation does not require coding.

Proposed content defaults: a simple island/plaza and a moon/observatory scene using original geometry or verified CC0 starter assets. These are replaceable test scenes, not selected brand/art direction. Actual language/framework pins are chosen for the spike from verified current primary docs and environment constraints; JS/TS, Babylon, desktop Monaco and QuickJS-in-Wasm worker containment are leading candidates, not an approved production stack.

## Concrete visitor acceptance

Selected direction is exploration, personalizing spaces and travel through portals (D-030). Proposed sequence: enter the starter scene; change an approved color and place/move a prop; save/export; travel to a distinct second scene; interact with a landmark; return to the preserved draft. Creator scripts define allowed interactions; visitor controls need no code. Keep published bundle/source and validated visitor configuration separate. Owner chooses visibility at creation (D-031); exact modes/defaults and shared editing remain proposed. Add a clear creation selector and preserve the requested preference with local drafts. This is not an online permission grant. See [space access](SPACE-ACCESS.md).

Handle invalid targets, duplicate travel, target-load failure and save/import errors with a usable recovery path. Provide persistent Return home, keyboard access and reduced-motion travel. A local draft ID is not online ownership authority. Browser storage can be evicted or cleared [S80]; only report a local save after transaction completion, handle abort/error, and keep export recovery [S81]. No cloud synchronization claim. Full acceptance and state boundaries: [demo design](DEMO-EXPERIENCE.md).

## Inspect before implementation

Identify actual destination/root, existing instructions and Git state, runtime/package tooling and supported device/browser. Preserve existing work. Read AGENTS, PRD, Architecture, security, testing and current decisions. Choose bounded writer ownership. If no implementation repo exists, use a separate internal spike folder; do not initialize/publish Git or alter global settings merely from this brief. Future repo name/license remain open. Current user/task authorization governs execution; this document alone grants none.

## Suggested package boundaries

- Host browser application: source/editor/models, logs, Run/Stop and trusted renderer.
- Shared world SDK and versioned manifest/command schemas.
- Guest runtime adapter: isolated interpreted code, watchdog/termination, bounded host bridge and lifecycle.
- Local authoring/build entry point and templates producing the same bundle.
- Two small example worlds, their original/CC0 provenance and portable exports.
- Validated personal-draft configuration, requested visibility, local save adapter and visible failure/export recovery separate from world source.
- Meaningful tests plus documented actual setup commands/environment and limits.

Do not create separate permanent cloud services, arbitrary browser npm/package-runner features, platform accounts, child personal records, paid inference or billing. No public deployment, user uploads or media recording in S1. Use local/static processing with bundled approved dependencies/assets; inspect actual runtime network behavior.

## Tests that matter

Create/edit/run a scene; choose visibility at creation and preserve it through local reload/export; reject imported ownership/invite credentials; personalize and restore choices after travel/Return home/reload; export/import equivalent state; reject cross-draft/invalid transforms and failed imports without replacing good state; test failed/duplicate portal transitions and resource disposal; portal request is validated by the host; local/browser bundles reopen consistently; invalid/unsupported/oversized project and asset references reject. Run/Stop and resets dispose guest state; pinned hostile tests cover loops/allocation/promise/output floods, invalid IDs, forbidden host/network/account access and repeated restarts. Confirm the trusted UI remains usable. Heap/interpreter limits don't cover host/GPU work; bound entities/textures/queues/commands. Do not evaluate guest code natively in the host or rely on Node vm for hostile isolation.

Exercise the browser UI in an actual supported environment; preserve screenshots/test logs as internal evidence unless requested deliverables. Check keyboard controls/errors/save quota handling. No mobile, XR, sandbox-security, production or age-assurance claim from desktop/local tests. If dependencies/network/device access prevent a check, record the exact gap without fake pass results or paid-plan activation.

## Handoff and next integration

Return source/package, concise change summary, actual commands/results, tested revision/device, unverified limits and remaining launch decisions. Keep native-role loading unverified unless actually tested. Save user-facing artifacts persistently when appropriate; repository-backed source follows that workflow rather than duplicated archives.

S2 adds authoritative shared rooms/text; S3 world/party voice tests; S4 direct trusted publication; S5 public worldwide age-cohort operation after country/assurance/contact/coverage evidence. The full v0.1 requirements remain unchanged by S1's bounded scope. See [v0.1](V0.1-SPEC.md), [SDK](WORLD-SDK.md), [voice](VOICE-DESIGN.md), [global readiness](../legal/GLOBAL-READINESS.md) and [operating plan](OPERATING-PLAN.md).

## Optional REA research aid

The likely original [REA repository](https://github.com/morluto/rea) was read through GitHub; no REA server/plugin is connected here. Use [integration notes](../research/REA-INTEGRATION.md) only when a local client/verified package and bounded analysis target are chosen. Source inspection and existing tools can proceed; REA readiness is not a dependency or completed registration.

## Portable execution and model switching

Use the [entry handoff](AGENT-HANDOFF.md), [work state](WORK-STATE.md) and [workflow](AGENT-WORKFLOW.md) with any selected capable agent. Keep one writer and the same acceptance across providers. Verify a materially changed client/model/endpoint route; save actual files/revision/tests and next step before switching. Cloud-first developer flexibility is confirmed; specific models/client settings/hardware fit and all application checks remain unverified. This adds no product-side AI inference dependency.
