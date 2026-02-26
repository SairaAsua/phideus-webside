import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import MetricCard from '../../components/evidence/MetricCard';
import classes from './Architecture.module.css';

const mechanisms = [
    {
        name: 'Concatenation (concat)',
        tag: 'concat',
        status: 'production',
        description: 'The descriptor vector is appended to the encoder input at the feature boundary. The simplest and most stable injection method. No added cross-attention parameters.',
        tradeoffs: 'Works well when descriptor dimensionality is low relative to the main feature sequence. Does not allow the descriptor to interact dynamically with encoder layers — it becomes a static prefix.',
        result: 'd4a4 (concat) = S=83.8% — best retrieval arm under BIAS_CONTROL. A4 (concat) = S=63.6%.',
        finding: 'The best absolute performance comes from concat, but only with the right descriptor combination. Mechanism selection matters as much as descriptor family.',
    },
    {
        name: 'Cross-Attention',
        tag: 'cross-att',
        status: 'screened',
        description: 'The descriptor tokens attend over encoder feature maps. Standard transformer cross-attention: O(n × m) where n = encoder sequence length, m = descriptor tokens.',
        tradeoffs: 'Computationally expensive for long sequences. Audio encoders with 2400 frames produce ~26× more operations than the descriptor-length reverse variant. Allows dynamic, layer-wise interaction.',
        result: 'Cross-att variants show good alignment but at higher compute cost. Screened across multiple arms in the 24-arm sweep.',
        finding: 'Dynamic interaction helps but the compute cost of standard cross-attention is prohibitive at scale. Motivated the development of reverse cross-attention.',
    },
    {
        name: 'Reverse Cross-Attention (a4r)',
        tag: 'reverse cross-att',
        status: 'production',
        description: 'The descriptor tokens become the query (Q) side; encoder feature maps become keys/values (K, V). The ratio descriptor interrogates the encoder rather than being interrogated. Result: ~163× fewer attention operations than standard cross-attention.',
        tradeoffs: 'Query space limited to descriptor token count (small), but covers the full encoder feature map. The descriptor actively selects what to attend to, not the other way around.',
        result: 'a4r = S=82.0% (+8.6pp over D0). Most invariant arm under ±1 semitone pitch shifts (Test 04). CKA = 0.766 (+76% vs D0).',
        finding: "Reverse cross-attention is ~163× more efficient than standard while achieving 98.5% of the best concat performance. The mechanism that best exploits the ratio descriptor's compact, relational structure.",
    },
    {
        name: 'Third Tower / FiLM / MoE',
        tag: 'third-tower · FiLM · MoE',
        status: 'historical',
        description: 'Three alternative injection patterns: third-tower adds a separate processing branch for descriptor-guided conditioning; FiLM scales and shifts encoder features based on descriptor embeddings; MoE routes different input regions to different descriptor-conditioned expert branches.',
        tradeoffs: 'Higher architectural complexity, more parameters, and less stable training. FiLM showed conditioning instability in early MAESTRO experiments. MoE variants require careful gating calibration.',
        result: 'Third-tower variants (t3-*) underperformed baseline: t3-anc achieved −18pp below D0. FiLM and MoE not included in final 24-arm BIAS_CONTROL set.',
        finding: 'Architectural complexity did not compensate for training instability. Simpler injection mechanisms outperformed complex conditioning architectures in the current benchmark.',
    },
];

