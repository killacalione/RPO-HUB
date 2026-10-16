> Foundation adoption 2026-10-16: this is a future, unexecuted S1 assignment. Check session-specific client and tool availability in WORK-STATE.md; no client configuration is implied.

# S1: shared World SDK, dual authoring and local Hub proof

Future bounded engineering assignment, prepared after seven interview rounds and clarified 2026-10-15. **Proposed internal spike; not executed.** F1 product definition/foundation is current; this brief does not start work by itself. The owner must separately authorize a scoped S1 implementation after F1. The package contains no app. S1 is a local prototype inside the wider Oasis hub product, not a creator-only product or an online release. It preserves both coding paths and leaves text/proximity/party voice and trusted publishing to later integration.

## Goal and acceptance

Implement a small versioned SDK and world-project bundle used through local source tools and an integrated desktop browser editor. Two original code-authored scenes demonstrate exploration, visitor personalization and portal travel. At least one color choice and one approved object arrangement persist after travel/Return to Hub and a successful local save/reload. Browser editing, preview Run/Stop, diagnostics/logs and export/import work. Local and browser builds validate the same manifest/asset/source/capability contract. Visitor navigation does not require coding.

Extend that loop with a **local-only first-arrival proof**: create a clearly labeled local profile, choose/create an avatar, optionally create a personal Home and select its requested visibility, then make the first successful spawn the demo Hub with the dashboard available. The dashboard can open the local Home, wardrobe/personal appearance, discovery and creator paths without making these online services. A selected avatar/outfit belongs to the local player record; a world cannot silently replace it. The demonstration must reject or request an explicit choice for a world that does not support the selected appearance.

After the first Hub arrival, demonstrate a returning preference of Resume (default), Always Hub or Always Home (disabled until a Home exists), without letting a preference bypass first arrival. Resume the last **confirmed** location with immutable world/version reference, coordinate frame, exact XYZ, facing and save revision. Validate access/compatibility/coordinates before entry; on failure preserve the saved record and offer Retry, Hub and Home as available. A local profile is not a real account, identity check, online Home ownership, access grant or durable cross-device store.

Proposed content defaults: a simple island/plaza and a moon/observatory scene using original geometry or verified CC0 starter assets. These are replaceable test scenes, not selected brand/art direction. Actual language/framework pins are chosen for the spike from verified current primary docs and environment constraints; JS/TS, Babylon, desktop Monaco and QuickJS-in-Wasm worker containment are leading candidates, not an approved production stack.

## Concrete visitor acceptance

Selected product direction is the Oasis Hub with exploration, personalization and portal travel inside it (D-030, D-037–D-042). Follow [OASIS-EXPERIENCE](OASIS-EXPERIENCE.md) and the [demo journey](DEMO-EXPERIENCE.md). Keep published bundle/source separate from validated visitor and Home state. Owner chooses Home visibility at creation (D-031); mode semantics/defaults and shared editing remain proposed. The S1 preference is local intent only, never an online permission grant. See [space access](SPACE-ACCESS.md).

Handle invalid targets, duplicate travel, target-load failure and save/import errors with a usable recovery path. Provide a persistent Return to Hub action; Home is a separate optional destination after creation. Include keyboard access and reduced-motion travel. A local draft ID is not online ownership authority. Browser storage can be evicted or cleared [S80]; only report a local save after transaction completion, handle abort/error, and keep export recovery [S81]. No cloud synchronization claim. Full acceptance and state boundaries: [demo design](DEMO-EXPERIENCE.md).

## Inspect before implementation

After explicit S1 authorization, identify actual destination/root, existing instructions and Git state, runtime/package tooling and supported device/browser. Preserve existing work. Read AGENTS, PRD, Architecture, security, testing, current decisions and [OASIS-EXPERIENCE](OASIS-EXPERIENCE.md). Choose bounded writer ownership. If no implementation repo exists, use a separate internal spike folder; do not alter global settings or infer service activation. Product name/license/repository choices are recorded in current decisions, but this brief alone grants no implementation, publication or service authority.

## Suggested package boundaries

