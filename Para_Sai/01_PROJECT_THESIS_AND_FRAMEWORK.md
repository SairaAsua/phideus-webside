# Project Thesis and Framework

**As of 2026-02-22**

## Thesis

Phideus is framed by **Harmonic Information Theory (HIT)** and studies whether **ratio-based relational structure** can serve as an information layer that transfers across modalities, not just inside one sensor type.

Cross-modality deep learning is the operational experiment field, not the conceptual endpoint.

## Program Orientation: Dual Path

Phideus runs in two synchronized lanes:

1. **Theoretical and experimental research lane**
   - formulate and test HIT hypotheses,
   - measure when ratio descriptors carry transferable information.
2. **AI model development lane**
   - design architectures that can learn and operate with ratio logic,
   - optimize quality, robustness, and computational efficiency.

The same experiments support both lanes.

## Conceptual Pillars

1. **Relational invariance:** ratios preserve structure under scaling.
2. **Cross-modal stress test:** alignment quality must hold under different modality-specific distortions.
3. **Causal comparability:** architecture/mechanism claims require fixed protocol and explicit controls.
4. **Model-development continuity:** each evidence cycle should improve not only interpretation, but also model capability.

## Operational Hypotheses

| Hypothesis | Operational meaning | Status |
|---|---|---|
| H1 | Signals show stable ratio structure beyond random baselines | Validated |
| H2 | Neural encoders can learn useful ratio-informed embeddings | Validated |
| H3 | Ratio-informed representations transfer across modalities | Active, promising |

Interpretive boundary:
- H3 is approached through escalated evidence (Escalon 1 -> 2 -> 3), not single-run claims.

## Evaluation Framework

Canonical metric block (structured pool):
- `A2M R@10`
- `M2A R@10`
- `hard_neg`
- `S = min(A2M, M2A)`

Comparability rules:
- fixed pool size/query count/seed for like-to-like comparisons,
- closed vs pending runs explicitly separated,
- no claim of mechanism superiority without protocol alignment.

## Why This Framework Is Investor-Relevant

- It produces measurable milestones, not only conceptual narratives.
- It supports staged de-risking (Escalon 1 -> Escalon 2 -> Escalon 3).
- It balances scientific rigor with engineering scalability (e.g., performance-speed tradeoffs like reverse cross-att).
- It clarifies that Phideus is both a research thesis and a model-building program.

## Freshness Stamp

**Aligned with project status and ranking snapshots dated 2026-02-22.**
