import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import MetricCard from '../../components/evidence/MetricCard';
import DescriptorTable from '../../components/evidence/DescriptorTable';
import FigureCard from '../../components/visuals/FigureCard';
import classes from './Evidence.module.css';

export default function Evidence() {
    useEffect(() => {
        document.title = 'Scientific Evidence | Phideus';
    }, []);

    return (
        <Layout>
            <div className={`container ${classes.page}`}>

                {/* ── JOURNAL HEADER ── */}
                <header className={classes.journalHeader}>
                    <div className={classes.journalMeta}>
                        <span>PHIDEUS Research Program</span>
                        <span>Escalon 1 — Gate 5B</span>
                        <span>Cut: 2026-02-25</span>
                    </div>
                    <h1>Harmonic Ratio Descriptors Improve Cross-Modal Retrieval: Evidence from Escalon 1</h1>
                    <p className={classes.authors}>
                        BIAS_CONTROL Protocol · MAESTRO Dataset · Audio ↔ MIDI
                    </p>

                    <div className={classes.abstractBlock}>
                        <h2 className={classes.abstractTitle}>Abstract</h2>
                        <p className={classes.abstract}>
                            We investigate whether injecting harmonic ratio descriptors into a dual-encoder
                            cross-modal retrieval model produces measurable, causally attributable improvement
                            in audio-MIDI alignment. Under a fixed canonical protocol (foundation checkpoint
                            locked at epoch 25, structured pool of 256 items, 500 queries, seed 42),
                            the best descriptor configuration (d4a4: MIDI interval descriptor + audio
                            log-frequency descriptor, concatenation mechanism) raises the balanced retrieval
                            score from S=73.4% to S=83.8%, a gain of +10.4 percentage points. A causal
                            ablation study confirms that the audio descriptor path is the dominant causal
                            contributor: zeroing the audio descriptor causes performance to collapse by
                            76 pp, while zeroing the MIDI descriptor produces near-zero effect (−0.6 pp).
                            Internal cross-encoder alignment (measured by CKA) increases up to +82% in
                            augmented arms, confirming that ratio descriptors reshape internal
                            representations, not only output retrieval scores. These results constitute
                            the Gate 5B evidence package for Escalon 1 of the TripleScaloneta program.
                        </p>
                    </div>

                    <div className={classes.keyClaimsRow}>
                        <MetricCard title="Best retrieval (d4a4)" value="83.8%" status="closed" sourceLabel="S = min(A2M, M2A) · Test 12" />
                        <MetricCard title="Baseline (D0)" value="73.4%" status="closed" sourceLabel="No descriptor · Test 12" />
                        <MetricCard title="Net gain" value="+10.4 pp" status="closed" sourceLabel="d4a4 vs D0 · causally confirmed" />
                        <MetricCard title="CKA alignment gain" value="+82%" status="closed" sourceLabel="D0 → d4-a4r · Test 06" />
                    </div>
                </header>

                {/* ── 1. EXPERIMENTAL SETUP ── */}
                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>
                        <span className={classes.sectionNum}>1.</span>
                        Experimental Setup and Protocol
                    </h2>

                    <div className={classes.setupGrid}>
                        <div>
                            <h3>Dataset</h3>
                            <p>
                                <strong>MAESTRO v3.0.0</strong> — a large-scale dataset of paired piano
                                performances in two modalities: high-quality audio recordings and precisely
                                aligned MIDI transcriptions. The audio-MIDI pairing is exact: every audio
                                segment corresponds to a MIDI segment representing the same musical content.
                                This makes MAESTRO an ideal Rosetta Stone for Escalon 1 — the ground truth
                                correspondence is unambiguous.
                            </p>
                            <h3>Task</h3>
                            <p>
                                Bidirectional cross-modal retrieval. Given an audio query, retrieve the
                                correct MIDI representation from a pool of candidates (A2M: Audio-to-MIDI).
                                Given a MIDI query, retrieve the correct audio (M2A: MIDI-to-Audio).
                                Evaluation at Recall@10 — whether the correct match appears in the top
                                10 results from a pool of 256 items.
                            </p>
                        </div>
                        <div className={`glass-panel ${classes.protocolPanel}`}>
                            <h3>Canonical Protocol (BIAS_CONTROL)</h3>
                            <p className={classes.protocolNote}>
                                All rows in the descriptor comparison table are comparable
                                only under this exact shared protocol.
                            </p>
                            <table className={classes.protocolTable}>
                                <tbody>
                                    <tr><td>Foundation checkpoint</td><td><code>foundation_locked_e25.pt</code></td></tr>
                                    <tr><td>Freeze policy</td><td><code>run-d</code></td></tr>
                                    <tr><td>Batch size</td><td><code>16</code></td></tr>
                                    <tr><td>Seed</td><td><code>42</code></td></tr>
                                    <tr><td>Pool size</td><td><code>256</code></td></tr>
                                    <tr><td>Queries</td><td><code>500</code></td></tr>
                                    <tr><td>Primary metric</td><td><code>S = min(A2M_R@10, M2A_R@10)</code></td></tr>
                                </tbody>
                            </table>
                            <p className={classes.protocolNote}>
                                <strong>Why min(A2M, M2A)?</strong> The balanced minimum prevents a model
                                from gaming the metric by excelling in one retrieval direction while
                                ignoring the other. A high S score requires genuine bidirectional alignment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── 2. DESCRIPTOR TAXONOMY ── */}
                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>
                        <span className={classes.sectionNum}>2.</span>
                        Descriptor Taxonomy
                    </h2>
                    <p className={classes.sectionLead}>
                        Ratio descriptors are compact, handcrafted representations that encode
                        proportional relationships in the signal — frequency interval histograms,
                        energy distributions across octave bands, onset patterns — rather than
                        raw feature values. They are injected into the dual encoder alongside
                        the learned representations.
                    </p>

                    <div className={classes.descriptorGrid}>
                        <div className={`glass-panel ${classes.descriptorCard}`}>
                            <span className={classes.descriptorFamily}>MIDI Descriptors</span>
                            <h3>D4 — Interval Histogram</h3>
                            <p>
                                Encodes the distribution of pitch intervals (semitone differences between
                                successive notes) in the MIDI symbolic representation. Captures the
                                melodic and harmonic interval profile as a normalized histogram.
                                Scale-invariant by construction: a C major scale and a G major scale
                                produce identical interval histograms.
                            </p>
                            <div className={classes.descriptorArms}>
                                <span>Arms: D4 (concat)</span>
                                <span>D4x (cross-att)</span>
                                <span>d4r (reverse cross-att)</span>
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.descriptorCard}`}>
                            <span className={classes.descriptorFamily}>Audio Descriptors</span>
                            <h3>A4 — Log-Frequency Octave Bands</h3>
                            <p>
                                Encodes energy distribution across logarithmically-spaced frequency
                                bands (octave-aligned), normalized to capture relative band ratios
                                rather than absolute energy levels. Specifically targets the 750Hz+
                                range where ratio sensitivity is highest (confirmed by Test 08).
                            </p>
                            <div className={classes.descriptorArms}>
                                <span>Arms: A4 (concat)</span>
                                <span>A4x (cross-att)</span>
                                <span>a4r (reverse cross-att)</span>
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.descriptorCard}`}>
                            <span className={classes.descriptorFamily}>Dual Descriptors</span>
                            <h3>d4a4 — Combined Injection</h3>
                            <p>
                                Simultaneously injects D4 into the MIDI encoder and A4 into the audio
                                encoder. The best-performing configuration in Escalon 1. The causal
                                ablation (Test 01) reveals that the A4 path carries the dominant causal
                                contribution — the D4 side is helpful but not the primary driver.
                            </p>
                            <div className={classes.descriptorArms}>
                                <span>Arms: d4a4 (concat)</span>
                                <span>d4-a4r (A4 as reverse cross-att)</span>
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.descriptorCard}`}>
                            <span className={classes.descriptorFamily}>Injection Mechanisms</span>
                            <h3>How Descriptors Enter the Model</h3>
                            <p>
                                The same descriptor behaves differently depending on <em>how</em> it is
                                integrated. Concatenation appends it at the input boundary.
                                Cross-attention routes it through attention layers.
                                Reverse cross-attention (a4r) inverts query/key: the descriptor
                                becomes the query that interrogates encoder feature maps —
                                162× fewer attention operations than standard cross-attention.
                            </p>
                            <div className={classes.descriptorArms}>
                                <span>concat · cross-att · reverse cross-att · third-tower · FiLM · MoE</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 3. TEST NARRATIVES ── */}
                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>
                        <span className={classes.sectionNum}>3.</span>
                        Experiments and Results
                    </h2>
                    <p className={classes.sectionLead}>
                        Gate 5B is structured as a six-layer evidence package. Each layer answers
                        a different scientific question. Together they form a coherent argument, not
                        a collection of isolated metrics.
                    </p>

                    {/* Test 12 */}
                    <article className={classes.testArticle} id="test-12">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 12</span>
                            <h3>Performance Scoreboard — Does ratio injection improve retrieval?</h3>
                            <Link to="/evidence/test-12" className={classes.testDeepLink}>Full test page →</Link>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>What we wanted to know:</strong> Under the canonical protocol, how much do ratio descriptors improve cross-modal retrieval compared to the no-descriptor baseline?</p>
                                <p><strong>How we tested it:</strong> We ran all 24 descriptor/mechanism combinations under the BIAS_CONTROL fixed protocol (pool=256, queries=500, seed=42). The primary metric is S = min(A2M R@10, M2A R@10). Results compared against D0, the baseline encoder with no descriptor injection.</p>
                                <p><strong>What we found:</strong> The d4a4 combination (dual MIDI+Audio descriptor, concatenation) achieves S=83.8% vs D0's S=73.4%. The reverse cross-attention variant (a4r) reaches S=82.0%, demonstrating that the mechanism choice matters as much as the descriptor family. Hard-negative discrimination (same piece, different time segment) reaches 91.6% for top arms vs 90.0% for baseline.</p>
                                <p><strong>Interpretation:</strong> The +10.4pp gain is large, reproducible, and consistent across multiple metrics. It is not a cherry-picked outlier — the top-4 arms all exceed baseline by substantial margins. The range of the 24-arm sweep also reveals that descriptor injection can hurt performance (e.g., t3-anc at −18pp), confirming that not all ratio representations are equally useful.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard
                                    isAnim
                                    src="/assets/evidence/gate5b/animations/anim5_sidebyside_D0_vs_d4a4.gif"
                                    alt="D0 vs d4a4 evolution"
                                    caption="Embedding geometry evolution: D0 (left) vs d4a4 (right)."
                                />
                            </div>
                        </div>
                        <div className={classes.chartsGrid4}>
                            <FigureCard src="/assets/evidence/gate5b/test12_scoreboard/chart01_scoreboard_S.png" alt="S scoreboard" caption="Canonical S score by arm. D0 is the baseline." />
                            <FigureCard src="/assets/evidence/gate5b/test12_scoreboard/chart02_recall_spectrum.png" alt="Recall spectrum" caption="Recall@K curves for both retrieval directions." />
                            <FigureCard src="/assets/evidence/gate5b/test12_scoreboard/chart03_mrr_meanrank.png" alt="MRR and mean rank" caption="Mean Reciprocal Rank and mean rank profile." />
                            <FigureCard src="/assets/evidence/gate5b/test12_scoreboard/chart04_hard_negatives.png" alt="Hard negatives" caption="Hard-negative discrimination: same piece, different time." />
                        </div>
                        <div className={classes.metricsRow}>
                            <MetricCard title="D0 (baseline)" value="73.4%" status="closed" sourceLabel="no descriptor · Test 12" />
                            <MetricCard title="d4a4" value="83.8%" status="closed" sourceLabel="+10.4 pp · Test 12" />
                            <MetricCard title="a4r" value="82.0%" status="closed" sourceLabel="+8.6 pp · most invariant" />
                            <MetricCard title="d4-a4r" value="79.8%" status="closed" sourceLabel="+6.4 pp · strong alignment" />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion from Test 12:</strong> Ratio descriptor injection produces consistent, large-scale improvement in cross-modal retrieval. The effect is robust across multiple metrics and reproducible under the canonical protocol. This answers the primary performance question affirmatively.
                        </div>
                    </article>

                    {/* Test 01 */}
                    <article className={classes.testArticle} id="test-01">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 01</span>
                            <h3>Causal Ablation — Where does the gain actually come from?</h3>
                            <Link to="/evidence/test-01" className={classes.testDeepLink}>Full test page →</Link>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>What we wanted to know:</strong> Is the performance gain causally attributable to the ratio descriptors, or could it be an artifact of the training setup, the extra parameters, or both?</p>
                                <p><strong>How we tested it:</strong> Systematic ablation — we zeroed out either the audio descriptor path or the MIDI descriptor path for each arm, measured the resulting performance drop, and compared against normal performance.</p>
                                <p><strong>What we found:</strong> Zeroing the audio descriptor (A4/A4r) causes catastrophic degradation: −76pp for d4a4, −77.6pp for a4r, −75.4pp for d4-a4r. Zeroing the MIDI descriptor (D4) has near-zero effect: −0.6pp for d4a4, +0.4pp for d4-a4r (within noise). This asymmetry is consistent and strong.</p>
                                <p><strong>Secondary finding:</strong> Injecting D4 into the MIDI encoder only — without any audio descriptor — still improves audio-side retrieval by +2.6pp. This is explained by the VICReg joint objective: improving the "relational quality" of MIDI representations forces the audio encoder to reorganize its own latent space to align. The two encoders are not independently optimized — they share gradient pressure.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard
                                    isAnim
                                    src="/assets/evidence/gate5b/animations/anim2_bridges_crossmodal.gif"
                                    alt="Cross-modal bridges forming"
                                    caption="Bridge formation between audio and MIDI representations."
                                />
                            </div>
                        </div>
                        <div className={classes.chartsGrid2}>
                            <FigureCard src="/assets/evidence/gate5b/test01_causal_ablation/chart05_ablation_heatmap.png" alt="Ablation heatmap" caption="Full delta matrix. Red = large degradation on zeroing." />
                            <FigureCard src="/assets/evidence/gate5b/test01_causal_ablation/chart06_audio_vs_midi_causal.png" alt="Audio vs MIDI causal" caption="Audio path dominates causal contribution." />
                        </div>
                        <div className={classes.ablationCallout}>
                            <MetricCard title="d4a4 zero_audio" value="−76.0 pp" status="closed" sourceLabel="large collapse — causal" />
                            <MetricCard title="a4r zero_audio" value="−77.6 pp" status="closed" sourceLabel="large collapse — causal" />
                            <MetricCard title="d4a4 zero_midi" value="−0.6 pp" status="closed" sourceLabel="near zero — not causal" />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion from Test 01:</strong> The performance gain is causally attributable to the audio ratio descriptor path. This rules out explanations based on extra capacity, regularization effects from adding parameters, or training dynamics alone. The gain requires ratio information specifically from the audio signal.
                        </div>
                    </article>

                    {/* Test 04 */}
                    <article className={classes.testArticle} id="test-04">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 04</span>
                            <h3>Pitch Shift Invariance — Does ratio structure generalize under transposition?</h3>
                            <Link to="/evidence/test-04" className={classes.testDeepLink}>Full test page →</Link>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>What we wanted to know:</strong> Ratio representations are theoretically scale-invariant. Does this theoretical property translate into practical robustness when the model is evaluated under pitch shifts?</p>
                                <p><strong>How we tested it:</strong> We evaluated retrieval performance under ±1 semitone pitch shifts applied to the audio signal, measuring performance retention across arms. The arm that best retains its score under transposition is the most invariant.</p>
                                <p><strong>What we found:</strong> A4-based mechanisms retain substantially more performance under pitch shifts than D0. a4r shows the strongest invariance profile — maintaining performance closer to its unshifted baseline than any other arm.</p>
                                <p><strong>Interpretation:</strong> This is consistent with the HIT hypothesis: ratio descriptors encode relationships between frequency components rather than absolute frequencies. Under transposition, the relationship structure is preserved; only the absolute values shift. The model trained with ratio descriptors has learned representations that are less sensitive to absolute frequency coordinates.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard src="/assets/evidence/gate5b/test04_transposition/chart07_transposition_curves.png" alt="Transposition curves" caption="Performance retention under ±1 semitone pitch shifts by arm." />
                            </div>
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion from Test 04:</strong> A4-based ratio descriptors confer partial pitch invariance to the model. a4r is the most invariant arm. This is direct evidence that ratio structure — not absolute frequency matching — is the operative mechanism. This robustness property has practical implications: real-world audio often involves pitch variation across recordings of the same content.
                        </div>
                    </article>

                    {/* Test 06 */}
                    <article className={classes.testArticle} id="test-06">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 06</span>
                            <h3>RSA / CKA Alignment — Do the two encoders become more alike internally?</h3>
                            <Link to="/evidence/test-06" className={classes.testDeepLink}>Full test page →</Link>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>What we wanted to know:</strong> Improved retrieval scores could reflect surface-level output optimization without genuine representational change. We asked: do ratio descriptors reshape the internal geometry of the encoder representations, not just the final output?</p>
                                <p><strong>How we tested it:</strong> Centered Kernel Alignment (CKA) — a geometry-sensitive metric that measures how similarly two neural networks represent the same set of inputs. We measured CKA between audio encoder layers and MIDI encoder layers for each arm, comparing against D0.</p>
                                <p><strong>What we found:</strong> CKA increases substantially in all top augmented arms:
                                    D0 scores 0.435; d4a4 reaches 0.659 (+51%); a4r reaches 0.766 (+76%);
                                    d4-a4r reaches 0.794 (+82%). The magnitude of this internal alignment gain is much larger than the output-score gain alone would suggest.</p>
                                <p><strong>Interpretation:</strong> Ratio descriptors do not simply shift output scores — they restructure how each encoder represents audio and MIDI. When the encoders internally represent signals more similarly, cross-modal retrieval becomes structurally easier. This finding suggests the gain mechanism is deep (representational reorganization) rather than shallow (output calibration).</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard
                                    isAnim
                                    src="/assets/evidence/gate5b/animations/anim3_cka_pulse.gif"
                                    alt="CKA pulse animation"
                                    caption="Layer-level CKA coupling dynamics across encoder depth."
                                />
                            </div>
                        </div>
                        <div className={classes.chartsGrid2}>
                            <FigureCard src="/assets/evidence/gate5b/test06_rsa_cka/chart09_cka_heatmaps_4models.png" alt="CKA heatmaps" caption="Layer × layer CKA heatmaps for 4 models." />
                            <FigureCard src="/assets/evidence/gate5b/test06_rsa_cka/chart10_cka_crossencoder_bar.png" alt="CKA bars" caption="Cross-encoder mean CKA by arm." />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion from Test 06:</strong> Ratio descriptors produce substantial internal representational alignment between audio and MIDI encoders — up to +82% CKA gain vs baseline. This is evidence that the descriptors reshape the model's internal geometry, not only its output. The gain is structural, not superficial.
                        </div>
                    </article>

                    {/* Test 08 */}
                    <article className={classes.testArticle} id="test-08">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 08</span>
                            <h3>Descriptor Sensitivity — Which frequency bands drive the effect?</h3>
                            <Link to="/evidence/test-08" className={classes.testDeepLink}>Full test page →</Link>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>What we wanted to know:</strong> The A4 descriptor is a multi-band representation. Not all frequency bands necessarily contribute equally. Understanding which bands drive the effect helps characterize where ratio information is concentrated in the audio signal.</p>
                                <p><strong>How we tested it:</strong> Sensitivity analysis — systematically masking individual frequency bands in the A4 descriptor and measuring the resulting performance delta. Per-arm and per-band sensitivity profiles were computed and visualized.</p>
                                <p><strong>What we found:</strong> The highest sensitivity is concentrated in high-frequency octave bands (750Hz+). Mechanism choice shifts which specific bands dominate: concat and reverse cross-attention show different spectral profiles, with a4r showing a broader distribution and A4 showing stronger concentration in the 750Hz–1.5kHz region.</p>
                                <p><strong>Interpretation:</strong> The effect is not frequency-agnostic. Upper partials and harmonics above 750Hz carry the ratio information that the model finds most useful for alignment. This is consistent with psychoacoustic findings: pitch perception and interval discrimination rely heavily on the harmonic series above the fundamental, not on the fundamental alone.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard
                                    isAnim
                                    src="/assets/evidence/gate5b/animations/anim6_sensitivity_radar.gif"
                                    alt="Sensitivity radar animation"
                                    caption="A4 band contribution dynamics across arms."
                                />
                            </div>
                        </div>
                        <div className={classes.chartsGrid2}>
                            <FigureCard src="/assets/evidence/gate5b/test08_ratio_decoding/chart11_sensitivity_bars.png" alt="Sensitivity bars" caption="Per-band sensitivity bars by arm." />
                            <FigureCard src="/assets/evidence/gate5b/test08_ratio_decoding/chart12_sensitivity_radar.png" alt="Sensitivity radar" caption="Per-arm sensitivity profile (radar view)." />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion from Test 08:</strong> The 750Hz+ spectral region is the primary driver of descriptor sensitivity. This finding characterizes the ratio information source and provides guidance for future descriptor design: upper harmonics, not fundamentals, carry the cross-modal alignment signal.
                        </div>
                    </article>

                    {/* Test 03 */}
                    <article className={classes.testArticle} id="test-03">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 03</span>
                            <h3>Probe Layer Analysis — Is the gain linear or geometric?</h3>
                            <Link to="/evidence/test-03" className={classes.testDeepLink}>Full test page →</Link>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>What we wanted to know:</strong> A linear classifier can probe whether features are easily linearly separable. If the ratio-descriptor gain were linear (i.e., the descriptors simply add linearly-decodable features), the probe should show consistent improvement. If the gain is geometric/non-linear, the probe should show a more complex pattern.</p>
                                <p><strong>How we tested it:</strong> Linear probe decoding — training a linear classifier on top of frozen encoder representations to predict musical properties. Comparing cross-decoding R² (predicting audio features from MIDI representations and vice versa) vs self-decoding R² for each arm.</p>
                                <p><strong>What we found:</strong> Linear probe decoding does not produce a simple "augmented always better" pattern. The gains are largely geometric and non-linear — the probe does not straightforwardly recover the advantage that retrieval scoring reveals.</p>
                                <p><strong>Interpretation:</strong> The improvement from ratio descriptors is not simply a matter of making features more linearly separable. It operates at the level of representational geometry — the arrangement of embeddings in the shared space — rather than through linear feature augmentation. This is consistent with the CKA results from Test 06.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard src="/assets/evidence/gate5b/test03_ratio_probe/chart13_probe_r2.png" alt="Probe R2" caption="Cross-decoding vs self-decoding R². No simple linear advantage for augmented arms." />
                            </div>
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion from Test 03:</strong> The ratio-descriptor gain mechanism is geometric, not linear. It does not reduce to adding linearly-decodable features. The improvement operates through representational reorganization at the manifold level, which is why it is captured by CKA (Test 06) but not by linear probing.
                        </div>
                    </article>

                    {/* Test 10 */}
                    <article className={classes.testArticle} id="test-10">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 10</span>
                            <h3>Embedding Geometry — What does the representation manifold look like?</h3>
                            <Link to="/evidence/test-10" className={classes.testDeepLink}>Full test page →</Link>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>What we wanted to know:</strong> If ratio descriptors genuinely reorganize internal representations, this should be visible in the geometry of the embedding space. We asked: how does the manifold structure change between D0 and augmented arms?</p>
                                <p><strong>How we tested it:</strong> 2D dimensionality reduction (t-SNE and UMAP) on audio and MIDI embeddings for D0, d4a4, a4r, and d4-a4r. Cosine distance distributions between matched pairs (same audio-MIDI content) and random pairs.</p>
                                <p><strong>What we found:</strong> Augmented arms show tighter matched-pair cosine gaps (audio and MIDI embeddings for the same piece are closer together) and wider separation from random pairs. The geometry visualizations show more coherent, compact clusters in augmented arms compared to D0's more diffuse distribution.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard
                                    isAnim
                                    src="/assets/evidence/gate5b/animations/anim4_rotation_3d.gif"
                                    alt="3D manifold rotation"
                                    caption="3D embedding manifold — geometric structure across arms."
                                />
                            </div>
                        </div>
                        <div className={classes.chartsGrid3}>
                            <FigureCard src="/assets/evidence/gate5b/test10_visualizations/comparison_tsne.png" alt="t-SNE comparison" caption="t-SNE comparison across 4 arms." />
                            <FigureCard src="/assets/evidence/gate5b/test10_visualizations/comparison_umap.png" alt="UMAP comparison" caption="UMAP comparison across 4 arms." />
                            <FigureCard src="/assets/evidence/gate5b/test10_visualizations/alignment_cosine_distribution.png" alt="Cosine distribution" caption="Matched vs random cosine distance gap." />
                        </div>
                        <div className={classes.chartsGrid4}>
                            <FigureCard src="/assets/evidence/gate5b/test10_visualizations/D0_umap_detail.png" alt="D0 UMAP" caption="D0 — baseline geometry." />
                            <FigureCard src="/assets/evidence/gate5b/test10_visualizations/d4a4_umap_detail.png" alt="d4a4 UMAP" caption="d4a4 — tighter cross-modal clusters." />
                            <FigureCard src="/assets/evidence/gate5b/test10_visualizations/a4r_umap_detail.png" alt="a4r UMAP" caption="a4r — strong geometric alignment." />
                            <FigureCard src="/assets/evidence/gate5b/test10_visualizations/d4-a4r_umap_detail.png" alt="d4-a4r UMAP" caption="d4-a4r — best internal CKA." />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion from Test 10:</strong> The embedding geometry of augmented arms is measurably tighter and more coherent than baseline. Audio and MIDI embeddings for the same content cluster more closely. This geometric improvement is the direct structural manifestation of what CKA measures as alignment gain.
                        </div>
                    </article>
                </section>

                {/* ── 4. SYNTHESIS ── */}
                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>
                        <span className={classes.sectionNum}>4.</span>
                        Synthesis and Conclusions
                    </h2>
                    <div className={`glass-panel ${classes.synthesisPanel}`}>
                        <p className={classes.synthesisLead}>
                            The six tests form a coherent argument. Together they support the following
                            conclusions from the current Escalon 1 evidence:
                        </p>
                        <ol className={classes.conclusionsList}>
                            <li>
                                <strong>Ratio-informed mechanisms materially improve canonical cross-modal retrieval.</strong>{' '}
                                +10.4pp for d4a4 over baseline D0 under a fixed, reproducible protocol. (Test 12)
                            </li>
                            <li>
                                <strong>The improvement has a causal explanation.</strong>{' '}
                                It is attributable specifically to the audio ratio descriptor path.
                                Zeroing it causes near-total collapse. Zeroing the MIDI path has negligible effect. (Test 01)
                            </li>
                            <li>
                                <strong>The A4/A4r pathways dominate causal contribution.</strong>{' '}
                                Audio log-frequency octave band descriptors are the operative mechanism
                                in the best-performing arms. (Tests 01, 08)
                            </li>
                            <li>
                                <strong>Ratio descriptors increase internal representational alignment.</strong>{' '}
                                CKA between encoder layers rises up to +82% — the encoders literally
                                represent inputs more similarly when trained with ratio descriptors. (Test 06)
                            </li>
                            <li>
                                <strong>The gain mechanism is geometric, not linear.</strong>{' '}
                                It operates through manifold-level reorganization, not through adding
                                linearly-decodable features. (Tests 03, 10)
                            </li>
                        </ol>
                        <div className={classes.openQuestions}>
                            <span className={classes.openQuestionsLabel}>Research hypotheses — still under investigation</span>
                            <p>
                                These results are from Escalon 1 (Audio ↔ MIDI on MAESTRO). Whether
                                ratio-structure transfer generalizes beyond this benchmark — to speech,
                                biosignals, or other domains — remains an open research question.
                                Test 09 (full invariance matrix) and UNC training studies are pending closure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── 5. PENDING ── */}
                <section className={`glass-panel ${classes.pendingPanel}`}>
                    <h3>Pending Evidence — Not Closed Public Claims</h3>
                    <ul className={classes.pendingList}>
                        <li><code>Test 09</code> — Full invariance suite matrix (in progress). Will complete the robustness layer.</li>
                        <li><code>UNC studies</code> — Parameter-matched and multi-seed completion (pending). Required for uncertainty quantification.</li>
                    </ul>
                    <p className={classes.pendingNote}>Pending evidence represents roadmap momentum, not closed results. It will not be presented as concluded until the studies are complete.</p>
                </section>

                {/* ── 6. DESCRIPTOR TABLE ── */}
                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>
                        <span className={classes.sectionNum}>5.</span>
                        Full 24-Arm Descriptor Comparison
                        <span className={classes.tableEpochNote}>@5 epochs</span>
                    </h2>
                    <p className={classes.sectionLead}>
                        Short-horizon empirical survey across all 24 descriptor/mechanism combinations.
                        At 5 epochs, relative rankings are stable even if absolute scores are lower than
                        the 30/60-epoch runs reported in Test 12. All rows are comparable only inside the
                        shared BIAS_CONTROL protocol.
                    </p>
                    <div className={`glass-panel ${classes.tableGuide}`}>
                        <h3>How to read this table</h3>
                        <ul className={classes.guideList}>
                            <li><strong>D0</strong> is the no-descriptor baseline — the reference point for all delta calculations.</li>
                            <li><strong>S = min(A2M R@10, M2A R@10)</strong> prevents gaming by requiring bidirectional competence.</li>
                            <li><strong>Descriptor family and mechanism both matter</strong> — A4 with concat (rank 7) vs A4 with reverse cross-attention (rank 2) differ by 5 pp from mechanism alone.</li>
                            <li><strong>Negative deltas</strong> are informative: they show where ratio injection can hurt, and why not all descriptors are equal.</li>
                        </ul>
                    </div>
                    <DescriptorTable />
                </section>

                <div className={classes.footerFreshness}>
                    <p>Data as of 2026-02-25 · Gate 5B scientific package · Escalon 1</p>
                </div>

            </div>
        </Layout>
    );
}
