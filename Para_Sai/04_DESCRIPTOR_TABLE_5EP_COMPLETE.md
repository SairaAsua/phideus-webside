# Complete Descriptor Table @5 Epochs (24 Arms)

**As of 2026-02-22**

This table is the short-horizon empirical layer of TripleScaloneta inside the HIT program.
It compares how much ratio-information each descriptor/mechanism injects into cross-modality performance.

Canonical protocol:
- foundation checkpoint: `foundation_locked_e25.pt`
- freeze-policy: run-d
- batch size: 16
- seed: 42
- evaluation: structured pool (`pool=256`, `queries=500`)
- primary score: `S = min(A2M_R@10, M2A_R@10)`

## Full 24-Arm Table (Baseline Included)

| Rank | Arm | Family | Mechanism | Best S | A2M | M2A | hard_neg | Delta vs D0 | Gate |
|---|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | d4a4 | Dual (MIDI+Audio) | concat | 69.8% | 69.8% | 70.6% | 91.6% | +9.6pp | 4.3 |
| 2 | a4r | Audio (log-freq) | reverse cross-att | 68.6% | 68.6% | 69.0% | 91.6% | +8.4pp | 4.3-F5 |
| 3 | t3-wt | Third Tower | weighted bridge | 67.6% | 71.4% | 67.6% | 91.2% | +7.4pp | 4.4 |
| 4 | t3-tri | Third Tower | trilinear bridge | 65.0% | 65.4% | 65.0% | 90.6% | +4.8pp | 4.4 |
| 5 | d4r | MIDI (intervals) | reverse cross-att | 64.2% | 64.2% | 64.4% | 93.2% | +4.0pp | 4.3-F5 |
| 6 | D4 | MIDI (intervals) | concat | 63.6% | 63.6% | 64.4% | 91.2% | +3.4pp | 4.3 |
| 7 | A4 | Audio (log-freq) | concat | 63.6% | 65.8% | 63.6% | 92.4% | +3.4pp | 4.3 |
| 8 | A4x | Audio (log-freq) | cross-att | 62.6% | 64.0% | 62.6% | 92.4% | +2.4pp | 4.3 |
| 9 | A7x | Audio (attractor) | cross-att | 62.2% | 62.2% | 63.8% | 92.0% | +2.0pp | 4.3 |
| 10 | D0 | Baseline | no descriptor | 60.2% | 60.4% | 60.2% | 90.0% | 0.0pp | 4.3 |
| 11 | moe-a4-v2 | MoE v2 | non-zero init + noise decay | 60.2% | 60.4% | 60.2% | 90.8% | +0.0pp | 4.4-MoE |
| 12 | D4x | MIDI (intervals) | cross-att | 60.0% | 60.0% | 60.4% | 91.4% | -0.2pp | 4.3 |
| 13 | moe-a4-v4 | MoE v4 | top-1 hard gating | 59.4% | 60.6% | 59.4% | 91.2% | -0.8pp | 4.4-MoE |
| 14 | film-dual | FiLM | dual modulation | 59.4% | 60.2% | 59.4% | 91.4% | -0.8pp | 4.4 |
| 15 | film-a4 | FiLM | audio modulation | 59.2% | 60.8% | 59.2% | 89.8% | -1.0pp | 4.4 |
| 16 | moe-dual | MoE | dual expert routing | 59.2% | 61.2% | 59.2% | 91.6% | -1.0pp | 4.4 |
| 17 | moe-a4-v3 | MoE v3 | entropy-regularized routing | 59.2% | 60.6% | 59.2% | 91.2% | -1.0pp | 4.4-MoE |
| 18 | a9 | Audio (IDF attractor) | concat | 58.8% | 58.8% | 60.8% | 90.4% | -1.4pp | 4.3-F5 |
| 19 | A7 | Audio (attractor) | concat | 58.8% | 60.2% | 58.8% | 90.2% | -1.4pp | 4.3 |
| 20 | film-d4 | FiLM | MIDI modulation | 58.6% | 61.0% | 58.6% | 91.8% | -1.6pp | 4.4 |
| 21 | moe-a4 | MoE | expert routing | 58.2% | 58.8% | 60.2% | 89.6% | -2.0pp | 4.4 |
| 22 | a8 | Audio (onset-chroma) | concat | 57.4% | 60.4% | 57.4% | 90.6% | -2.8pp | 4.3-F5 |
| 23 | d4a4cm | Dual (cross-modal) | concat | 52.4% | 52.4% | 56.6% | 89.6% | -7.8pp | 4.3 |
| 24 | t3-anc | Third Tower | anchor bridge | 42.2% | 42.2% | 42.2% | 89.4% | -18.0pp | 4.4 |

## Metric Legend

- `S`: balanced score (`min(A2M, M2A)`) used as the primary ranking metric.
- `A2M`: Audio-to-MIDI retrieval recall at 10.
- `M2A`: MIDI-to-Audio retrieval recall at 10.
- `hard_neg`: same-piece-different-time discrimination accuracy.
- `Delta vs D0`: absolute improvement or drop relative to baseline arm D0.

## Comparability Conditions

All rows above are comparable only inside this shared protocol:
- same base checkpoint,
- same freeze policy,
- same batch size,
- same seed,
- same structured-pool evaluation.

## How to Read This Table (Non-Specialist)

1. Start with `Best S` to see overall balance between both retrieval directions.
2. Check `Delta vs D0` to measure practical benefit over baseline.
3. Use `hard_neg` to understand robustness against difficult near-miss examples.
4. Prefer arms that are strong in all three signals (S, bidirectional balance, hard_neg).

## Freshness Stamp

**Table synchronized to the 2026-02-22 canonical ranking snapshot.**
