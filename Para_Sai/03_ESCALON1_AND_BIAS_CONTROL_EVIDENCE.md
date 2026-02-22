# Escalon 1 and BIAS_CONTROL Evidence Pack

**As of 2026-02-22**

This evidence pack should be read in the Harmonic Information Theory frame:
- ratios are treated as candidate information carriers,
- cross-modality is the experiment field to test that claim,
- model development runs in parallel with scientific validation.

## A) Early Escalon 1 Analyzer Phase (Historical Context)

Initial Escalon 1 work used analyzer-style/hash-style pipelines over paired Audio-MIDI segments.

Historical signal summary:
- early cross-modal accuracy: **15.5% top-1** (above random but insufficient),
- small-sample extractor redesigns showed promising short-run gains,
- methodology changed because robustness/comparability requirements were not met at scale.

This phase is important as origin evidence, but not the current benchmark reference.

## B) Transition to BIAS_CONTROL (Methodological Upgrade)

BIAS_CONTROL introduced:
1. gate-based execution,
2. canonical structured-pool evaluation,
3. strict metric stack (`S`, `A2M`, `M2A`, `hard_neg`),
4. mechanism-level comparison (descriptor + injection strategy),
5. controlled long-run validation.

Program-level meaning:
- the research lane gained stronger causal comparability,
- the model lane moved toward ratio-native operational behavior.

## C) Closed Evidence (Ready for Public Claims)

### C1. Baseline and Screening

- D0 baseline in Gate 4.3 screening: `S=60.2%`, `A2M=60.4%`, `M2A=60.2%`, `hard_neg=90.0%`.
- Gate 4.3 top @5ep: `d4a4=69.8%` (**+9.6pp vs D0**).
- Gate 4.3 strong single-mechanism arm: `a4r=68.6%` (**+8.4pp vs D0**).

### C2. Long Runs (30ep, closed)

- `d4a4=83.6%`
- `a4r=82.0%`
- `d4-a4r=79.8%`
- `t3-wt=79.8%`
- `d4a4r=74.4%`
- `moe-dual=72.6%`

### C3. Gate 4.5 completed runs (closed)

- `d4a4 60ep=83.8%` (new all-time best)
- `a4r 60ep=79.4%`
- `D0 60ep=72.8%`
- `t3-wt 50ep hold=81.2%`

## D) Preliminary / Pending Evidence (Clearly Labeled)

Pending in UNC queue:
- `d4-a4r 60ep` (cosine stretched)
- `moe-dual 60ep` (cosine stretched)
- `cosine-tail` batch: `D0`, `d4a4`, `a4r`, `d4-a4r`

Interpretation boundary:
- these pending runs are relevant for roadmap momentum,
- they are **not** final comparative evidence until completed under canonical evaluation.

## E) Key Public Claims Supported by Current Evidence

1. Ratio injection materially improves retrieval over baseline in controlled screening.
2. Dual same-modality descriptor injection (`d4a4`) is currently the strongest performer.
3. Reverse cross-attention (`a4r` family) offers a high quality/speed profile.
4. Scheduler design affects long-run outcomes and remains an active optimization axis.
5. The same evidence supports both HIT progression and practical AI-system development.

## F) Source-of-Truth Paths

- `Documents/00_TRONCAL/Proyecto_Estado_Actual.md`
- `Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/ROADMAP_BIAS_CONTROL.md`
- `Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/RANKING_DESCRIPTORES_UNIFICADO.md`
- `Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/09_GATE_4_5_LR_SCHEDULE_OPTIMIZATION/README.md`
- `Documents/01_FRENTES_ACTIVOS/ESCALON_1/RESULTADOS_ESCALON_1.md`

## Freshness Stamp

**Evidence status synchronized to the 2026-02-22 cut.**
