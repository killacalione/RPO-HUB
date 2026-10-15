# First demo: explore, personalize, travel

**Requirement, interview round five on 2026-10-14:** Visitors explore, personalize spaces, and travel through portals. This is the selected experience direction. **Proposed implementation:** Two small original scripted worlds demonstrate that loop. Round six also requires owner-selected visibility at space creation. World names, art direction, exact props, mode semantics and guest editing are not owner decisions. No app or online behavior exists yet.

## Proposed first visitor journey

1. Create the starter space, select its requested visibility, and enter the first scene using visible movement/interaction controls. S1 stores this preference locally; online entry enforcement is a subsequent stage.
2. Open Personalize, choose an approved color, place an approved object, and move or rotate it within the permitted area. These visitor controls work without writing code.
3. Save the local draft and export a portable backup. Display whether changes are pending, saved on this device, or failed.
4. Activate a labeled portal, enter the second scene, and interact with one original landmark.
5. Use the portal or a persistent Return home control. The first scene restores the visitor's saved choices.
6. Reload the app and reopen the draft; import the exported copy in another supported test environment and confirm equivalent personalization.

| Test scene | Proposed role | Visible proof |
|---|---|---|
| Island / plaza | Exploration and a personal draft of the starter space | Color and object arrangement persist in this visitor's draft |
| Moon / observatory | Distinct destination with return portal | Travel, a landmark interaction, and a reliable return path |

These are replaceable test themes, not licensed fictional locations or final branding. Use original geometry or documented approved/CC0 assets. Keep two scenes small so they demonstrate the selected interactions within the proposed internal budget.

## Creator code and visitor personalization

Creators use the same versioned World SDK through local source tools and the integrated browser editor. Their code defines approved objects, interactions and travel requests. Visitors choose among the world-declared options through trusted host controls; their preferences do not edit a published template for every participant or grant publisher status.

Proposed separation: a world bundle contains source, manifest, assets, capabilities and an immutable version; a personal draft contains a reference to that version and validated configuration such as color IDs and bounded object transforms. The host owns storage and applies configuration. Scripts receive only approved copied state and validated events, never database handles or private account data. When online persistence is added, the server checks owner, instance, version and current edit permissions on every write. Local draft identifiers in S1 are not proof of online ownership.

Owner-selected visibility at creation is required (D-031). Private initial selection and Private/Invite-only/Public mode semantics are proposed; local drafts have no actual online visitor grants. Collaborative editing and invitation/age-contact details remain open. The selected public-world/social requirement remains unchanged. See [space access](SPACE-ACCESS.md).

## Portal behavior

The guest requests a registered target world ID. The host validates the target, permitted entry point and current transition; online stages also check country/cohort/account/content eligibility. No guest-selected arbitrary URL, age group, party membership or room credential becomes authority.

Travel has visible loading and failure states. Reject duplicate transition requests. If the target fails to validate or load, keep or restore a usable source world and offer Retry or Return home. On successful travel, reset the outgoing guest runtime and dispose its resources. Test repeated travel for duplicate events, traps and resource growth. Portal effects support reduced motion and a keyboard-accessible alternative. Existing party voice is managed by the app when S3 is implemented; no S1 voice claim.

## Persistence and recovery

S1 stores only local project/draft data and offers export/import; no accounts or automatic cloud synchronization. Browser storage is best-effort by default, can be cleared/evicted, and can fail at quota [S80]. Treat a write as locally saved only after its transaction completes; handle abort/error and preserve the last valid draft [S81]. This is not a guarantee against device failure. Saving only on page unload is unsuitable [S81].

Validate both bundle and configuration before replacing a good draft. Reject unsupported schemas, unknown asset/color/target IDs, non-finite or out-of-range transforms, oversized payloads and corrupt imports. A changed template version needs explicit compatibility/migration or a recoverable error. Exported files contain creative data, not credentials or account/guardian records.

## S1 acceptance proposal

- The loop runs through both local and browser authoring using compatible bundles.
- Requested visibility is chosen at creation and survives local save/reload/export without importing ownership or access credentials. Actual online denial needs later server/client tests.
- At least one color choice and one object arrangement survive travel, Return home and reload after a successful save.
- Export/import restores equivalent validated configuration without silently overwriting the last good draft on failure.
- Invalid target, repeated travel and save failure produce usable recovery; source/guest resources are cleaned up on successful transitions and Stop.
- Keyboard controls and reduced-motion travel are exercised in the actual supported desktop test environment.
- Existing runtime/bridge/renderer hostile cases in the [S1 brief](S1-IMPLEMENTATION-BRIEF.md) still apply. All application tests remain unexecuted.

The main [v0.1 scope](V0.1-SPEC.md), [World SDK](WORLD-SDK.md), [voice](VOICE-DESIGN.md), [age policy](AGE-POLICY.md), [decisions](DECISIONS.md) and [sources](../research/SOURCES.md) remain authoritative for their domains.
