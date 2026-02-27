import { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import MetricCard from '../../components/evidence/MetricCard';
import DescriptorTable from '../../components/evidence/DescriptorTable';
import FigureCard from '../../components/visuals/FigureCard';
import ImageGallery from '../../components/visuals/ImageGallery';
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

                    {/* ═══════════════ Test 12 ═══════════════ */}
                    <article className={classes.testArticle} id="test-12">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 12</span>
                            <h3>Performance Scoreboard — Comparative Benchmark</h3>
                        </div>
                        <div className={classes.questionBlock}>
                            <span className={classes.questionLabel}>Research question</span>
                            <p className={classes.question}>Under the canonical BIAS_CONTROL protocol, how much do ratio descriptors improve cross-modal retrieval compared to the no-descriptor baseline?</p>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>Methodology:</strong> We ran all 24 descriptor/mechanism combinations under the BIAS_CONTROL fixed protocol (pool=256, queries=500, seed=42). The primary metric is S = min(A2M R@10, M2A R@10). Results compared against D0, the baseline encoder with no descriptor injection.</p>
                                <h4 className={classes.blockTitle}>Findings</h4>
                                <ul className={classes.findingsList}>
                                    <li>The d4a4 combination (MIDI interval descriptor D4 + audio log-frequency descriptor A4, concatenation mechanism) achieves S=83.8% vs D0's S=73.4% — a net gain of +10.4 pp.</li>
                                    <li>The reverse cross-attention variant a4r reaches S=82.0%, showing that mechanism choice alone (same descriptor, different injection path) accounts for large performance differences.</li>
                                    <li>The dual combination d4-a4r (D4 concat + A4 reverse cross-attention) achieves S=79.8% — still +6.4 pp above baseline.</li>
                                    <li>Hard-negative discrimination (same piece, different time segment) reaches 91.6% for top arms vs 90.0% for baseline.</li>
                                    <li>Several arms underperform baseline: t3-anc drops by −18pp, demonstrating that not all ratio representations or injection schemes are beneficial.</li>
                                </ul>
                                <p><strong>Interpretation:</strong> The +10.4pp gain is large, reproducible, and consistent across multiple metrics (Recall@K, MRR, mean rank, hard-negative accuracy). It is not a cherry-picked outlier — the top-4 arms all exceed baseline by substantial margins. The range of the 24-arm sweep also reveals that descriptor injection can hurt performance (e.g., t3-anc at −18pp), confirming that not all ratio representations are equally useful.</p>
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
                            <strong>Conclusion:</strong> Ratio descriptor injection produces consistent, large-scale improvement in cross-modal retrieval. The effect is robust across multiple metrics and reproducible under the canonical protocol. This answers the primary performance question affirmatively.
                        </div>
                    </article>

                    {/* ═══════════════ Test 01 ═══════════════ */}
                    <article className={classes.testArticle} id="test-01">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 01</span>
                            <h3>Causal Ablation — Three Methods, One Answer</h3>
                        </div>
                        <div className={classes.questionBlock}>
                            <span className={classes.questionLabel}>Research question</span>
                            <p className={classes.question}>Is the performance gain causally attributable to the ratio descriptors, or could it be an artifact of training dynamics, extra parameters, or regularization effects?</p>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>Methodology:</strong> We applied three independent ablation techniques to each top-performing arm at inference time, disrupting the descriptor path through different mechanisms. The three methods were designed to test complementary failure modes — if the gain is genuinely causal, all three should degrade performance; if it is artifactual, at least one should fail to produce collapse.</p>
                                <h4 className={classes.blockTitle}>The three ablation methods</h4>
                                <ul className={classes.findingsList}>
                                    <li><strong>Zeroing</strong> — descriptor vectors set to zero, eliminating all ratio information. Tests whether the model depends on the presence of descriptor signal at all.</li>
                                    <li><strong>Noise injection</strong> — descriptor vectors replaced with Gaussian noise of matched statistics. Tests whether the model depends on the specific structure of ratio information, or merely on receiving any non-zero input in the descriptor channel.</li>
                                    <li><strong>Random permutation</strong> — descriptor vectors shuffled across samples, breaking the correspondence between audio content and its ratio representation. Tests whether the model depends on the correct alignment between the descriptor and the audio it describes.</li>
                                </ul>
                                <h4 className={classes.blockTitle}>Findings</h4>
                                <ul className={classes.findingsList}>
                                    <li>All three methods produce catastrophic degradation when applied to the audio descriptor path (A4/a4r): zeroing causes −76.0pp (d4a4), −77.6pp (a4r), −75.4pp (d4-a4r). Noise injection and random permutation produce comparable or greater collapse.</li>
                                    <li>All three methods produce negligible effect when applied to the MIDI descriptor path (D4): zeroing −0.6pp (d4a4), +0.4pp (d4-a4r) — within noise floor. Noise and permutation on the MIDI path show similarly null deltas.</li>
                                    <li>The convergence across methods is the key result: the model requires the specific, correctly-aligned ratio structure from the audio signal. Removing it (zeroing), corrupting it (noise), or misaligning it (permutation) all produce the same outcome — collapse.</li>
                                    <li>Secondary finding: injecting D4 into the MIDI encoder alone — without any audio descriptor — still improves audio-side retrieval by +2.6pp. This is the VICReg gradient backpropagation effect: improving MIDI representations forces the audio encoder to reorganize via shared gradient pressure.</li>
                                </ul>
                                <p><strong>Interpretation:</strong> No single ablation method alone would be fully conclusive — zeroing could reflect a scaling artifact, noise could mask structured failure, permutation could reveal incidental correlations. But the three methods together form a triple-verified causal argument: the gain requires specific, correctly-aligned ratio information from the audio path. The MIDI path contributes through indirect gradient transfer, not through direct descriptor utility.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard
                                    src="/assets/evidence/gate5b/test01_causal_ablation/chart05_ablation_heatmap.png"
                                    alt="Ablation heatmap"
                                    caption="Full ablation delta matrix across arms, paths, and methods."
                                />
                            </div>
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion:</strong> Three independent ablation methods converge on the same result — the performance gain is causally attributable to the audio ratio descriptor path, specifically to its correct structure and alignment. This rules out explanations based on extra capacity, regularization effects, or incidental training dynamics. The causal link is triple-verified.
                        </div>
                    </article>

                    {/* ═══════════════ Test 04 ═══════════════ */}
                    <article className={classes.testArticle} id="test-04">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 04</span>
                            <h3>Pitch Shift Invariance — Does Ratio Structure Generalize Under Transposition?</h3>
                        </div>
                        <div className={classes.questionBlock}>
                            <span className={classes.questionLabel}>Research question</span>
                            <p className={classes.question}>Ratio representations are theoretically scale-invariant. Does this theoretical property translate into practical robustness when the model is evaluated under pitch shifts?</p>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>Methodology:</strong> We evaluated retrieval performance under ±1 semitone pitch shifts applied to the audio signal at inference time, measuring performance retention across all top arms. The arm that best retains its score under transposition relative to its unshifted baseline is the most invariant.</p>
                                <h4 className={classes.blockTitle}>Findings</h4>
                                <ul className={classes.findingsList}>
                                    <li>A4-based mechanisms retain substantially more performance under pitch shifts than D0.</li>
                                    <li>a4r shows the strongest invariance profile — maintaining retrieval performance closest to its unshifted baseline under transposition.</li>
                                    <li>Concat-based A4 shows intermediate invariance, better than D0 but less stable than the reverse cross-attention variant.</li>
                                    <li>The invariance advantage is consistent across both +1 and −1 semitone directions.</li>
                                </ul>
                                <p><strong>Interpretation:</strong> This is consistent with the HIT hypothesis: ratio descriptors encode relationships between frequency components rather than absolute frequency coordinates. Under transposition, the ratio structure is preserved — only the absolute values shift. A model trained with ratio descriptors has learned representations that are less sensitive to the absolute frequency axis.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard src="/assets/evidence/gate5b/test04_transposition/chart07_transposition_curves.png" alt="Transposition curves" caption="Performance retention under ±1 semitone pitch shifts by arm." />
                            </div>
                        </div>
                        <div className={classes.metricsRow}>
                            <MetricCard title="Most invariant" value="a4r" status="closed" sourceLabel="best retention under ±1 semitone" />
                            <MetricCard title="D0 retention" value="lower" status="closed" sourceLabel="baseline — no ratio invariance" />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion:</strong> A4-based ratio descriptors confer measurable pitch invariance to the model. a4r is the most invariant arm, supporting the interpretation that the reverse cross-attention injection mechanism best exploits the scale-invariant property of ratio descriptors.
                        </div>
                    </article>

                    {/* ═══════════════ Test 06 ═══════════════ */}
                    <article className={classes.testArticle} id="test-06">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 06</span>
                            <h3>RSA / CKA Alignment — Do the Encoders Become More Alike Internally?</h3>
                        </div>
                        <div className={classes.questionBlock}>
                            <span className={classes.questionLabel}>Research question</span>
                            <p className={classes.question}>Improved retrieval scores could reflect surface-level output optimization without genuine representational change. Do ratio descriptors reshape the internal geometry of the encoder representations?</p>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>Methodology:</strong> Centered Kernel Alignment (CKA) — a geometry-sensitive metric that measures how similarly two neural networks represent the same set of inputs. We measured CKA between audio encoder layers and MIDI encoder layers for each arm, at multiple layer depths, comparing against D0. CKA ranges from 0 (completely dissimilar representations) to 1 (identical representations).</p>
                                <h4 className={classes.blockTitle}>Findings</h4>
                                <ul className={classes.findingsList}>
                                    <li>D0 scores 0.435 CKA between audio and MIDI encoders.</li>
                                    <li>d4a4 reaches 0.659 — a +51% CKA gain relative to D0.</li>
                                    <li>a4r reaches 0.766 — a +76% CKA gain.</li>
                                    <li>d4-a4r reaches 0.794 — an +82% CKA gain, the highest internal alignment measured.</li>
                                    <li>The CKA gain magnitude is much larger than the output-score gain alone would suggest — internal reorganization is deeper than output calibration.</li>
                                </ul>
                                <p><strong>Interpretation:</strong> Ratio descriptors do not simply shift output retrieval scores — they restructure how each encoder internally represents audio and MIDI. When the encoders represent the same inputs more similarly (higher CKA), cross-modal retrieval becomes structurally easier. d4-a4r achieves the highest internal alignment despite not being the top retrieval arm — indicating that internal alignment and retrieval performance are related but not identical.</p>
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
                        <div className={classes.splitGrid}>
                            <div className={classes.metricsGrid2x2}>
                                <MetricCard title="D0 CKA" value="0.435" status="closed" sourceLabel="baseline — reference" />
                                <MetricCard title="d4a4 CKA" value="0.659" status="closed" sourceLabel="+51% vs baseline" />
                                <MetricCard title="a4r CKA" value="0.766" status="closed" sourceLabel="+76% vs baseline" />
                                <MetricCard title="d4-a4r CKA" value="0.794" status="closed" sourceLabel="+82% — highest" />
                            </div>
                            <div>
                                <FigureCard src="/assets/evidence/gate5b/test06_rsa_cka/chart10_cka_crossencoder_bar.png" alt="CKA bars" caption="Cross-encoder mean CKA by arm." unmasked />
                            </div>
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion:</strong> Ratio descriptors produce substantial internal representational alignment between audio and MIDI encoders — up to +82% CKA gain vs baseline. The encoders literally represent inputs more similarly when trained with ratio descriptors. The gain is structural, not superficial.
                        </div>
                    </article>

                    {/* ═══════════════ Test 08 ═══════════════ */}
                    <article className={classes.testArticle} id="test-08">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 08</span>
                            <h3>Descriptor Sensitivity — Which Frequency Bands Drive the Effect?</h3>
                        </div>
                        <div className={classes.questionBlock}>
                            <span className={classes.questionLabel}>Research question</span>
                            <p className={classes.question}>The A4 descriptor is a multi-band representation. Not all frequency bands necessarily contribute equally. Which spectral regions carry the ratio information that drives cross-modal alignment?</p>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>Methodology:</strong> Sensitivity analysis — systematically masking individual frequency bands in the A4 descriptor at inference time and measuring the resulting performance delta. Per-arm and per-band sensitivity profiles were computed and compared across all top A4-based arms.</p>
                                <h4 className={classes.blockTitle}>Findings</h4>
                                <ul className={classes.findingsList}>
                                    <li>The highest sensitivity is concentrated in high-frequency octave bands — specifically the 750Hz+ region.</li>
                                    <li>Mechanism choice shifts which specific bands dominate: concat (A4) shows stronger concentration in the 750Hz–1.5kHz range, while reverse cross-attention (a4r) shows a broader distribution across bands.</li>
                                    <li>Low-frequency bands (below 250Hz) contribute minimally to the sensitivity profile across all arms.</li>
                                    <li>The 1.5kHz–3kHz region shows secondary sensitivity peaks, particularly for a4r.</li>
                                </ul>
                                <p><strong>Interpretation:</strong> The effect is not frequency-agnostic. Upper partials and harmonics above 750Hz carry the ratio information that the model finds most useful for alignment. This is consistent with psychoacoustic findings: pitch perception and interval discrimination rely heavily on the harmonic series above the fundamental. The mechanism-dependent spectral profiles suggest that concat and reverse cross-attention interact differently with which bands they are able to leverage.</p>
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
                        <div className={classes.splitGrid}>
                            <div className={classes.metricsGrid2x2}>
                                <MetricCard title="Primary region" value="750Hz+" status="closed" sourceLabel="highest sensitivity band" />
                                <MetricCard title="a4r profile" value="broad" status="closed" sourceLabel="multi-band distribution" />
                            </div>
                            <div>
                                <FigureCard src="/assets/evidence/gate5b/test08_ratio_decoding/chart11_sensitivity_bars.png" alt="Sensitivity bars" caption="Per-band sensitivity bars by arm." unmasked />
                            </div>
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion:</strong> The 750Hz+ spectral region is the primary driver of descriptor sensitivity. Upper harmonics, not fundamentals, carry the cross-modal alignment signal. This finding provides concrete guidance for future descriptor design targeting the most information-rich frequency regions.
                        </div>
                    </article>

                    {/* ═══════════════ Test 03 ═══════════════ */}
                    <article className={classes.testArticle} id="test-03">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 03</span>
                            <h3>Probe Layer Analysis — Is the Gain Linear or Geometric?</h3>
                        </div>
                        <div className={classes.questionBlock}>
                            <span className={classes.questionLabel}>Research question</span>
                            <p className={classes.question}>If the ratio-descriptor gain were linear — i.e., the descriptors simply add linearly-decodable features — a linear probe should show consistent improvement. Does linear probing capture the advantage seen in retrieval?</p>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>Methodology:</strong> Linear probe decoding — training a linear classifier on top of frozen encoder representations to predict musical properties. We measured cross-decoding R² (predicting audio features from MIDI representations and vice versa) vs self-decoding R² for each arm. If the gain is linear, cross-decoding R² should consistently improve in augmented arms.</p>
                                <h4 className={classes.blockTitle}>Findings</h4>
                                <ul className={classes.findingsList}>
                                    <li>Linear probe decoding does not produce a simple "augmented always better" pattern.</li>
                                    <li>Cross-decoding R² does not consistently increase for augmented arms relative to D0.</li>
                                    <li>The retrieval advantage is not recoverable by linear probing — the gain operates at a level below linear decodability.</li>
                                    <li>Self-decoding R² shows more consistent patterns than cross-decoding, confirming that the changes are cross-modal and geometric rather than single-encoder linear.</li>
                                </ul>
                                <p><strong>Interpretation:</strong> The improvement from ratio descriptors is not a matter of making features more linearly separable. It operates at the level of representational geometry — the arrangement of embeddings in the shared space — rather than through linear feature augmentation. This is consistent with the CKA results from Test 06, which show that the benefit is a reorganization of the manifold structure itself.</p>
                            </div>
                            <div className={classes.testNarrativeMedia}>
                                <FigureCard src="/assets/evidence/gate5b/test03_ratio_probe/chart13_probe_r2.png" alt="Probe R2" caption="Cross-decoding vs self-decoding R². No simple linear advantage for augmented arms." />
                            </div>
                        </div>
                        <div className={classes.metricsRow}>
                            <MetricCard title="Linear probe" value="no gain" status="closed" sourceLabel="consistent augmented > D0 not found" />
                            <MetricCard title="Gain type" value="geometric" status="closed" sourceLabel="manifold-level reorganization" />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion:</strong> The ratio-descriptor gain mechanism is geometric, not linear. It does not reduce to adding linearly-decodable features. The improvement operates through representational reorganization at the manifold level, which is why it is captured by CKA (Test 06) but not by linear probing.
                        </div>
                    </article>

                    {/* ═══════════════ Test 10 ═══════════════ */}
                    <article className={classes.testArticle} id="test-10">
                        <div className={classes.testArticleHeader}>
                            <span className={classes.testCode}>Test 10</span>
                            <h3>Embedding Geometry — What Does the Representation Manifold Look Like?</h3>
                        </div>
                        <div className={classes.questionBlock}>
                            <span className={classes.questionLabel}>Research question</span>
                            <p className={classes.question}>If ratio descriptors genuinely reorganize internal representations, this should be visible in the geometry of the embedding space. How does the manifold structure change between D0 and augmented arms?</p>
                        </div>
                        <div className={classes.testNarrative}>
                            <div className={classes.testNarrativeText}>
                                <p><strong>Methodology:</strong> 2D dimensionality reduction (t-SNE and UMAP) on audio and MIDI embeddings for D0, d4a4, a4r, and d4-a4r. We measured cosine distance distributions between matched pairs (same audio-MIDI content) and random pairs for each arm, and computed the gap between distributions as a measure of embedding alignment.</p>
                                <h4 className={classes.blockTitle}>Findings</h4>
                                <ul className={classes.findingsList}>
                                    <li>Augmented arms show tighter matched-pair cosine gaps — audio and MIDI embeddings for the same piece are closer together in the augmented models.</li>
                                    <li>Random pair separation is wider in augmented arms — the model better distinguishes unrelated content.</li>
                                    <li>t-SNE and UMAP visualizations show more coherent, compact clusters in augmented arms compared to D0's more diffuse, intermixed distribution.</li>
                                    <li>Individual arm UMAP detail views reveal that d4-a4r produces the most geometrically organized embedding space, consistent with its highest CKA score.</li>
                                </ul>
                                <p><strong>Interpretation:</strong> The geometric improvement is the direct visual and structural manifestation of what CKA measures as alignment gain. Audio and MIDI embeddings for the same musical content literally occupy closer positions in the shared embedding space. The tighter geometry means retrieval is structurally easier — the correct match is geometrically closer to the query.</p>
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
                        <div className={classes.embeddedGallery}>
                            <ImageGallery
                                images={[
                                    { src: '/assets/evidence/gate5b/test10_visualizations/alignment_cosine_distribution.png', alt: 'Cosine distribution', caption: 'Matched vs random cosine distance gap.', unmasked: true },
                                    { src: '/assets/evidence/gate5b/test10_visualizations/comparison_tsne.png', alt: 't-SNE comparison', caption: 't-SNE comparison across 4 arms.', unmasked: true, scaled: true },
                                    { src: '/assets/evidence/gate5b/test10_visualizations/comparison_umap.png', alt: 'UMAP comparison', caption: 'UMAP comparison across 4 arms.', unmasked: true, scaled: true },
                                    { src: '/assets/evidence/gate5b/test10_visualizations/a4r_umap_detail.png', alt: 'a4r UMAP', caption: 'a4r — strong geometric alignment.', unmasked: true, scaled: true },
                                    { src: '/assets/evidence/gate5b/test10_visualizations/d4-a4r_umap_detail.png', alt: 'd4-a4r UMAP', caption: 'd4-a4r — best internal CKA.', unmasked: true, scaled: true },
                                    { src: '/assets/evidence/gate5b/test10_visualizations/d4a4_umap_detail.png', alt: 'd4a4 UMAP', caption: 'd4a4 — tighter cross-modal clusters.', unmasked: true, scaled: true },
                                    { src: '/assets/evidence/gate5b/test10_visualizations/D0_umap_detail.png', alt: 'D0 UMAP', caption: 'D0 — baseline geometry.', unmasked: true, scaled: true }
                                ]}
                            />
                        </div>
                        <div className={classes.metricsRow}>
                            <MetricCard title="Matched cosine gap" value="tighter" status="closed" sourceLabel="augmented vs D0" />
                            <MetricCard title="Cluster coherence" value="improved" status="closed" sourceLabel="UMAP / t-SNE evidence" />
                        </div>
                        <div className={classes.testConclusion}>
                            <strong>Conclusion:</strong> The embedding geometry of augmented arms is measurably tighter and more coherent than baseline. Audio and MIDI embeddings for the same content cluster more closely. This geometric improvement is the direct structural manifestation of what CKA measures as alignment gain.
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
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── 5. DESCRIPTOR TABLE ── */}
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



            </div>
        </Layout>
    );
}
