# Consolidation report

2026-10-15. Destination: one top-level `project-foundation-new-project` working folder. Inputs: earlier foundation (36 files) and later discovery (58 files), 94 total. Both original packages were archived and every archived file compared byte-for-byte with its input before cleanup.

## Content decisions

- Relative-path union: **64**. Shared paths: **30**; **2 identical** (`.gitignore`, bootstrap skill) and **28 different**. The later discovery supplied the current planning baseline; it did not blindly overwrite earlier unique requirements.
- Foundation-only: **6** files — master design and five prototype files. Retained locally as historical material; they are not S1 implementation or public licensed application code.
- Discovery-only: **28** files — detailed planning, legal/research and portable workflow context, retained and adopted where relevant.
- Cross-name duplicate: foundation `MANIFEST.json` equals discovery `ORIGINAL-MANIFEST.json`. Preserve one original input manifest and the distinct discovery input manifest in local provenance. Neither is represented as an integrity manifest of the changed merged project.
- Earlier requirement/decision/acceptance IDs and unique design/data/security rules are mapped in [legacy crosswalk](LEGACY-CROSSWALK.md). Later D-030/D-031/D-032 and S1 requirements govern conflicts.
- Seven later native role definitions and portable mirrors are kept as functionally distinct client formats. Their repeated instruction bodies are intentional adapters, not accidental duplicate source files.

## Public/private boundary

Raw input ZIPs, full input hash inventory, personal interview/budget/capacity context, unchanged unlicensed bootstrap and earlier prototype/master remain local and ignored by Git. Public maintained documents preserve product decisions without personal context. Current public code/docs are covered by the owner-selected Apache-2.0; that does not retroactively license third-party input.

After adoption, integrity checks cover the current tracked tree and generated Pages output. Public commit history is the revision record. Repeated file names such as role cards in different formats are not deduplicated solely by name; content and purpose govern retention.
