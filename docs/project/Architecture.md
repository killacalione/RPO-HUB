# Architecture

## Current foundation

One canonical repository contains maintained project documents, generic role adapters, contribution guidance, a structured status file and a dependency-free static-site generator. `data/project-status.json` is the public status source; `npm run build` emits only curated HTML/CSS and source-revision metadata into ignored `dist/`. PR CI validates; trusted main builds deploy via GitHub Pages. There is no application backend, database, authentication or remote agent dependency.

## Proposed application boundaries

The future trusted host owns editor UI, renderer, local drafts, navigation and independent guest termination. A versioned SDK/project contract is shared by local tooling and the browser editor. Guest code runs inside an interpreted runtime, with validated capability messages and independent host/graphics budgets. Babylon, Monaco and QuickJS remain candidates until a bounded tested S1 adopts exact pins.

Later authoritative rooms, durable state, text/media authorization and publishing are separate services. Colyseus/Node and Workers/Durable Objects are distinct designs, not assumed interchangeable. Voice remains outside guest code. Client adapters preserve capability differences rather than promising feature parity. Adult-only functions, if ever selected, are a separate high-risk boundary from all-age surfaces.

See [SDK](../planning/WORLD-SDK.md), [S1](../planning/S1-IMPLEMENTATION-BRIEF.md), [demo](../planning/DEMO-EXPERIENCE.md), [space access](../planning/SPACE-ACCESS.md) and [voice](../planning/VOICE-DESIGN.md). No product capability is verified by these designs.
