# Trusted direct world publishing

**Requirement:** Trusted creators publish directly. A routine human approval queue for every trusted release is not part of the selected behavior. **Unknown:** Who grants trust, eligibility for minor creators, trust criteria/capabilities and who operates revocation/reports. The flow below is a proposal, not implemented enforcement.

## Proposed release flow

Both local tooling and browser editor submit the same source/asset/manifest bundle. The server checks current identity and trusted-publisher grant, permitted world ownership, schema/SDK/runtime compatibility, declared capability limits, dependency/asset provenance and resource/content constraints. A valid release receives immutable version/content IDs and becomes public according to age/content-access rules. Validation failure provides concrete errors; clients cannot self-approve grants or bypass checks.

The trust role skips routine per-release human review, not runtime containment, rights responsibility, parent/age permissions, automated validation or moderator enforcement. Source review/automated classifiers are evidence, not guarantees of safety or legality. Build untrusted submissions only through the agreed bounded pipeline; no arbitrary server shell/build hooks.

## Proposed role distinction

| Role | Capability proposal |
|---|---|
| Visitor | Enter eligible public worlds and interact under media/account policy |
| Creator | Author/test/export source; publication rights depend on grant |
| Trusted publisher | Release valid versions of owned/authorized worlds directly |
| Moderator | Investigate reports and pause/quarantine affected hosted worlds |
| Administrator | Grant/suspend trust and maintain platform policy; not arbitrary creator code execution |

Initially owner-admin invitation is a minimal implementation candidate, not an owner decision. A later application/contributor process can broaden trust. Grant changes are auditable and checked on each publication. Revoke new release access immediately; define how active rooms, cached assets, remix references and recovery are handled. Removing hosted access does not automatically retract already granted open-source/content license rights.

## Required evidence

Trusted valid release becomes public without a human queue. Untrusted/expired/revoked or cross-owner requests fail; invalid manifests/assets/resources reject; editor/local paths receive the same rules; modified clients cannot self-grant; rollback/quarantine and public delisting behave predictably; moderator report/removal ownership exists. Exact deletion/legal-hold/license behavior needs reviewed policy. No checks have been executed against an app.

See [v0.1 specification](V0.1-SPEC.md), [SDK](WORLD-SDK.md), [public release](PUBLIC-RELEASE.md), [security](../project/security.md) and [legal readiness](../legal/LEGAL-READINESS.md).
