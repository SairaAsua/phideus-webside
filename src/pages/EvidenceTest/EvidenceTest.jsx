import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import MetricCard from '../../components/evidence/MetricCard';
import FigureCard from '../../components/visuals/FigureCard';
import classes from './EvidenceTest.module.css';

const TEST_ORDER = ['test-12', 'test-01', 'test-04', 'test-06', 'test-08', 'test-03', 'test-10'];

const TESTS = {
    'test-12': {
        code: 'Test 12',
        layer: 'Performance Layer',
        title: 'Performance Scoreboard — Comparative Benchmark',
        question: 'Under the canonical BIAS_CONTROL protocol, how much do ratio descriptors improve cross-modal retrieval compared to the no-descriptor baseline?',
        methodology: 'We ran all 24 descriptor/mechanism combinations under the BIAS_CONTROL fixed protocol: foundation checkpoint locked at epoch 25, pool of 256 items, 500 queries, seed 42. The primary metric is S = min(A2M R@10, M2A R@10) — the symmetric minimum of bidirectional Recall@10. All results are compared against D0, the baseline encoder with no descriptor injection.',
        findings: [
            'The d4a4 combination (MIDI interval descriptor D4 + audio log-frequency descriptor A4, concatenation mechanism) achieves S=83.8% vs D0\'s S=73.4% — a net gain of +10.4 pp.',
            'The reverse cross-attention variant a4r reaches S=82.0%, showing that mechanism choice alone (same descriptor, different injection path) accounts for large performance differences.',
            'The dual combination d4-a4r (D4 concat + A4 reverse cross-attention) achieves S=79.8% — still +6.4 pp above baseline.',
            'Hard-negative discrimination (same piece, different time segment) reaches 91.6% for top arms vs 90.0% for baseline.',
            'Several arms underperform baseline: t3-anc drops by −18pp, demonstrating that not all ratio representations or injection schemes are beneficial.',
        ],
        interpretation: 'The +10.4pp gain is large, reproducible, and consistent across multiple metrics (Recall@K, MRR, mean rank, hard-negative accuracy). It is not a cherry-picked outlier — the top-4 arms all exceed baseline by substantial margins under the same protocol. The spread from −18pp to +10.4pp across 24 arms shows that descriptor family and injection mechanism are both decisive. Naive descriptor injection can harm performance.',
        conclusion: 'Ratio descriptor injection produces consistent, large-scale improvement in cross-modal retrieval. The effect is robust across multiple metrics and reproducible under the canonical protocol. This answers the primary performance question affirmatively.',
        metrics: [
            { title: 'D0 (baseline)', value: '73.4%', status: 'closed', sourceLabel: 'No descriptor — reference' },
            { title: 'd4a4', value: '83.8%', status: 'closed', sourceLabel: '+10.4 pp · best arm' },
            { title: 'a4r', value: '82.0%', status: 'closed', sourceLabel: '+8.6 pp · most invariant' },
            { title: 'd4-a4r', value: '79.8%', status: 'closed', sourceLabel: '+6.4 pp · best CKA arm' },
        ],
        anim: {
            src: '/assets/evidence/gate5b/animations/anim5_sidebyside_D0_vs_d4a4.gif',
            alt: 'D0 vs d4a4 embedding evolution',
            caption: 'D0 (left) vs d4a4 (right). The augmented model shows tighter, more coherent cross-modal pairing as training progresses.',
        },
        charts: [
            { src: '/assets/evidence/gate5b/test12_scoreboard/chart01_scoreboard_S.png', alt: 'S scoreboard', caption: 'Canonical S score by arm. D0 is the reference. The 24-arm sweep reveals the full distribution.' },
            { src: '/assets/evidence/gate5b/test12_scoreboard/chart02_recall_spectrum.png', alt: 'Recall spectrum', caption: 'Recall@K curves for both retrieval directions across top arms.' },
            { src: '/assets/evidence/gate5b/test12_scoreboard/chart03_mrr_meanrank.png', alt: 'MRR and mean rank', caption: 'Mean Reciprocal Rank and mean rank profile — consistent advantage for top arms.' },
            { src: '/assets/evidence/gate5b/test12_scoreboard/chart04_hard_negatives.png', alt: 'Hard negatives', caption: 'Hard-negative discrimination: same piece, different time. Augmented arms show improved discrimination.' },
        ],
        related: ['test-01', 'test-06', 'test-10'],
    },

    'test-01': {
        code: 'Test 01',
        layer: 'Causal Layer',
        title: 'Causal Ablation — Where Does the Gain Actually Come From?',
        question: 'Is the performance gain causally attributable to the ratio descriptors, or could it be an artifact of the training setup, extra parameters, or regularization effects?',
        methodology: 'Systematic ablation — we zeroed out either the audio descriptor path or the MIDI descriptor path for each top-performing arm, measured the resulting performance drop (delta vs normal operation), and compared against normal performance. Zeroing was done at inference time by setting descriptor vectors to zero.',
        findings: [
            'Zeroing the audio descriptor (A4/a4r path) causes catastrophic degradation: −76.0pp for d4a4, −77.6pp for a4r, −75.4pp for d4-a4r.',
            'Zeroing the MIDI descriptor (D4 path) has near-zero effect: −0.6pp for d4a4, +0.4pp for d4-a4r (within noise). The MIDI descriptor is not the operative causal mechanism.',
            'Injecting D4 into the MIDI encoder only — without any audio descriptor — still improves audio-side retrieval by +2.6pp. This is the gradient backpropagation effect.',
            'The asymmetry is consistent and strong across all tested arms. Audio path contribution > MIDI path contribution by a factor of ~100× in delta magnitude.',
        ],
        interpretation: 'The near-total collapse on zeroing the audio path, combined with the negligible effect of zeroing the MIDI path, constitutes direct causal evidence: the gain requires audio ratio information specifically. The VICReg joint objective explains the +2.6pp transfer: improving the "relational quality" of MIDI representations forces the audio encoder to reorganize its latent space to align — the encoders share gradient pressure, not independent optimization.',
        conclusion: 'The performance gain is causally attributable to the audio ratio descriptor path (A4/a4r). This rules out explanations based on extra capacity, regularization, or training dynamics alone. The ratio information from the audio signal is the operative mechanism.',
        metrics: [
            { title: 'd4a4 · zero_audio', value: '−76.0 pp', status: 'closed', sourceLabel: 'large collapse — causal proof' },
            { title: 'a4r · zero_audio', value: '−77.6 pp', status: 'closed', sourceLabel: 'large collapse — causal proof' },
            { title: 'd4a4 · zero_midi', value: '−0.6 pp', status: 'closed', sourceLabel: 'near zero — not causal' },
        ],
        anim: {
            src: '/assets/evidence/gate5b/animations/anim2_bridges_crossmodal.gif',
            alt: 'Cross-modal bridges forming',
            caption: 'Bridge formation between audio and MIDI representations over training. The audio ratio path drives the alignment.',
        },
        charts: [
            { src: '/assets/evidence/gate5b/test01_causal_ablation/chart05_ablation_heatmap.png', alt: 'Ablation heatmap', caption: 'Full delta matrix by arm and ablation type. Red = large degradation on zeroing.' },
            { src: '/assets/evidence/gate5b/test01_causal_ablation/chart06_audio_vs_midi_causal.png', alt: 'Audio vs MIDI causal', caption: 'Audio path vs MIDI path causal contribution. The asymmetry is stark and consistent.' },
        ],
        related: ['test-12', 'test-08', 'test-06'],
    },

    'test-04': {
        code: 'Test 04',
        layer: 'Robustness Layer',
        title: 'Pitch Shift Invariance — Does Ratio Structure Generalize Under Transposition?',
        question: 'Ratio representations are theoretically scale-invariant. Does this theoretical property translate into practical robustness when the model is evaluated under pitch shifts?',
        methodology: 'We evaluated retrieval performance under ±1 semitone pitch shifts applied to the audio signal at inference time, measuring performance retention across all top arms. The arm that best retains its score under transposition relative to its unshifted baseline is the most invariant.',
        findings: [
            'A4-based mechanisms retain substantially more performance under pitch shifts than D0.',
            'a4r shows the strongest invariance profile — maintaining retrieval performance closest to its unshifted baseline under transposition.',
            'Concat-based A4 shows intermediate invariance, better than D0 but less stable than the reverse cross-attention variant.',
            'The invariance advantage is consistent across both +1 and −1 semitone directions.',
        ],
        interpretation: 'This is consistent with the HIT hypothesis: ratio descriptors encode relationships between frequency components rather than absolute frequency coordinates. Under transposition, the ratio structure is preserved — only the absolute values shift. A model trained with ratio descriptors has learned representations that are less sensitive to the absolute frequency axis. This robustness property matters practically: real-world audio often involves pitch variation across recordings of the same musical content.',
        conclusion: 'A4-based ratio descriptors confer measurable pitch invariance to the model. a4r is the most invariant arm, supporting the interpretation that the reverse cross-attention injection mechanism best exploits the scale-invariant property of ratio descriptors.',
        metrics: [
            { title: 'Most invariant', value: 'a4r', status: 'closed', sourceLabel: 'best retention under ±1 semitone' },
            { title: 'D0 retention', value: 'lower', status: 'closed', sourceLabel: 'baseline — no ratio invariance' },
        ],
        anim: {
            src: '/assets/evidence/gate5b/animations/anim1_morphing_evolution.gif',
            alt: 'Embedding evolution under descriptor mechanisms',
            caption: 'Descriptor-driven embedding evolution. Ratio-guided models organize the manifold around relational structure rather than absolute frequency coordinates.',
        },
        charts: [
            { src: '/assets/evidence/gate5b/test04_transposition/chart07_transposition_curves.png', alt: 'Transposition curves', caption: 'Performance retention under ±1 semitone pitch shifts by arm. a4r shows the strongest invariance profile.' },
        ],
        related: ['test-12', 'test-08', 'test-01'],
    },

    'test-06': {
        code: 'Test 06',
        layer: 'Internal Alignment Layer',
        title: 'RSA / CKA Alignment — Do the Encoders Become More Alike Internally?',
        question: 'Improved retrieval scores could reflect surface-level output optimization without genuine representational change. Do ratio descriptors reshape the internal geometry of the encoder representations?',
        methodology: 'Centered Kernel Alignment (CKA) — a geometry-sensitive metric that measures how similarly two neural networks represent the same set of inputs. We measured CKA between audio encoder layers and MIDI encoder layers for each arm, at multiple layer depths, comparing against D0. CKA ranges from 0 (completely dissimilar representations) to 1 (identical representations).',
        findings: [
            'D0 scores 0.435 CKA between audio and MIDI encoders.',
            'd4a4 reaches 0.659 — a +51% CKA gain relative to D0.',
            'a4r reaches 0.766 — a +76% CKA gain.',
            'd4-a4r reaches 0.794 — an +82% CKA gain, the highest internal alignment measured.',
            'The CKA gain magnitude is much larger than the output-score gain alone would suggest — internal reorganization is deeper than output calibration.',
        ],
        interpretation: 'Ratio descriptors do not simply shift output retrieval scores — they restructure how each encoder internally represents audio and MIDI. When the encoders represent the same inputs more similarly (higher CKA), cross-modal retrieval becomes structurally easier because embeddings from matched pairs are geometrically closer. This finding suggests the gain mechanism is deep (representational reorganization) rather than shallow. d4-a4r achieves the highest internal alignment despite not being the top retrieval arm — indicating that internal alignment and retrieval performance are related but not identical.',
        conclusion: 'Ratio descriptors produce substantial internal representational alignment between audio and MIDI encoders — up to +82% CKA gain vs baseline. The encoders literally represent inputs more similarly when trained with ratio descriptors. The gain is structural, not superficial.',
        metrics: [
            { title: 'D0 CKA', value: '0.435', status: 'closed', sourceLabel: 'baseline — reference' },
            { title: 'd4a4 CKA', value: '0.659', status: 'closed', sourceLabel: '+51% vs baseline' },
            { title: 'a4r CKA', value: '0.766', status: 'closed', sourceLabel: '+76% vs baseline' },
            { title: 'd4-a4r CKA', value: '0.794', status: 'closed', sourceLabel: '+82% — highest internal alignment' },
        ],
        anim: {
            src: '/assets/evidence/gate5b/animations/anim3_cka_pulse.gif',
            alt: 'CKA pulse animation',
            caption: 'Layer-level CKA coupling dynamics across encoder depth. Each pulse represents a layer synchronization event as descriptors reshape the representation.',
        },
        charts: [
            { src: '/assets/evidence/gate5b/test06_rsa_cka/chart09_cka_heatmaps_4models.png', alt: 'CKA heatmaps', caption: 'Layer × layer CKA heatmaps for 4 models. Warmer colors = higher alignment. Augmented arms show coherent high-alignment regions.' },
            { src: '/assets/evidence/gate5b/test06_rsa_cka/chart10_cka_crossencoder_bar.png', alt: 'CKA bars', caption: 'Cross-encoder mean CKA by arm. D0 to d4-a4r shows a monotonic increase in internal alignment.' },
        ],
        related: ['test-12', 'test-10', 'test-03'],
    },

    'test-08': {
        code: 'Test 08',
        layer: 'Spectral Sensitivity Layer',
        title: 'Descriptor Sensitivity — Which Frequency Bands Drive the Effect?',
        question: 'The A4 descriptor is a multi-band representation. Not all frequency bands necessarily contribute equally. Which spectral regions carry the ratio information that drives cross-modal alignment?',
        methodology: 'Sensitivity analysis — systematically masking individual frequency bands in the A4 descriptor at inference time and measuring the resulting performance delta. Per-arm and per-band sensitivity profiles were computed and compared across all top A4-based arms.',
        findings: [
            'The highest sensitivity is concentrated in high-frequency octave bands — specifically the 750Hz+ region.',
            'Mechanism choice shifts which specific bands dominate: concat (A4) shows stronger concentration in the 750Hz–1.5kHz range, while reverse cross-attention (a4r) shows a broader distribution across bands.',
            'Low-frequency bands (below 250Hz) contribute minimally to the sensitivity profile across all arms.',
            'The 1.5kHz–3kHz region shows secondary sensitivity peaks, particularly for a4r.',
        ],
        interpretation: 'The effect is not frequency-agnostic. Upper partials and harmonics above 750Hz carry the ratio information that the model finds most useful for alignment. This is consistent with psychoacoustic findings: pitch perception and interval discrimination rely heavily on the harmonic series above the fundamental. The fundamental itself carries less interval information than its overtones. The mechanism-dependent spectral profiles suggest that concat and reverse cross-attention interact differently with which bands they are able to leverage — a guide for future descriptor design.',
        conclusion: 'The 750Hz+ spectral region is the primary driver of descriptor sensitivity. Upper harmonics, not fundamentals, carry the cross-modal alignment signal. This finding provides concrete guidance for future descriptor design targeting the most information-rich frequency regions.',
        metrics: [
            { title: 'Primary region', value: '750Hz+', status: 'closed', sourceLabel: 'highest sensitivity band' },
            { title: 'a4r profile', value: 'broad', status: 'closed', sourceLabel: 'multi-band distribution' },
        ],
        anim: {
            src: '/assets/evidence/gate5b/animations/anim6_sensitivity_radar.gif',
            alt: 'Sensitivity radar animation',
            caption: 'A4 band contribution dynamics across arms. The radar sweeps through all frequency bands, showing relative contribution to performance.',
        },
        charts: [
            { src: '/assets/evidence/gate5b/test08_ratio_decoding/chart11_sensitivity_bars.png', alt: 'Sensitivity bars', caption: 'Per-band sensitivity bars by arm. The 750Hz+ range shows the highest and most consistent contribution.' },
            { src: '/assets/evidence/gate5b/test08_ratio_decoding/chart12_sensitivity_radar.png', alt: 'Sensitivity radar', caption: 'Per-arm sensitivity profile (radar view). Mechanism choice shapes which bands are most leveraged.' },
        ],
        related: ['test-01', 'test-04', 'test-12'],
    },

    'test-03': {
        code: 'Test 03',
        layer: 'Mechanism Layer',
        title: 'Probe Layer Analysis — Is the Gain Linear or Geometric?',
        question: 'If the ratio-descriptor gain were linear — i.e., the descriptors simply add linearly-decodable features — a linear probe should show consistent improvement. Does linear probing capture the advantage seen in retrieval?',
        methodology: 'Linear probe decoding — training a linear classifier on top of frozen encoder representations to predict musical properties. We measured cross-decoding R² (predicting audio features from MIDI representations and vice versa) vs self-decoding R² for each arm. If the gain is linear, cross-decoding R² should consistently improve in augmented arms.',
        findings: [
            'Linear probe decoding does not produce a simple "augmented always better" pattern.',
            'Cross-decoding R² does not consistently increase for augmented arms relative to D0.',
            'The retrieval advantage is not recoverable by linear probing — the gain operates at a level below linear decodability.',
            'Self-decoding R² shows more consistent patterns than cross-decoding, confirming that the changes are cross-modal and geometric rather than single-encoder linear.',
        ],
        interpretation: 'The improvement from ratio descriptors is not a matter of making features more linearly separable. It operates at the level of representational geometry — the arrangement of embeddings in the shared space — rather than through linear feature augmentation. This is consistent with the CKA results from Test 06, which show that the benefit is a reorganization of the manifold structure itself. A geometric effect requires retrieval metrics to detect it; linear probing is the wrong tool for this type of change.',
        conclusion: 'The ratio-descriptor gain mechanism is geometric, not linear. It does not reduce to adding linearly-decodable features. The improvement operates through representational reorganization at the manifold level. This understanding guides future work toward geometry-aware analysis tools.',
        metrics: [
            { title: 'Linear probe', value: 'no gain', status: 'closed', sourceLabel: 'consistent augmented > D0 not found' },
            { title: 'Gain type', value: 'geometric', status: 'closed', sourceLabel: 'manifold-level reorganization' },
        ],
        anim: null,
        charts: [
            { src: '/assets/evidence/gate5b/test03_ratio_probe/chart13_probe_r2.png', alt: 'Probe R2', caption: 'Cross-decoding vs self-decoding R². No consistent linear advantage for augmented arms — the gain is geometric.' },
        ],
        related: ['test-06', 'test-10', 'test-12'],
    },

    'test-10': {
        code: 'Test 10',
        layer: 'Geometry Layer',
        title: 'Embedding Geometry — What Does the Representation Manifold Look Like?',
        question: 'If ratio descriptors genuinely reorganize internal representations, this should be visible in the geometry of the embedding space. How does the manifold structure change between D0 and augmented arms?',
        methodology: '2D dimensionality reduction (t-SNE and UMAP) on audio and MIDI embeddings for D0, d4a4, a4r, and d4-a4r. We measured cosine distance distributions between matched pairs (same audio-MIDI content) and random pairs for each arm, and computed the gap between distributions as a measure of embedding alignment.',
        findings: [
            'Augmented arms show tighter matched-pair cosine gaps — audio and MIDI embeddings for the same piece are closer together in the augmented models.',
            'Random pair separation is wider in augmented arms — the model better distinguishes unrelated content.',
            't-SNE and UMAP visualizations show more coherent, compact clusters in augmented arms compared to D0\'s more diffuse, intermixed distribution.',
            'Individual arm UMAP detail views reveal that d4-a4r produces the most geometrically organized embedding space, consistent with its highest CKA score.',
        ],
        interpretation: 'The geometric improvement is the direct visual and structural manifestation of what CKA measures as alignment gain. Audio and MIDI embeddings for the same musical content literally occupy closer positions in the shared embedding space. The tighter geometry means retrieval is structurally easier — the correct match is geometrically closer to the query. These visualizations provide an intuitive complement to the quantitative CKA and retrieval metrics from Tests 06 and 12.',
        conclusion: 'The embedding geometry of augmented arms is measurably tighter and more coherent than baseline. Audio and MIDI embeddings for the same content cluster more closely. This geometric improvement is the direct structural manifestation of what CKA measures as alignment gain.',
        metrics: [
            { title: 'Matched cosine gap', value: 'tighter', status: 'closed', sourceLabel: 'augmented vs D0' },
            { title: 'Cluster coherence', value: 'improved', status: 'closed', sourceLabel: 'UMAP / t-SNE evidence' },
        ],
        anim: {
            src: '/assets/evidence/gate5b/animations/anim4_rotation_3d.gif',
            alt: '3D manifold rotation',
            caption: '3D embedding manifold rotating. The geometric structure of the shared cross-modal space becomes visible across arms.',
        },
        charts3: [
            { src: '/assets/evidence/gate5b/test10_visualizations/comparison_tsne.png', alt: 't-SNE comparison', caption: 't-SNE comparison across 4 arms. Augmented arms show tighter same-content clusters.' },
            { src: '/assets/evidence/gate5b/test10_visualizations/comparison_umap.png', alt: 'UMAP comparison', caption: 'UMAP comparison across 4 arms. d4a4 and a4r show the most coherent cross-modal geometry.' },
            { src: '/assets/evidence/gate5b/test10_visualizations/alignment_cosine_distribution.png', alt: 'Cosine distribution', caption: 'Matched vs random cosine distance gap. Augmented arms show larger gaps — better discrimination.' },
        ],
        charts4: [
            { src: '/assets/evidence/gate5b/test10_visualizations/D0_umap_detail.png', alt: 'D0 UMAP', caption: 'D0 — baseline geometry. Diffuse, intermixed audio and MIDI clusters.' },
            { src: '/assets/evidence/gate5b/test10_visualizations/d4a4_umap_detail.png', alt: 'd4a4 UMAP', caption: 'd4a4 — tighter cross-modal clusters.' },
            { src: '/assets/evidence/gate5b/test10_visualizations/a4r_umap_detail.png', alt: 'a4r UMAP', caption: 'a4r — strong geometric alignment, most invariant arm.' },
            { src: '/assets/evidence/gate5b/test10_visualizations/d4-a4r_umap_detail.png', alt: 'd4-a4r UMAP', caption: 'd4-a4r — best internal CKA, most organized geometry.' },
        ],
        related: ['test-06', 'test-12', 'test-03'],
    },
};