- Host browser application: source/editor/models, logs, Run/Stop and trusted renderer.
- Shared world SDK and versioned manifest/command schemas.
- Guest runtime adapter: isolated interpreted code, watchdog/termination, bounded host bridge and lifecycle.
- Local authoring/build entry point and templates producing the same bundle.
- Two small example worlds, their original/CC0 provenance and portable exports.
- Validated personal-draft configuration, requested visibility, local save adapter and visible failure/export recovery separate from world source.
- A local-only Oasis entry harness: profile/avatar, first-Hub gate, persistent dashboard, Home requested visibility, returning preferences and exact confirmed location, isolated from account or authorization authority.
- Meaningful tests plus documented actual setup commands/environment and limits.

Do not create separate permanent cloud services, arbitrary browser npm/package-runner features, platform accounts, child personal records, paid inference or billing. No public deployment, user uploads or media recording in S1. Use local/static processing with bundled approved dependencies/assets; inspect actual runtime network behavior.

## Tests that matter

New local profiles always first spawn in the Hub after avatar choice; direct world/Home links and default preferences cannot bypass it. Test dashboard availability across destinations, ownership of outfit selection, incompatibility denial/explicit choice, Resume/Always Hub/Always Home, exact version/frame/XYZ/facing/revision, stale/denied/corrupt location recovery, and that only an acknowledged write is called saved. Then create/edit/run a scene; choose Home visibility at creation and preserve it through local reload/export; reject imported ownership/invite credentials; personalize and restore choices after travel/Return to Hub/reload; export/import equivalent state; reject cross-draft/invalid transforms and failed imports without replacing good state; test failed/duplicate portal transitions and resource disposal; portal request is validated by the host; local/browser bundles reopen consistently; invalid/unsupported/oversized project and asset references reject. Run/Stop and resets dispose guest state; pinned hostile tests cover loops/allocation/promise/output floods, invalid IDs, forbidden host/network/account access and repeated restarts. Confirm the trusted UI remains usable. Heap/interpreter limits don't cover host/GPU work; bound entities/textures/queues/commands. Do not evaluate guest code natively in the host or rely on Node vm for hostile isolation.

Exercise the browser UI in an actual supported environment; preserve screenshots/test logs as internal evidence unless requested deliverables. Check keyboard controls/errors/save quota handling. No mobile, XR, sandbox-security, production or age-assurance claim from desktop/local tests. If dependencies/network/device access prevent a check, record the exact gap without fake pass results or paid-plan activation.

## Handoff and next integration

Return source/package, concise change summary, actual commands/results, tested revision/device, unverified limits and remaining launch decisions. Keep native-role loading unverified unless actually tested. Save user-facing artifacts persistently when appropriate; repository-backed source follows that workflow rather than duplicated archives.

S2 adds authoritative shared rooms/text; S3 world/party voice tests; S4 direct trusted publication; S5 public worldwide age-cohort operation after country/assurance/contact/coverage evidence. The full v0.1 requirements remain unchanged by S1's bounded scope. See [v0.1](V0.1-SPEC.md), [SDK](WORLD-SDK.md), [voice](VOICE-DESIGN.md), [global readiness](../legal/GLOBAL-READINESS.md) and [operating plan](OPERATING-PLAN.md).

## Optional REA research aid

The likely original [REA repository](https://github.com/morluto/rea) was read through GitHub. REA availability and registration vary by client and session; check actual tool inventory before relying on it. Use [integration notes](../research/REA-INTEGRATION.md) only when a local client/verified package and bounded analysis target are chosen. Source inspection and other available tools can proceed; REA readiness is not a dependency or completed registration.

## Portable execution and model switching

Use the [entry handoff](AGENT-HANDOFF.md), [work state](WORK-STATE.md) and [workflow](AGENT-WORKFLOW.md) with any selected capable agent. Keep one writer and the same acceptance across providers. Verify a materially changed client/model/endpoint route; save actual files/revision/tests and next step before switching. Cloud-first developer flexibility is confirmed; specific models/client settings/hardware fit and all application checks remain unverified. This adds no product-side AI inference dependency.
