# Discovery synthesis

Updated 2026-10-15 for The Oasis. The original October 14 research/interview report is preserved locally. This maintained summary excludes personal interview and funding context while keeping accepted requirements and open decisions traceable.

## Established direction

The Oasis is a persistent community launch/social Hub, not just a world-creation tool. People are meant to sign in, create/select a player-owned avatar and start in the central Hub, with a launch dashboard available. From there they can discover community-made worlds, open a personal Home, choose a wardrobe/appearance, create worlds or return to their last confirmed location. A new account cannot bypass first Hub arrival. Returning players may choose Resume, Always Hub or Always Home after they have arrived once; Home must exist before the latter is available.

Players control their avatar and outfit. Worlds cannot silently replace appearance or overwrite account records. If a destination is incompatible, entry blocks or requests an explicit choice. Exact resume records the immutable world/version, coordinate frame, exact X/Y/Z, facing and confirmed save revision. Invalid or denied resume preserves the record and explains Retry/Hub/Home recovery. These are product requirements; no online account, Hub, Home, wardrobe, world directory, playable world or app service exists.

World creation and scripting remain core capabilities inside the larger hub. Local and integrated browser authoring use one versioned project contract; visitor controls should not require code. S1 is a proposed, owner-authorized-later local proof with two original scenes, personalization, portals, Home visibility as local request and confirmed local save/export/import. Public world discovery/sharing, text/proximity/party voice and trusted direct publishing remain later online requirements under age, eligibility, access, rights, privacy and operations gates.

## Actual current state

The current task is F1 — product definition, foundation and identity migration. The project has a static, evidence-led information site, not a product login or playable portal. No S1 SDK, sandbox, Hub/dashboard, player inventory, multiplayer, voice or production service is implemented. The earlier static profile/hub/world prototype remains local as historical evidence. Read [work state](docs/planning/WORK-STATE.md), [roadmap](docs/planning/ROADMAP.md), [canonical experience](docs/planning/OASIS-EXPERIENCE.md) and [S1 brief](docs/planning/S1-IMPLEMENTATION-BRIEF.md).

## Research conclusion

Use a small modular local experiment before operating a full social stack. Babylon/Monaco/QuickJS are candidate components; Hubs, Third Room/WebSG, Overte and Godot provide relevant prior art with different integration and operation costs. Interpreter interrupts, worker isolation, client volume controls and written policies do not by themselves establish hostile-runtime, media-denial or child-safety guarantees.

The [source register](docs/research/SOURCES.md) is a dated source snapshot. [Foundation research](docs/research/FOUNDATION.md) records GitHub/Pages decisions; [legacy crosswalk](docs/provenance/LEGACY-CROSSWALK.md) preserves earlier unique requirements and working-name history. The new official research notes S105–S110 cover repository/Pages migration, GitHub Desktop remote updates, predictable navigation and browser save lifecycle. Technical/provider candidates stay proposals until tested in their actual implementation phase.
