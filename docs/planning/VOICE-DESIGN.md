# Text, proximity voice and party/group voice

**Requirement:** All three communication forms in the first public release. **Proposed:** LiveKit media transport, authoritative social/membership service, and an app-level microphone/voice controller outside world scripts. No voice code, permission policy or capacity has been tested.

| Channel | Candidate scope | Proposed behavior |
|---|---|---|
| World text | World instance with age/contact policy | Validated/rate-limited messages, scoped history/retention and moderation |
| Party text | Authorized party membership | Group messages independent of world; not a general direct-message feature |
| Proximity voice | World instance or authorized zone | Spatial gain/panning within permitted delivery scopes; changes with location/world |
| Party/group voice | Private server-authorized party | Nonspatial voice stays connected when a member changes worlds |

## Single microphone and route control

Acquire capture once through explicit browser/user permission. Candidate per-room track clones/wrappers have independent publication lifecycle; do not reuse a single LocalAudioTrack wrapper across room ownership. Validate device/browser SDK behavior, then disconnect/stop only the world publication on travel while party capture survives. Global mic mute, deafen, input device change and reconnect must govern every active route consistently [S68, S69].

Proposed controls: World, Party and optional Both outgoing routes; visible destination indicator; separate push-to-talk actions; release on focus loss; duplicate playback suppression when a peer exists in both channels. Party-priority playback/route default is a product proposal to validate. No hidden simultaneous broadcasting. Deafen's effect on outgoing mic is an explicit UX policy to test.

## Delivery and policy boundary

Authoritative position/membership/age/contact grants decide permitted voice scopes. Distance attenuation and PannerNode implement spatial presentation [S67], not confidentiality. LiveKit selective subscriptions reduce delivery/processing, but neither autoSubscribe false, zero gain nor administrative UpdateSubscriptions by itself proves a hostile client cannot receive a forbidden track [S61–S63]. Publisher-controlled track settings and canSubscribe behavior require source/testing review; do not assume canSubscribe false plus forced selective server updates works.

A simpler candidate uses server-gated world/zone and party membership with scoped join tokens, current permission checks and live revocation. Strict per-person proximity or block/parent-recipient filtering must be proved with modified clients; a server-controlled forwarding/SFU extension or a different media implementation may be needed. If the test fails, change the implementation before claiming the intended restriction works. Guest scripts cannot choose mic permission, recipients, party membership or media admin credentials.

When a party changes, block/revocation/age or moderation eligibility must update active delivery, not just the next join. A child's approved party cannot silently gain an unapproved adult under the chosen policy. Children communicating within their age group in public rooms is now required; exact cohorts/assurance/party and indirect-channel scope remain open. Separate cohort instances/channels and server grants are candidates; see [age policy](AGE-POLICY.md). Do not label normal proximity conversation private merely because a distant listener has gain zero.

## Budget and test implications

Use the current transport allowances in [COST-PLAN.md](COST-PLAN.md); human voice doesn't require AI STT/LLM/TTS. Two room connections per user can increase connection-minute/concurrency usage; treat each as consumptive until confirmed against actual dashboard behavior. Example budget assumption: ten people for one hour with both connections is 1,200 connection-minutes. Silence/PTT does not necessarily remove connected-time usage.

Tests: three clients; near/far motion and world travel; party keeps connection; same peer heard only once; explicit route/PTT/focus loss; blocked/ineligible/expired/revoked users cannot receive prohibited audio; party invite/member changes obey chosen policy; mic denial/autoplay/device changes/reconnect work; every capture/clone is stopped on global disconnect; free quota exhaustion handled without paid upgrade. Device/codec/network latency, thresholds and real participant capacity remain Unknown.

No raw audio recording or transcription is enabled by this proposal. Incident evidence/buffers or transcripts need separately scoped capture, notices/consent, access and retention. All-age accounts and actual provider processing still require the legal/data review described elsewhere.

## Round-six space access and party distinction

Space access changes re-evaluate membership and stop now-denied space-scoped presence/text/world voice; prove denied delivery and reconnect with modified clients. Party voice retains its own audience, membership and eligibility. Changing a space to private does not silently make an existing party private. Keep outgoing routes clear and preserve chosen party continuity only where authorized. See [space access](SPACE-ACCESS.md).
