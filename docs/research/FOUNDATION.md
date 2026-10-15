# Community foundation research

Checked 2026-10-15 using current official GitHub documentation, Context7 and local/remote tool evidence. Research supports the configuration; actual remote readiness is recorded separately.

- [Community profiles](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories): README, contribution/conduct/security/support documents and templates improve contributor entry points.
- [Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): build curated output; upload a Pages artifact and deploy under `github-pages`, with Pages/OIDC permissions limited to the deploy path.
- [Actions secure use](https://docs.github.com/en/actions/reference/security/secure-use): read-only fork checks, verified immutable Action revisions, no privileged untrusted checkout or public self-hosted runner.
- [Branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches): require PR/checks/conversation resolution; sole maintainer starts with zero peer approvals to avoid an impossible self-approval requirement.
- [Private vulnerability reporting](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configure-for-a-repository): offer a private route without inventing a mailbox or response SLA.
- [Desktop local repository](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop): register the actual local Git root; remote state is conventional Git origin.
- [Licensing](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository): public visibility is separate from reuse rights. Owner selected Apache-2.0 for new maintained work.

Choice: dependency-free generated HTML/CSS for progress, a single versioned status source, main-only Actions deployment and Issues/Discussions for community work. No application framework, hosted product backend or scheduler is needed for this foundation. REA replay is used for bounded browser evidence; it is not the project engine or source of authorization.
