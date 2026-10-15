# Code and document conventions

Current foundation: dependency-free ES modules, JSON data, semantic HTML/CSS and Markdown. Node 24 LTS is the documented runtime. Use UTF-8 and the line-ending policy in `.gitattributes`; preserve meaningful filenames and decision/requirement IDs. Keep functions small and public data explicitly validated/escaped. Do not add a framework or dependency for a static content change.

Run `npm run check` and `npm run build`. Update affected docs/status when actual behavior changes. Status is manually curated evidence, not automatic inference from issue counts or commit activity. Generated output is ignored and rebuilt in CI.

S1 must preserve both local and integrated browser authoring with one project contract. Its language/runtime pins follow current primary documentation and actual tests. No native host eval or Node vm security claim for guest scripts. Use focused branches/PRs and one active source/document writer per shared checkout.