const coreWalkthroughs = [
    {
        name: 'Main Index',
        tag: 'Core Architecture',
        url: 'https://altermundi.github.io/Phideus/',
        what: 'The canonical Phideus dual-encoder architecture: MERT audio encoder + MIDI transformer, dual projection heads to a shared embedding space, VICReg contrastive objective.',
        why: 'This is the foundation that all descriptor injection experiments build on. Understanding the base architecture is required to understand what "injection" means — where descriptors enter and how they interact with each encoder.',
        metric: 'S = min(A2M R@10, M2A R@10) — bidirectional balanced retrieval metric',
        result: 'D0 (no descriptor): S=73.4% — the reference baseline for all Gate 5B comparisons.',
    },
    {
        name: 'Cross-Attention Injection',
        tag: 'Mechanism Detail',
        url: 'https://altermundi.github.io/Phideus/crossatt',
        what: 'Detailed architectural diagram of both forward cross-attention and reverse cross-attention (a4r). Shows the query/key/value assignment and the sequence length analysis that explains the ~163× efficiency gain.',
        why: 'The reverse cross-attention innovation is the key architectural contribution of Gate 5B. This walkthrough shows exactly why inverting the Q/K assignment produces a more efficient and more effective injection path than standard cross-attention.',
        metric: 'a4r S=82.0% at 18.4pp above standard A4 (concat)',
        result: 'a4r is the most invariant arm under pitch shift (Test 04) and achieves +76% CKA gain (Test 06). The ~163× efficiency advantage makes it the preferred production architecture candidate.',
    },
    {
        name: 'MERT + MIDI Transformer',
        tag: 'Encoder Architecture',
        url: 'https://altermundi.github.io/Phideus/phideus',
        what: 'Detailed breakdown of the audio encoder (MERT — Music Encoder Representations from Transformers) and the MIDI transformer. Shows projection head design, embedding dimension matching, and descriptor entry points for D4 and A4.',
        why: "The d4a4 arm injects D4 into the MIDI transformer and A4 into the MERT audio encoder simultaneously. Understanding each encoder's architecture shows why A4 carries the dominant causal signal (Test 01): MERT operates on continuous audio features where ratio structure is hardest to extract — the descriptor compensates for this.",
        metric: 'd4a4 S=83.8% — best arm. +10.4pp over D0.',
        result: 'Causal ablation confirms audio encoder integration is decisive: zeroing A4 causes −76pp collapse, zeroing D4 causes −0.6pp. (Test 01)',
    },
    {
        name: 'Hybrid Adapter Fine-Tuning',
        tag: 'Training Architecture',
        url: 'https://altermundi.github.io/Phideus/bloquea',
        what: 'The freeze policy architecture. Shows which layers are frozen from the pretrained foundation checkpoint and which adapter layers are fine-tuned. The run-d freeze policy is the canonical configuration in BIAS_CONTROL.',
        why: 'BIAS_CONTROL locks the foundation checkpoint at epoch 25 and applies the run-d freeze policy. This prevents pretrained encoder representations from drifting during descriptor injection fine-tuning — ensuring all 24 arms start from the same representational basis and are comparable.',
        metric: 'Foundation checkpoint: foundation_locked_e25.pt · Freeze: run-d',
        result: 'The freeze policy is what makes the 24-arm comparison valid — without it, each arm would optimize from different starting points.',
    },
];

