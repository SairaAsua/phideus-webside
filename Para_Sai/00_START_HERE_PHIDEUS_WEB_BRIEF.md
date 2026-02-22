# PHIDEUS Web Brief (Start Here)

**As of 2026-02-22**
**Audience:** Website AI agent, investors, technical partners
**Scope:** Public-facing, evidence-based project overview (no internal operations)

---

## 1) Executive Narrative: What Phideus Is, Why It Matters, Why Now

Phideus is a long-horizon program framed by **Harmonic Information Theory (HIT)**. It studies whether **frequency-ratio structure** can operate as a portable information domain across heterogeneous signals.

In practice, the project uses **cross-modality deep learning** as its experimental field. The active benchmark is retrieval between **audio and MIDI** on MAESTRO.

Why this matters: if ratio-structured representations transfer reliably across modalities, the same modeling principles can scale from music to speech and biosignals.

Why now: Escalon 1 has moved from fragile hash-based approaches to robust neural contrastive training, with strong retrieval gains and reproducible benchmarking.

---

## 2) Conceptual Framework: Harmonic Information Theory (H1/H2/H3)

| Hypothesis | Statement | Current Status |
|---|---|---|
| H1 - Structure | Real signals contain non-random ratio structure | Validated |
| H2 - Learnability | Neural systems can learn compact ratio-informed representations | Validated |
| H3 - Cross-modality | Ratio structure supports transfer across modalities | In progress, with strong evidence in Escalon 1 |

Core principle: cross-modality is the **test bench**, not the final goal.

---

## 3) Program Duality: Two Simultaneous Paths

Phideus is intentionally built as a double path:

1. **Research path (theoretical + empirical):**
   - explore whether ratios carry reusable structure,
   - test that claim across modalities with controlled experiments.
2. **AI model path (engineering + capability):**
   - design and train models that learn and operate with ratio logic,
   - move toward ratio-native representations and decision behavior.

Both paths are coupled: theory defines what to test, and model behavior provides the evidence loop.

---

## 4) TripleScaloneta Map

| Escalon | Domain | Status | Public Message |
|---|---|---|---|
| Escalon 1 | Audio <-> MIDI (MAESTRO) | Active (BIAS_CONTROL) | Primary exploration layer for ratio-information value |
| Escalon 2 | Speech <-> EGG | Planned | Next stress test of ratio transfer with paired physical sensing |
| Escalon 3 | ECG <-> PPG | Planned | Generalization test of the same ratio logic in biomedical signals |

---

## 5) Escalon 1 Chronology (Why the Method Changed)

1. **Early analyzer phase (hash/token style):** proved feasibility signals but with limited robustness.
2. **Transition trigger:** early methods were not stable enough for strict causal comparison.
3. **BIAS_CONTROL transition:** moved to contrastive neural retrieval with canonical evaluation and gate-based decision logic.
4. **Current state:** descriptor/mechanism optimization plus scheduler-depth analysis under controlled comparability.
5. **Dual-path continuity:** these results feed both HIT validation and the engineering of ratio-native model behavior.

---

## 6) BIAS_CONTROL Core Evidence (Closed vs Preliminary)

### Closed evidence

- **Baseline context (D0, Gate 4.3 screening):** `S=60.2%`, `A2M=60.4%`, `M2A=60.2%`, `hard_neg=90.0%`.
- **Gate 4.3 (closed, 13 arms @5ep):** top arm `d4a4=69.8%` (`+9.6pp` vs D0).
- **Gate 4.3 long runs (closed @30ep):** `d4a4=83.6%`, `a4r=82.0%`, `d4-a4r=79.8%`, `t3-wt=79.8%`, `d4a4r=74.4%`, `moe-dual=72.6%`.
- **Gate 4.4 screening block:** closed (24-arm short-run map completed).
- **Gate 4.5 completed runs:** `d4a4 60ep=83.8%`, `a4r 60ep=79.4%`, `D0 60ep=72.8%`, `t3-wt 50ep hold=81.2%`.

### Preliminary / pending

- `d4-a4r 60ep` (cosine stretched): pending.
- `moe-dual 60ep` (cosine stretched): pending.
- `cosine-tail` batch (`D0`, `d4a4`, `a4r`, `d4-a4r`): pending.

---

## 7) Full 5-Epoch Descriptor Comparison

Use this complete table for website data blocks:
- `Para_Sai/04_DESCRIPTOR_TABLE_5EP_COMPLETE.md`

It includes all 24 arms, baseline D0 in-table, and deltas under one canonical protocol.

---

## 8) Key Findings for Public Communication

### A) Ratio injection improves performance

- `d4a4` outperforms D0 by **+9.6pp** in 5-epoch screening (`69.8%` vs `60.2%`).
- At long horizon, `d4a4` reaches **83.6% (30ep)** and **83.8% (60ep)**.

### B) A4r reverse cross-attention is a high-efficiency mechanism

- `a4r` delivers **68.6% at 5ep** (second-best overall), **82.0% at 30ep**, while staying computationally efficient.

### C) Speed profile (~2.6x train speed)

- Reverse-cross-att family (`a4r`, `d4a4r`, `d4-a4r`) runs around **~13 min/epoch** vs baseline-class around **~34 min/epoch**.
- Public source tag: `Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/RANKING_DESCRIPTORES_UNIFICADO.md`.
- Strategic implication: ratio-driven mechanisms are not only scientifically relevant, but also computationally scalable.

---

## 9) Direct Architecture Visualization Links (GitHub Pages)

- Main index: `https://altermundi.github.io/Phideus/`
- Cross-att injection: `https://altermundi.github.io/Phideus/crossatt`
- MERT + MIDI transformer: `https://altermundi.github.io/Phideus/phideus`
- Hybrid adapter fine-tuning: `https://altermundi.github.io/Phideus/bloquea`
- DANN: `https://altermundi.github.io/Phideus/dann`
- HRM: `https://altermundi.github.io/Phideus/hrm`
- ConstellationVAE: `https://altermundi.github.io/Phideus/constellation`
- JEPA-Lite: `https://altermundi.github.io/Phideus/jepa`
- RosetaVAE: `https://altermundi.github.io/Phideus/roseta`

---

## 10) What Is Next (Investor/Partner View)

1. Close Gate 4.5 pending runs for full scheduler-controlled comparison.
2. Enter Gate 5A (descriptor x mechanism sweep) with stronger causal confidence.
3. Build Gate 5B showcase package (13-test scientific validation bundle).
4. Prepare Escalon 2 launch criteria once Escalon 1 closure thresholds are met.
5. Keep both tracks synchronized: advance HIT evidence and ratio-native model capability together.

---

## 11) Freshness Stamp

**Data and status in this brief are aligned to the project cut-off dated 2026-02-22.**
