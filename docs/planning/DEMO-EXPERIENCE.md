# S1 demonstration: arrive at the Hub, personalize and travel

**Requirements:** The Oasis is a Hub-centered community product; a new account chooses an avatar and first arrives in the Hub; returning players may resume or choose Hub/Home; avatar appearance belongs to the player; visitors explore, personalize and travel through portals; a Home owner chooses visibility at creation. The Hub/arrival clarification was recorded 2026-10-15. **Proposed S1 implementation:** local-only profiles and two small original scripted worlds demonstrate those rules without claiming online accounts or access. World names, art direction, exact props, mode semantics and guest editing remain undecided. No application or online behavior exists yet.

## Proposed local first-arrival and visitor journey

1. Create a clearly labeled local profile and create/select an avatar. A local profile is not a real account or identity check. If the player creates a personal Home, require a visibility selection in its creation flow and store only local requested intent.
2. Make the first successful spawn the Oasis Hub, with a persistent dashboard/control entry. Do not let a saved default, direct world link or Home preference bypass that first arrival. Dashboard choices can open the local Home, avatar/wardrobe, discovery or creator path; these are prototype views, not account services.
3. Launch the first small scene from the Hub. Open Personalize, choose an approved color, place an approved object and move/rotate it within the permitted area. Visitor controls work without writing code. The world cannot modify the local avatar/outfit selection.
4. Save the local draft and export a portable backup. Show pending, acknowledged or failed status. Record the confirmed world/version, coordinate frame, exact X/Y/Z, facing and save revision for resume.
5. Activate a labeled portal, enter the second scene and interact with one original landmark. Reject duplicate travel requests and validate the destination through the host.
6. Use the portal or the persistent Return to Hub control. The dashboard may open Home separately when the player has created one. Restore the first scene’s personal choices and, on resume, the exact last confirmed location. A failed save does not replace the last known-good record.
7. Reload the local profile and reopen the draft; import the exported copy in another supported test environment and confirm equivalent personalization and requested visibility. After the first Hub arrival, test Resume (default), Always Hub and Always Home; keep Always Home unavailable until Home exists.

| Test scene | Proposed role | Visible proof |
|---|---|---|
| Island / plaza | Exploration and a personal draft of the starter space | Color, object arrangement and confirmed location persist in the player’s local profile |
| Moon / observatory | Distinct destination with return portal | Travel, a landmark interaction, exact return and a reliable recovery path |

These are replaceable test themes, not licensed fictional locations or final branding. Use original geometry or documented approved/CC0 assets. Keep two scenes small so they demonstrate the selected interactions within the proposed internal budget. The public website’s pixel-art map is an information-site illustration, not the Hub scene or final art direction.

## Creator code and visitor personalization

Creators use the same versioned World SDK through local source tools and the integrated browser editor. Their code defines approved objects, interactions and travel requests. Visitors choose among the world-declared options through trusted host controls; their preferences do not edit a published template for every participant or grant publisher status.

Proposed separation: account identity, player avatar/outfit entitlements, arrival preference, last confirmed location, Home configuration/requested visibility, immutable world source/version, validated world-personal state and current authorization remain separate records. A world bundle contains source, manifest, assets, capabilities and an immutable version; a personal draft contains a reference to that version and validated configuration such as color IDs and bounded object transforms. The host owns storage and applies configuration. Scripts receive only approved copied state and validated events, never database handles, appearance mutation authority or private account data. When online persistence is added, the server checks owner, instance, version and current edit permissions on every write. Local draft identifiers in S1 are not proof of online ownership.

Owner-selected visibility at Home creation is required (D-031). Private initial selection and Private/Invite-only/Public mode semantics are proposals; local profiles have no actual online visitor grants. Collaborative editing and invitation/age-contact details remain open. The selected public-world/social requirement remains unchanged. See [space access](SPACE-ACCESS.md).

## Portal behavior

The guest requests a registered target world ID. The host validates the target, permitted entry point and current transition; online stages also check country/cohort/account/content eligibility. No guest-selected arbitrary URL, age group, party membership or room credential becomes authority.

Travel has visible loading and failure states. Reject duplicate transition requests. If the target fails to validate or load, keep or restore a usable source world and offer Retry or Return to Hub/Home as available. On successful travel, reset the outgoing guest runtime and dispose its resources. Test repeated travel for duplicate events, traps and resource growth. Portal effects support reduced motion and a keyboard-accessible alternative. Existing party voice is managed by the app when S3 is implemented; no S1 voice claim.

## Persistence and recovery

S1 stores only local project/profile/draft data and offers export/import; no accounts or automatic cloud synchronization. Browser storage is best-effort by default, can be cleared/evicted, and can fail at quota [S80]. Treat a write as locally saved only after its transaction completes; handle abort/error and preserve the last valid draft [S81]. `beforeunload` is unreliable and does not prove a completed write; use durable writes during the session and treat `visibilitychange` only as an additional checkpoint opportunity [S109–S110]. This is not a guarantee against device failure.

Validate both bundle and configuration before replacing a good draft. Reject unsupported schemas, unknown asset/color/target IDs, non-finite or out-of-range transforms, oversized payloads, invalid saved coordinates and corrupt imports. A changed template version needs explicit compatibility/migration or a recoverable error. Exported files contain creative data, not credentials or account/guardian records. If resume is denied or incompatible, preserve the resume record and explain Retry, Hub and Home recovery.

## S1 acceptance proposal

- A new local profile always spawns first in the Hub after avatar choice; the dashboard remains accessible from demo destinations.
- Worlds cannot silently replace a local avatar/outfit; incompatible entry blocks or asks for an explicit player choice.
- Returning preferences and exact resume preserve world version/frame/XYZ/facing/confirmed revision and offer Retry/Hub/Home recovery without erasing a failed record.
- The two-world loop runs through both local and browser authoring using compatible bundles.
- Requested Home visibility is chosen at creation and survives local save/reload/export without importing ownership or access credentials. Actual online denial needs later server/client tests.
- At least one color choice and one object arrangement survive travel, Return to Hub/Home and reload after a successful save.
- Export/import restores equivalent validated profile, location and personalization without silently overwriting the last good state on failure.
- Invalid target, repeated travel and save failure produce usable recovery; source/guest resources are cleaned up on successful transitions and Stop.
- Keyboard controls and reduced-motion travel are exercised in the actual supported desktop test environment.
- Existing runtime/bridge/renderer hostile cases in the [S1 brief](S1-IMPLEMENTATION-BRIEF.md) still apply. All application tests remain unexecuted.

The main [v0.1 scope](V0.1-SPEC.md), [World SDK](WORLD-SDK.md), [voice](VOICE-DESIGN.md), [age policy](AGE-POLICY.md), [decisions](DECISIONS.md) and [sources](../research/SOURCES.md) remain authoritative for their domains.