const historicalPaths = [
    {
        name: 'DANN — Adversarial Domain Adaptation',
        tag: 'Gate 3 · NO-GO',
        url: 'https://altermundi.github.io/Phideus/dann',
        status: 'nogo',
        what: 'Domain-Adversarial Neural Network applied to the audio-MIDI alignment problem. The adversarial classifier was trained to be unable to distinguish audio from MIDI embeddings — forcing domain-invariant representations.',
        whyTried: 'The primary challenge in cross-modal retrieval is the domain gap: audio and MIDI live in very different mathematical spaces. DANN offered a principled way to force the model to produce representations that are identical across modalities.',
        whatHappened: 'Adversarial invariance erased not only domain-specific noise but also musically relevant content. The model learned to produce representations that were domain-agnostic but also content-agnostic. Retrieval performance collapsed.',
        lesson: 'Suppression is not the answer. Erasing domain differences destroys the information content that makes retrieval possible. The solution must inject shared structure, not erase individual structure. This negative result directly motivated the descriptor injection approach.',
    },
    {
        name: 'HRM — Harmonic Ratio Model',
        tag: 'Pre-BIAS_CONTROL · Exploratory',
        url: 'https://altermundi.github.io/Phideus/hrm',
        status: 'historical',
        what: 'An early ratio-first model that used explicit ratio discretization and hash-based matching — similar in concept to the Shazam audio fingerprinting algorithm but applied to cross-modal alignment.',
        whyTried: 'If ratios are the shared language between audio and MIDI, an explicit ratio hash should produce direct cross-modal matches without learning. The approach was simple, interpretable, and directly testable.',
        whatHappened: 'Performance stalled at ~27% piece accuracy. Strict ratio hashing is fragile to real-world audio noise: pitch estimation errors, tuning drift, and recording conditions all introduce small ratio deviations that break exact matching.',
        lesson: 'Rigid ratio representations fail on noisy real-world data. Ratios must be learned in a soft, noise-tolerant way inside a latent space — not matched exactly in feature space. This motivated the neural descriptor injection approach.',
    },
    {
        name: 'ConstellationVAE',
        tag: 'Historical · Visualization Branch',
        url: 'https://altermundi.github.io/Phideus/constellation',
        status: 'historical',
        what: 'A Variational Autoencoder architecture that produced geometrically organized embedding spaces. Named for the constellation-like structure its latent space produced in 3D visualization.',
        whyTried: 'VAE objectives offer continuous, smooth latent spaces with probabilistic interpretability. Cross-modal alignment was attempted by conditioning both modalities on a shared prior distribution.',
        whatHappened: 'ConstellationVAE produced excellent visualization geometry and interpretable latent structure, but did not match the contrastive dual-encoder performance on the canonical retrieval task.',
        lesson: 'Generative quality and retrieval performance are not the same objective. The dual-encoder contrastive architecture with VICReg proved superior for the retrieval task. ConstellationVAE geometry informed the embedding visualization work in Test 10.',
    },
    {
        name: 'JEPA-Lite',
        tag: 'Historical · Predictive Branch',
        url: 'https://altermundi.github.io/Phideus/jepa',
        status: 'historical',
        what: 'A lightweight adaptation of the Joint Embedding Predictive Architecture applied to the audio-MIDI domain. The model predicted the latent representation of one modality from the other without contrastive objectives.',
        whyTried: 'JEPA eliminates the need for negative samples — a significant advantage over contrastive methods that require careful negative mining. Predictive self-supervision aligns naturally with the cross-modal prediction task.',
        whatHappened: 'JEPA-Lite showed promising alignment geometry but the retrieval metrics under the canonical BIAS_CONTROL protocol were lower than the contrastive dual-encoder approach. The absence of explicit alignment pressure allowed representations to drift.',
        lesson: 'Predictive objectives need explicit alignment pressure for retrieval tasks. The VICReg variance-covariance regularization in the contrastive architecture provides this pressure more effectively than prediction alone.',
    },
    {
        name: 'RosetaVAE',
        tag: 'Historical · Cross-Modal VAE',
        url: 'https://altermundi.github.io/Phideus/roseta',
        status: 'historical',
        what: "A cross-modal VAE where both audio and MIDI encoded into a shared latent space with modality-conditioned decoders. The name references the Rosetta Stone — the original metaphor for Escalon 1's audio-MIDI alignment goal.",
        whyTried: 'Cross-modal VAEs offer a natural way to learn a shared representation: both modalities encode to the same prior, and decoders reconstruct each modality. Theoretically elegant for the Audio ↔ MIDI Rosetta Stone problem.',
        whatHappened: 'RosetaVAE showed structural alignment in the latent space but underperformed on the retrieval task. Reconstruction objectives and retrieval objectives optimize different aspects of representation quality.',
        lesson: 'The Rosetta Stone metaphor transferred conceptually but not architecturally. The retrieval-optimized contrastive approach superseded the VAE branch for the canonical evaluation task.',
    },
];

