# Legal readiness and document registry

**Issue-spotting draft, October 14, 2026. No legal agreement, clearance or compliance opinion.** Potential U.S./operator location unconfirmed is a research assumption, not an entity/jurisdiction decision. Actual ages, regions, platform behavior, rights and payment flows determine applicability. Qualified counsel should review launch-facing obligations and documents against that actual design.

## Current rule notes

- COPPA amendments effective June 23, 2025; general compliance date April 22, 2026, with specified self-regulatory exceptions. Child-directed services and actual knowledge about under-13 data collection matter. An age label alone does not settle applicability [S30, S31].
- FTC TAKE IT DOWN Act guide: covered platforms must have an NCII removal route; valid requests require removal and reasonable efforts for known identical copies within 48 hours. Section 3 effective May 19, 2026. Design for public/non-account requesters and deadline tracking if covered [S32].
- Section 512 copyright safe harbors are conditional. Appropriate designated-agent, notice/counter-notice and repeat-infringer handling need actual implementation and review; code publication is not permission to redistribute copyrighted assets [S26].
- Florida 540.08 addresses commercial name/likeness use, exceptions and its own post-death limitation. Other jurisdictions and media copyrights remain separate. Do not declare a historical person universally free of rights [S27, S28].
- Florida 934.03 includes an all-parties-consent exception and other exceptions. Voice transport versus recording, protected communications and public rooms require fact-specific analysis. Default no raw voice retention; recording/report buffers need clear reviewed design [S29].
- FIN-2013-G001 and FIN-2019-G001 analyze convertible-currency functions and roles. Closed credits, cash-out, transfers and creator payouts require distinct analyses. “Game currency” and blockchain labels do not settle money-services/tax/consumer obligations [S33, S34]. FinCEN prepaid-access exclusions have specific conditions, and Florida's game-platform exclusion from its virtual-currency definition does not resolve every monetary-value or federal rule [S40, S41]. Creator payouts do not automatically make every platform a money transmitter; exact custody/payment flows matter.
- Apple UGC/purchase/currency requirements vary with storefront and allowed program exceptions. Recheck exact distribution countries and transaction paths before building native purchase UX [S35].
- If serving the EU, scope GDPR, DSA and other applicable rules separately. Commission guidance says AI Act Article 50 transparency applies from August 2, 2026; exact provider/deployer duties and exceptions require review [S37]. No EU compliance analysis completed here.

## Draft document registry

All rows are **Proposed / not drafted as enforceable documents**. Names below organize future work; do not create boilerplate agreements that claim to match unknown operations.

| ID | Document / evidence | Trigger | Owner decision or implementation required |
|---|---|---|---|
| L-001 | Code LICENSE and third-party notices | Public source/reuse | License choice; adopted dependency revision/terms |
| L-002 | Asset licenses and provenance register | Avatars/worlds/media/pets | Author/source, rights, attribution, distribution/commercial restrictions |
| L-003 | CONTRIBUTING and contribution rights policy | Outside contributions | DCO/CLA model, code/asset review, authority |
| L-004 | Governance and trademark policy | Public project/service | Maintainers, brand owner, decision/role transfer |
| L-005 | Terms of use | Accounts/service | Operator, jurisdictions, ages, user rights and actual conduct rules |
| L-006 | Privacy/retention/deletion notice | Personal data | Actual inventory/processors, voice/sensor collection, retention and lawful grounds |
| L-007 | Community standards and safety operations | Social worlds | Reports, block/mute, appeals, staffing and escalation |
| L-008 | Copyright/DMCA process | UGC hosting | Agent registration where applicable, notices/counter-notices and repeat infringers |
| L-009 | NCII/TIDA notice/removal procedure | Covered-platform UGC | Clear public route, valid-request rules, identical-copy handling and 48-hour workflow |
| L-010 | AI persona/voice consent and source policy | Real/historical/memorial figures | Likeness/voice rights, licenses, labeling and sourced dialogue |
| L-011 | Recording consent and incident-evidence policy | Raw audio capture/report buffer | Actual capture mechanics, jurisdictions, notices, access and deletion |
| L-012 | Child-safety/parental consent policies | Eligible minors/child-directed design | Actual ages, consent/verification, communications, advertising/data sharing |
| L-013 | Creator/seller agreement | Marketplace publishing/payments | Content license, enforcement, fees, payouts, refunds and records |
| L-014 | Currency/purchase/refund terms | Paid goods/credits | Value/expiry/transfers/cash-out, processors, taxes, custody and reconciliation |
| L-015 | Media exhibition/embed agreements | Watch parties/music/events | Specific content rights and provider/API permissions; personal subscription insufficient by itself |
| L-016 | Incident/vulnerability response and security plan | Public service | Operator ownership, report handling, backups, access and notification review |
| L-017 | Jurisdiction expansion assessment | New countries/native stores | Applicable privacy/age/UGC/AI/payments/consumer rules and local representation |