export default function EvidenceTest() {
    const { testId } = useParams();
    const test = useMemo(() => TESTS[testId], [testId]);
    const currentIndex = TEST_ORDER.indexOf(testId);
    const prevId = currentIndex > 0 ? TEST_ORDER[currentIndex - 1] : null;
    const nextId = currentIndex < TEST_ORDER.length - 1 ? TEST_ORDER[currentIndex + 1] : null;

    if (!test) {
        return (
            <Layout>
                <div className={`container ${classes.page}`}>
                    <h1>Test not found</h1>
                    <Link to="/evidence" className={classes.backLink}>← Back to Evidence</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className={`container ${classes.page}`}>

                {/* ── Breadcrumb ── */}
                <nav className={classes.breadcrumb}>
                    <Link to="/evidence" className={classes.backLink}>← Evidence</Link>
                    <span className={classes.breadcrumbSep}>/</span>
                    <span>{test.code}</span>
                </nav>

                {/* ── Header ── */}
                <header className={classes.header}>
                    <div className={classes.headerMeta}>
                        <span className={classes.code}>{test.code}</span>
                        <span className={classes.layer}>{test.layer}</span>
                    </div>
                    <h1 className={classes.title}>{test.title}</h1>
                    <div className={classes.questionBlock}>
                        <span className={classes.questionLabel}>Research question</span>
                        <p className={classes.question}>{test.question}</p>
                    </div>
                </header>

                {/* ── Main Narrative ── */}
                <div className={`${classes.narrativeGrid} ${!test.anim ? classes.narrativeSingle : ''}`}>
                    <div className={classes.narrativeText}>

                        <div className={classes.narrativeBlock}>
                            <h3 className={classes.blockTitle}>Methodology</h3>
                            <p className={classes.blockText}>{test.methodology}</p>
                        </div>

                        <div className={classes.narrativeBlock}>
                            <h3 className={classes.blockTitle}>Findings</h3>
                            <ul className={classes.findingsList}>
                                {test.findings.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={classes.narrativeBlock}>
                            <h3 className={classes.blockTitle}>Interpretation</h3>
                            <p className={classes.blockText}>{test.interpretation}</p>
                        </div>

                    </div>

                    {test.anim && (
                        <div className={classes.narrativeMedia}>
                            <FigureCard
                                isAnim
                                src={test.anim.src}
                                alt={test.anim.alt}
                                caption={test.anim.caption}
                            />
                        </div>
                    )}
                </div>

                {/* ── Charts ── */}
                {test.charts3 && (
                    <div className={classes.chartsGrid3}>
                        {test.charts3.map((c) => (
                            <FigureCard key={c.src} src={c.src} alt={c.alt} caption={c.caption} />
                        ))}
                    </div>
                )}

                {test.charts4 && (
                    <div className={classes.chartsGrid4}>
                        {test.charts4.map((c) => (
                            <FigureCard key={c.src} src={c.src} alt={c.alt} caption={c.caption} />
                        ))}
                    </div>
                )}

                {test.charts && (
                    <div className={test.charts.length === 1 ? classes.chartSingle : test.charts.length === 2 ? classes.chartsGrid2 : classes.chartsGrid4}>
                        {test.charts.map((c) => (
                            <FigureCard key={c.src} src={c.src} alt={c.alt} caption={c.caption} />
                        ))}
                    </div>
                )}

                {/* ── Metrics ── */}
                {test.metrics && (
                    <div className={classes.metricsRow}>
                        {test.metrics.map((m) => (
                            <MetricCard key={m.title} title={m.title} value={m.value} status={m.status} sourceLabel={m.sourceLabel} />
                        ))}
                    </div>
                )}

                {/* ── Conclusion ── */}
                <div className={classes.conclusion}>
                    <span className={classes.conclusionLabel}>Conclusion</span>
                    <p>{test.conclusion}</p>
                </div>

                {/* ── Navigation ── */}
                <nav className={classes.testNav}>
                    <div className={classes.testNavLeft}>
                        {prevId && (
                            <Link to={`/evidence/${prevId}`} className={classes.testNavLink}>
                                <span className={classes.navDir}>← Previous</span>
                                <span className={classes.navLabel}>{TESTS[prevId].code} · {TESTS[prevId].layer}</span>
                            </Link>
                        )}
                    </div>
                    <div className={classes.testNavCenter}>
                        <Link to="/evidence" className={classes.allTestsLink}>All evidence layers</Link>
                    </div>
                    <div className={classes.testNavRight}>
                        {nextId && (
                            <Link to={`/evidence/${nextId}`} className={classes.testNavLink}>
                                <span className={classes.navDir}>Next →</span>
                                <span className={classes.navLabel}>{TESTS[nextId].code} · {TESTS[nextId].layer}</span>
                            </Link>
                        )}
                    </div>
                </nav>

                {/* ── Related ── */}
                {test.related && (
                    <div className={classes.relatedTests}>
                        <span className={classes.relatedLabel}>Related tests</span>
                        <div className={classes.relatedLinks}>
                            {test.related.map((id) => (
                                <Link key={id} to={`/evidence/${id}`} className={classes.relatedLink}>
                                    {TESTS[id].code} — {TESTS[id].layer}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <p className={classes.freshness}>Data as of 2026-02-25 · Gate 5B · Escalon 1</p>

            </div>
        </Layout>
    );
}
