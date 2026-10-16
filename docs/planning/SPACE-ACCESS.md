# Personal-space visibility and access

**Requirement, interview round six on 2026-10-14:** The owner chooses visibility when creating the space. **Proposed:** Private, Invite-only and Public modes, later owner changes, separate visit/edit permissions and server enforcement below. The exact mode semantics/defaults are design proposals, not owner-confirmed extra policies or implemented features.

For The Oasis this is the player’s personal **Home**. Home creation is optional and distinct from the required first Hub arrival. **Always Home** is a returning-arrival preference only after a Home exists; it cannot bypass first arrival. A visibility choice in local S1 is saved requested intent, not a live online listing, owner record or access grant. See [OASIS-EXPERIENCE](OASIS-EXPERIENCE.md).

## Proposed modes

| Mode | Ordinary visitors | Discovery |
|---|---|---|
| Private | Owner only | No public listing, preview or visitor access |
| Invite-only | Owner and accepted eligible invitees | No public listing; invitation access stays account- and policy-bound |
| Public | Eligible visitors under content, country, age/contact and block rules | Listed to the permitted audience |

The creation form explains the audience and asks the owner to select a mode. Proposed initial selection is Private; no selection/error/import grants public access. This preserves owner choice and leaves public sharing available under eligibility. Covered UK child-facing services need high-privacy defaults unless an appropriate child-best-interests exception is justified [S85]. Space privacy alone is not the whole child-data/privacy policy or parental-consent process. Preserve valid user choices through updates; new/incompatible privacy fields use a protected default pending a clear choice.

Visibility governs visits and discovery. Editing is separate: visitors are read-only under the proposed initial policy. Collaborator grants, co-ownership and public editing are not selected. Owning a space does not grant trusted-world publishing rights or the power to override cohort, guardian, block, content or regional policy. Authorized moderator/legal access is governed separately; Private does not mean platform operators have no lawful, controlled access.

## Proposed online authority

Server-maintained records link space ID, actual owner, approved template/version, validated personal configuration, requested/current mode, access-policy version and accepted/expired/revoked invitation grants. A client-supplied owner, visibility field or random space ID does not authorize a read, write or join. Deny missing permission; check the particular actor, action and resource server-side, including protected configuration/assets and portal joins [S83].

Invitation links initiate a reviewed invitation flow; a copied link is not itself an unrestricted room credential. Bind accepted access to intended account, space, allowed actions and expiry. Relationship/age/contact consent remains subject to the chosen platform policy. Family/teacher cross-age exceptions have not been selected.

Check current permission before giving protected room data, presence, text or world-voice grants. Check each protected operation throughout a live session, not just the initial connection [S84]. Authoritative cohort assignment applies even in an owner-created space. Live owner presence and object changes can communicate; they obey the same chosen cohort/UGC boundaries. Static creator material follows content/rights/rating policy.

## Changing visibility and removing access

Later mode changes are proposed. Update the policy version and the directory/access record consistently; re-evaluate active members and pending joins. Public-to-Private removes the listing, denies further non-owner entry/data and ends now-disallowed visits. Public-to-Invite-only keeps only current eligible accepted invitees. A revoked invite cannot be replayed or used to reconnect. Cached client/UI grants are not authority.

Space-scoped presence/text/voice delivery ends for removed visitors; offer a persistent Return to Hub path and a separate Home route when the owner has created one. Party voice follows its own membership and eligibility, so a space becoming private does not silently change the party's audience. Show the actual outgoing audio route. Existing delivered/downloaded copies cannot be recalled merely by changing a setting. Measured revocation timing, cache/media implementation and failure behavior remain unverified; no immediate-complete-erasure guarantee.

## S1 versus online evidence

S1 is a no-account local prototype. It can show the creation selector and preserve a versioned requested-visibility preference alongside the personal draft through save/export/import. That preference is not an actual online grant, listing or proof of private-room isolation. Imported creative data cannot create ownership, invite or publisher credentials. Online creation revalidates the authenticated owner and current policy.

Future online tests use at least owner, invited and uninvited clients. Exercise each mode; edited owner/space IDs; protected asset/configuration reads; expired/copied/replayed invites; simultaneous join and visibility change; active-session revocation/reconnect; disallowed cohort and block cases; world voice and separately authorized party continuity. Inspect actual denied data/media delivery with changed clients. Keep failed access generic so a private listing cannot be enumerated. All app/online tests are unexecuted.

## Home and player-owned appearance

Home is one destination linked to the player identity; it is not the account itself or the world template. Store Home settings, requested visibility, avatar/outfit entitlements, returning preference and confirmed location separately. Worlds may declare appearance compatibility, but cannot silently change the player’s selected avatar/outfit while they are in Home or visiting another world. Incompatibility blocks entry or requests an explicit player decision. A Home/world change cannot mint appearance items or overwrite account identity. These boundaries are requirements; no account, inventory, Home ownership or online grant exists in S1.

See [experience blueprint](OASIS-EXPERIENCE.md), [demo design](DEMO-EXPERIENCE.md), [S1 brief](S1-IMPLEMENTATION-BRIEF.md), [age policy](AGE-POLICY.md), [voice](VOICE-DESIGN.md), [trusted publication](TRUSTED-PUBLISHING.md) and [sources](../research/SOURCES.md).