export default function Architecture() {
    useEffect(() => {
        document.title = 'Architecture | Phideus';
    }, []);

    return (
        <Layout>
            <div className={`container ${classes.page}`}>

                {/* ── HEADER ── */}
                <header className={classes.header}>
                    <span className={classes.headerTag}>Technical Architecture</span>
                    <h1 className={classes.title}>System Architecture and the Path That Got Here</h1>
                    <p className={classes.lead}>
                        Phideus is not just a model — it is an architectural research program.
                        The same descriptor can win or lose depending on how it is injected.
                        Every architecture decision in the experimental stack was made for a reason,
                        and every path that failed taught something the current architecture uses.
                    </p>
                    <p className={classes.freshness}>Data as of 2026-02-25</p>
                </header>

                {/* ── SYSTEM OVERVIEW ── */}
                <section className={`glass-panel ${classes.systemOverview}`}>
                    <span className={classes.overviewTag}>System overview</span>
                    <h2>The Core Architecture</h2>
                    <div className={classes.overviewGrid}>
                        <div>
                            <h3>Dual Encoder</h3>
                            <p>
                                Two separate encoders process the two modalities independently:
                                a MERT-based audio encoder for raw audio waveforms, and a
                                transformer-based MIDI encoder for symbolic note sequences.
                                Each encoder has its own internal representation space.
                            </p>
                            <h3>Shared Embedding Space</h3>
                            <p>
                                Projection heads map each encoder output into a common embedding
                                space where audio and MIDI representations of the same musical
                                content should be geometrically close. Retrieval happens in this
                                shared space using cosine similarity.
                            </p>
                        </div>
                        <div>
                            <h3>VICReg Objective</h3>
                            <p>
                                Variance-Invariance-Covariance Regularization — a contrastive-style
                                objective that pushes matched audio-MIDI pairs close together while
                                preventing representational collapse. No negative sampling required.
                                VICReg propagates gradient pressure across both encoders jointly:
                                a descriptor injected into the MIDI encoder can improve the audio
                                encoder&apos;s alignment through shared gradient flow (+2.6pp observed).
                            </p>
                            <h3>Descriptor Injection Points</h3>
                            <p>
                                Ratio descriptors (D4, A4) are injected at specific points in each
                                encoder. The injection mechanism — concat, cross-attention, or reverse
                                cross-attention — determines how the descriptor interacts with the
                                encoder&apos;s internal layers. Mechanism is a first-class design variable.
                            </p>
                        </div>
                    </div>

                    <div className={classes.metricsRow}>
                        <MetricCard title="Baseline (D0)" value="73.4%" status="closed" sourceLabel="No descriptor — start point" />
                        <MetricCard title="Best arm (d4a4)" value="83.8%" status="closed" sourceLabel="+10.4pp · concat" />
                        <MetricCard title="Most efficient" value="a4r" status="closed" sourceLabel="~163× fewer attention ops" />
                        <MetricCard title="Best alignment" value="d4-a4r" status="closed" sourceLabel="+82% CKA · Test 06" />
                    </div>
                </section>

                {/* ── INJECTION MECHANISMS ── */}
                <section className={classes.mechSection}>
                    <h2 className={classes.sectionTitle}>Injection Mechanisms</h2>
                    <p className={classes.sectionLead}>
                        The A4 descriptor scores S=63.6% under concatenation (rank 7 of 24 arms)
                        and S=82.0% under reverse cross-attention (rank 2) — an 18.4pp gap from
                        mechanism choice alone, with identical descriptor input.
                    </p>

                    <div className={classes.mechGrid}>
                        {mechanisms.map((m) => (
                            <div key={m.name} className={`glass-panel ${classes.mechCard} ${m.status === 'production' ? classes.mechProduction : ''}`}>
                                <div className={classes.mechHeader}>
                                    <span className={classes.mechTag}>{m.tag}</span>
                                    <span className={`${classes.mechBadge} ${m.status === 'production' ? classes.badgeProduction : m.status === 'screened' ? classes.badgeScreened : classes.badgeHistorical}`}>
                                        {m.status === 'production' ? 'In use' : m.status === 'screened' ? 'Screened' : 'Historical'}
                                    </span>
                                </div>
                                <h3 className={classes.mechName}>{m.name}</h3>
                                <p className={classes.mechDesc}>{m.description}</p>
                                <div className={classes.mechBlock}>
                                    <span className={classes.mechBlockLabel}>Trade-offs</span>
                                    <p>{m.tradeoffs}</p>
                                </div>
                                <div className={classes.mechBlock}>
                                    <span className={classes.mechBlockLabel}>Result</span>
                                    <p className={classes.mechResult}>{m.result}</p>
                                </div>
                                <div className={classes.mechFinding}>
                                    {m.finding}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CORE WALKTHROUGHS ── */}
                <section className={classes.archSection}>
                    <h2 className={classes.sectionTitle}>Core Architecture Walkthroughs</h2>
                    <p className={classes.sectionLead}>
                        Each walkthrough on GitHub Pages is a detailed visual diagram of one architectural
                        component. Read them in order to follow the full system from encoder to shared space.
                    </p>

                    <div className={classes.walkthroughList}>
                        {coreWalkthroughs.map((w, i) => (
                            <div key={w.name} className={`glass-panel ${classes.walkthroughCard}`}>
                                <div className={classes.walkthroughIndex}>{String(i + 1).padStart(2, '0')}</div>
                                <div className={classes.walkthroughBody}>
                                    <div className={classes.walkthroughHeader}>
                                        <div>
                                            <span className={classes.walkthroughTag}>{w.tag}</span>
                                            <a href={w.url} target="_blank" rel="noopener noreferrer" className={classes.walkthroughLink}>
                                                {w.name}
                                                <span className={classes.viewGraphicText}>Ver gráfico</span>
                                                <span className={classes.externalIcon}>↗</span>
                                            </a>
                                        </div>
                                        <code className={classes.walkthroughUrl}>{w.url.replace('https://', '')}</code>
                                    </div>
                                    <div className={classes.walkthroughContent}>
                                        <div>
                                            <span className={classes.contentLabel}>What it shows</span>
                                            <p>{w.what}</p>
                                        </div>
                                        <div>
                                            <span className={classes.contentLabel}>Why it matters</span>
                                            <p>{w.why}</p>
                                        </div>
                                    </div>
                                    <div className={classes.walkthroughFooter}>
                                        <span className={classes.metricChip}>{w.metric}</span>
                                        <span className={classes.resultNote}>{w.result}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── HISTORICAL EVOLUTION ── */}
                <section className={classes.archSection}>
                    <h2 className={classes.sectionTitle}>Historical Architecture Evolution</h2>
                    <p className={classes.sectionLead}>
                        Each path that did not survive to the current architecture taught something
                        essential. The failures are not failures — they are the empirical record
                        that justifies the current design choices.
                    </p>

                    <div className={classes.historyList}>
                        {historicalPaths.map((h) => (
                            <div key={h.name} className={`glass-panel ${classes.historyCard} ${h.status === 'nogo' ? classes.historyNogo : ''}`}>
                                <div className={classes.historyHeader}>
                                    <span className={`${classes.historyBadge} ${h.status === 'nogo' ? classes.badgeNogo : classes.badgeHistorical}`}>
                                        {h.tag}
                                    </span>
                                    <a href={h.url} target="_blank" rel="noopener noreferrer" className={classes.walkthroughLink}>
                                        {h.name}
                                        <span className={classes.viewGraphicText}>Ver gráfico</span>
                                        <span className={classes.externalIcon}>↗</span>
                                    </a>
                                </div>
                                <div className={classes.historyContent}>
                                    <div className={classes.historyBlock}>
                                        <span className={classes.contentLabel}>What it was</span>
                                        <p>{h.what}</p>
                                    </div>
                                    <div className={classes.historyBlock}>
                                        <span className={classes.contentLabel}>Why we tried it</span>
                                        <p>{h.whyTried}</p>
                                    </div>
                                    <div className={classes.historyBlock}>
                                        <span className={classes.contentLabel}>What happened</span>
                                        <p>{h.whatHappened}</p>
                                    </div>
                                </div>
                                <div className={classes.historyLesson}>
                                    <span className={classes.lessonLabel}>What this taught us</span>
                                    <p>{h.lesson}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── HOW IT ALL CONNECTS ── */}
                <section className={`glass-panel ${classes.connectSection}`}>
                    <span className={classes.connectTag}>How it all connects</span>
                    <h2>The Architecture Is the Argument</h2>
                    <div className={classes.connectGrid}>
                        <div>
                            <p>
                                The failed paths — exact ratio hashing, adversarial domain suppression,
                                generative VAE objectives — each demonstrate a necessary condition
                                for cross-modal ratio transfer: ratios must be soft (not rigid), must be
                                injected (not erased), and must optimize for retrieval (not reconstruction).
                            </p>
                            <p>
                                The current architecture satisfies all three: soft ratio descriptors (learned
                                histogram representations), positive injection (concat or reverse cross-attention),
                                and a retrieval-optimized contrastive objective (VICReg with canonical
                                evaluation metric S).
                            </p>
                        </div>
                        <div>
                            <p>
                                The ~163× efficiency advantage of reverse cross-attention is not incidental —
                                it emerges from the mathematical structure of the ratio descriptor itself.
                                A ratio descriptor is compact (few tokens) but spans the full frequency
                                range. Standard cross-attention wastes operations searching the full-length
                                audio sequence from the longer side. Inverting Q/K lets the compact
                                descriptor drive the search.
                            </p>
                            <p>
                                This architectural logic points toward Escalon 2 and 3: the same reverse
                                cross-attention injection path should generalize to compact, ratio-structured
                                descriptors in speech (formant ratios) and biosignals (cardiac-respiratory
                                rhythm ratios).
                            </p>
                        </div>
                    </div>
                    <div className={classes.connectLinks}>
                        <Link to="/evidence" className={classes.connectLink}>Read the evidence →</Link>
                        <Link to="/roadmap" className={classes.connectLink}>See where this goes →</Link>
                    </div>
                </section>

                <p className={classes.footerFreshness}>Data as of 2026-02-25 · Gate 5B · Escalon 1 · Architecture index</p>

            </div>
        </Layout>
    );
}
