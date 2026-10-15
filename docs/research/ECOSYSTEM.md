# Open-source ecosystem verification notes

As of 2026-10-14. Public GitHub MCP reads, actual LICENSE inspection, source search and official documentation were used by the independent ecosystem reviewer. Root also verified GitHub access and read candidate documentation/metadata. No builds or production audits were performed.

| Project | Latest indexed commit observed | License / archive status | Qualification |
|---|---|---|---|
| Hubs Foundation | [986d07a, 2026-08-23](https://github.com/Hubs-Foundation/hubs/commit/986d07a758e9d1184cb355385c6460391bd238d0) | MPL-2.0 / unarchived | Recent branding work does not prove feature velocity |
| Third Room | [01bc731, 2023-07-11](https://github.com/matrix-org/thirdroom/commit/01bc731b057bd2a0e01d2152ad4828c05f1f6302) | Apache-2.0 / unarchived | Official original-team pause/disbandment; README is stale about XR |
| IR Engine | [55f355c, 2025-07-17](https://github.com/ir-engine/ir-engine/commit/55f355ca957a8358ad8c862e407a924dcb202f26) | CPAL-1.0 / unarchived | Actual license, not generic MIT/Apache assumption; deployment/source/attribution review |
| Overte | [d96546d, 2026-10-11](https://github.com/overte-org/overte/commit/d96546de1bd82d3a7c4c3e8aa9eb8c2814f472c5) | Apache-2.0 / unarchived | Native desktop/VR focus |
| Godot | [5ec712e, 2026-10-14](https://github.com/godotengine/godot/commit/5ec712e220b7deac64d61dc9f968e72edb910039) | MIT / unarchived | Engine, not social platform; web/native target limits apply |
| Babylon.js | [abdd416, 2026-10-13](https://github.com/BabylonJS/Babylon.js/commit/abdd416bcde754c13c88c2bf8c7b491ffa247dff) | Apache-2.0 / unarchived | Renderer; root API pushed_at also 2026-10-13 |
| Colyseus | [bba9bf6, 2026-10-13](https://github.com/colyseus/colyseus/commit/bba9bf678224d5ba53b50b15f3c9590ebe248b0d) | MIT / unarchived | Authoritative room framework; root API pushed_at also 2026-10-13 |
| LiveKit | [36ba8ad, 2026-10-14](https://github.com/livekit/livekit/commit/36ba8ad338424d3854e07167c8143d17cea466a9) | Apache-2.0 / unarchived | Media server; root API pushed_at also 2026-10-14 |

Commit dates are observed index evidence, not guaranteed absolute latest commits, releases, capacity, security or support. Actual adoption needs pinned revisions and dependency/license review. Hubs Community Edition infrastructure also had an observed 2026-09-08 commit; Reticulum an observed 2026-08-23 commit. Hubs Compose explicitly describes local development use.

Third Room source at the observed indexed commit includes an Enter WebXR action and XR input profiles despite its README wording. This matters to research accuracy; it does not undo maintenance risk. IR's formerly Ethereal/XREngine lineage does not imply the old archive and current repository share maintenance status. [Godot native visionOS XR documentation](https://docs.godotengine.org/en/latest/tutorials/xr/visionos_intro.html) was found only under latest/unstable in this review; stable production support remains unverified.

Suggested next spike: compare Hubs Community Edition with Babylon/Colyseus/LiveKit using the same original room and social/portal journey. Benchmark actual target devices. See [SOURCES.md](SOURCES.md) for evidence routes and [ROADMAP.md](../planning/ROADMAP.md) for exit criteria.