## First-content policy proposal

Use original or properly licensed worlds, avatars, music and pets. Record source/rights before ingestion. Historical prototype: licensed/public-domain source material checked item-by-item, original character design, synthetic voice and clear AI simulation label. Entertainment and education exceptions may matter, but do not approve content solely from the word “historical,” “fair use” or “open source.”

## Launch review sequence

Define audience/entity/regions; map personal/media/payment flows; select dependencies and content rights; build relevant enforcement/consent routes; have actual policies/contracts reviewed; verify workflows and operational staffing. This registry does not authorize spending, contracts, filings, public uploads, payment activation or deployment.

See the exact primary links and evidence routes in [SOURCES.md](../research/SOURCES.md), entries S26–S41. Recheck mutable rules at each relevant milestone.

## Owner audience decision from round one

**Requirement:** Children, teens and adults in the first release. **Unknown:** Actual minimum age, legal audience classification, launch regions, parent notice/consent method and communication/sharing rules. Avoid replacing this requirement with an adult-only pilot by assumption. The internal local editor is a development precursor, not the requested online release.

The first online creator pilot must assess child-directed versus mixed-audience status. Mixed audience is a subset of child-directed services; primary-child services cannot generally use screening to evade child treatment, and FTC mixed-audience guidance permits differentiated functions rather than excluding under-13 users altogether. An age gate is not parental consent. Review the amended rule and current facts before collecting covered child data. Invites, free access and a small tester group do not establish an exemption.

For a locally processed prototype, inspect runtime network requests, SDKs, hosting/CDN logs and processors. FTC distinguishes locally stored information not transmitted from collected personal information; local-save UI alone proves neither. Private creation and reviewed/parent-approved sharing are proposals. Social voice exemptions cannot be inferred from the narrower short voice-command exception. Specific legal/consent operations and actual cost remain open. [S30, S31](../research/SOURCES.md).

## Round-two public/code scope

Public world sharing and social interaction are confirmed first-online-release requirements; all ages remain included. Submission review before listing and moderated group spaces are proposals, not owner-approved restrictions or statutory blanket bans. Code scripts, assets, usernames/chat/logs and processors require collection/disclosure/rights analysis; school developer benefits do not establish school consent. Decide actual media/DM permissions and assign submission/report/removal operators. Applicable DMCA and TIDA operational routes remain launch-facing requirements to assess. Script isolation complements, rather than replaces, child privacy and content review.

## Round-three trusted voice release

Both coding environments, trusted direct publishing, text/proximity/party voice are required. Trust skips a routine human review queue but preserves rights responsibility and operational enforcement. Decide trust assignment/minor eligibility/revocation. Proximity/party audio collection/disclosure require actual child/parent/contact analysis; no short voice-command exception assumed. Proposed child/teen private voice defaults, parent-enabled scopes and invitation restrictions are product settings, not universal legal mandates. Revalidate contact when parties gain members or parent/block/moderator grants change. Educational developer benefits do not create school consent. Raw incident audio/buffers remain unselected and require separate recording/retention review.

## Round-four worldwide and age groups

Owner selects worldwide launch and child age-group public communication. Record exact cohort/minimum age/assurance/country rules separately; same-age strangers and age declaration alone do not resolve parent/data/contact obligations. [Global readiness](GLOBAL-READINESS.md) covers only US/EU/UK/Australia examples, differentiating binding law, guidance and future UK announcement; rest of world unassessed.limited maintainer capacity cannot be substituted for response ownership/coverage under applicable deadlines. No global clearance or legal agreement executed.
