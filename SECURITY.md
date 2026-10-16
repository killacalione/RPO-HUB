# Security policy

## Supported scope

The current repository contains planning and a static project-progress site. No supported application release, account service or guest-code runtime exists yet. Security concerns can still affect workflows, published content or future architecture.

## Report privately

Use [GitHub private vulnerability reporting](https://github.com/killacalione/The-Oasis/security/advisories/new). Include affected revision, reproduction, likely impact and a minimal non-sensitive example. Do not post working exploits, credentials, child/user data or private incident records in public Issues.

If private reporting is unavailable, use [GitHub Support](https://support.github.com/) for platform concerns and open only a non-sensitive request for a reporting channel. There is no paid bounty or guaranteed response SLA.

## Maintenance

Use read-only PR checks, SHA-pinned Actions with update review, main-only Pages deployment and least privilege. Private archives never belong in Git or deployment artifacts. High-risk application functionality needs independent review and its own evidence before release. See [project security](docs/project/security.md).
