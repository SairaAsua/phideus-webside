# Architecture Links and System Overview

**As of 2026-02-22**

This architecture view follows the same dual program logic:
1) test HIT hypotheses in cross-modality settings, and
2) build ratio-native AI capabilities from those results.

## Core System (Escalon 1 / BIAS_CONTROL)

High-level training setup:
- audio encoder branch,
- MIDI encoder branch,
- projection heads to shared embedding space,
- contrastive-style objective with canonical retrieval evaluation.

Primary benchmark task:
- cross-modal retrieval (Audio <-> MIDI) on MAESTRO,
- balanced metric `S=min(A2M, M2A)` plus hard-negative robustness.

System-level intent:
- not only to score high on retrieval,
- but to make ratio-aware representations and mechanisms first-class model components.

## Why Architecture Matters in This Program

Phideus compares not only descriptors, but also **injection mechanisms**:
- concat,
- cross-attention,
- reverse cross-attention,
- third-tower / FiLM / MoE architectural variants.

This is central to explaining why some descriptors win only with specific integration paths.

## GitHub Pages Architecture Walkthroughs

Main index:
- `https://altermundi.github.io/Phideus/`

Direct architecture pages:
- `https://altermundi.github.io/Phideus/crossatt`
- `https://altermundi.github.io/Phideus/phideus`
- `https://altermundi.github.io/Phideus/bloquea`
- `https://altermundi.github.io/Phideus/dann`
- `https://altermundi.github.io/Phideus/hrm`
- `https://altermundi.github.io/Phideus/constellation`
- `https://altermundi.github.io/Phideus/jepa`
- `https://altermundi.github.io/Phideus/roseta`

## Suggested Web UX Pattern

1. Use one architecture link per section (not all at once).
2. Pair each link with one key claim and one result metric.
3. Separate “core evidence” views from “historical architecture evolution” views.

## Freshness Stamp

**Architecture index aligned to public link map available at the 2026-02-22 cut.**
