import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import FigureCard from '../../components/visuals/FigureCard';
import ScientificFindings from '../../components/visuals/ScientificFindings';
import classes from './Home.module.css';

export default function Home() {
    useEffect(() => {
        document.title = 'Phideus | Intelligence Native to Proportions';
    }, []);

    return (
        <Layout>

            {/* ── 1. HERO ── */}
            <section className={classes.hero}>
                <div className={`container ${classes.heroContent}`}>
                    <div className={classes.titleWrapper}>
                        <img
                            src="/assets/evidence/gate5b/animations/anim4_rotation_3d.gif"
                            alt=""
                            className={classes.titleAnim}
                            aria-hidden="true"
                        />
                        <h1 className={classes.title}>PHIDEUS</h1>
                    </div>
                    <p className={classes.subtitle}>
                        Intelligence native to proportions.
                    </p>
                    <p className={classes.subtitleSecondary}>
                        PHIDEUS is grounded in Harmonic Information Theory: it explores, develops, and turns it
                        into experimental architecture. What Step 1 already closed as a robust cross-modal advantage
                        now extends to an active vocal front and a synthetic geometric testbed.
                    </p>
                    <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.ctaPrimary}>See the repository</a>
                    <Link to="/" className={classes.ctaGhost}>See the Main Index</Link>
                    <a href="mailto:info@altermundi.net" className={classes.ctaGhost}>Know more</a>
                </div>
            </section>

            {/* ── 2. THE PROBLEM ── */}
            <section className={classes.challengeSection}>
                <div className="container">
                    <div className={classes.challengeGrid}>
                        <div className={classes.challengeText}>
                            <span className={classes.challengeLabel}>why this exists</span>
                            <h2>The Problem</h2>
                            <p>
                                Most AI learns from surfaces — tokens, labels, pixel values. It excels when there
                                is abundant labelled data from a single domain. But it struggles when you ask it
                                to transfer knowledge between sensor types, or when labelled data is scarce.
                            </p>
                            <p>
                                PHIDEUS tests a different path: <strong>learning by relationships</strong>.
                                If the structure that matters in oscillatory systems is encoded in ratios
                                (proportions between components), not in absolute values, then building AI
                                that natively reads ratios could yield stronger transfer and better efficiency.
                            </p>
                            <p className={classes.challengeNote}>
                                Current benchmark: audio waveforms ↔ MIDI note sequences on MAESTRO.
                                Same musical content, completely different mathematical spaces.
                            </p>
                        </div>
                        <div>
                            <FigureCard
                                isAnim
                                src="/assets/evidence/gate5b/animations/anim1_morphing_evolution.gif"
                                alt="Cross-modal morphing evolution animation"
                                caption="Ratio structure emerging across audio and MIDI domains."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. THE THESIS ── */}
            <section id="the-thesis" className={classes.hitSection}>
                <div className="container">
                    <div className={classes.hitContainer}>
                        <span className={classes.hypothesisBadge}>Research hypothesis</span>
                        <h2>The Thesis: Ratios as a Shared Language</h2>
                        <p>
                            A frequency ratio is scale-invariant. The relationship 3:2 is the same whether
                            it occurs between 300 Hz and 200 Hz, or between 1,500 Hz and 1,000 Hz — the
                            proportion is identical, only the absolute values differ. Oscillatory systems
                            across music, speech, and biosignals share this property: their meaningful
                            structure is encoded in relationships between components, not in absolute values.
                        </p>
                        <p>
                            <strong>Harmonic Information Theory (HIT)</strong> proposes that part of the
                            structure in oscillatory systems — music, speech, biosignals — can be expressed
                            as distributions of ratios, and that this ratio-based structure may be
                            transferable across domains that share it.
                        </p>
                        <p className={classes.hitNote}>
                            This is a research hypothesis under active investigation, not an established
                            result. Cross-modal deep learning is the experimental field where we test it.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 4. THE DOUBLE EXPLORATION ── */}
            <section className={classes.explorationSection}>
                <div className="container">
                    <h2>Two Simultaneous Explorations</h2>
                    <p className={classes.explorationIntro}>
                        PHIDEUS runs as a feedback loop between two lines of work. Each informs the other.
                    </p>
                    <div className={classes.explorationGrid}>
                        <div className={`glass-panel ${classes.explorationCard}`}>
                            <span className={classes.explorationTag}>Loop A — Science</span>
                            <h3>Harmonic Information Theory as operational hypothesis</h3>
                            <p>
                                We use AI model behavior as a scientific probe. If injecting ratio descriptors
                                consistently improves cross-domain alignment — in controlled conditions, across
                                multiple runs — that is empirical evidence that ratio structure carries
                                transferable information.
                            </p>
                            <p className={classes.explorationNote}>
                                Scale-invariance as a general principle, and generalization beyond the current
                                benchmark, remain open research questions.
                            </p>
                        </div>
                        <div className={`glass-panel ${classes.explorationCard}`}>
                            <span className={classes.explorationTag}>Loop B — Engineering</span>
                            <h3>Building proportion-guided attention</h3>
                            <p>
                                We build models where ratio descriptors do not decorate the architecture as
                                an add-on feature. Instead, they guide the attention logic — defining how
                                the model organizes relationships between extracted features.
                                Then we measure efficiency, retrieval quality, and alignment.
                            </p>
                            <p className={classes.explorationNote}>
                                Results are measured on the current benchmark and closed experimental arms only.
                            </p>
                        </div>
                    </div>
                    <blockquote className={classes.bridgeSentence}>
                        We&apos;re not adding ratios as &ldquo;one more feature&rdquo;. We&apos;re testing
                        ratios as an organizing principle for attention and representation.
                    </blockquote>
                    <p className={classes.explorationNote} style={{ textAlign: 'center', marginTop: '1.5rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                        This double loop has already produced three visible outputs: a canonical closure in Step 1,
                        a vocal front where the first mechanistic null is already closed, and a synthetic extension
                        where ratio geometry can be tested with much greater control.
                    </p>
                </div>
            </section>

            {/* ── 5. KEY MECHANISM ── */}
            <section className={classes.mechanismSection}>
                <div className="container">
                    <div className={classes.mechanismGrid}>
                        <div className={classes.mechanismContent}>
                            <span className={classes.challengeLabel}>key mechanism</span>
                            <h2>Reverse Cross-Attention</h2>
                            <p className={classes.mechanismText}>
                                In standard Transformer cross-attention, every extracted feature searches for
                                relationships with every other feature — O(n²) operations across all cross-modal
                                combinations. In Reverse Cross-Attention, ratio descriptor tokens act as
                                the <em>query</em> side: they define which cross-modal relationships get
                                explored, dramatically reducing the search space.
                            </p>
                            <p className={classes.mechanismText}>
                                Implementation details, sequence length analysis, and test results are in the
                                technical documentation.
                            </p>
                        </div>
                        <div className={classes.mechanismMediaFull}>
                            <FigureCard
                                src="/assets/grafico1.png"
                                alt="Reverse Cross-Attention Diagram"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. MEASURED RESULTS ── */}
            <section id="measured-results" className={classes.claimsSection}>
                <div className="container">
                    <span className={classes.measuredBadge}>Measured observations</span>
                    <h2>What We Have Measured</h2>
                    <p className={classes.claimsIntro}>
                        Four claims from the current benchmark (MAESTRO Audio↔MIDI, Gate 5B closed suite).
                        Each includes a test reference, cut date, and evidence path.
                        Scope is limited to the current setup and closed experimental arms.
                    </p>

                    <div className={classes.claimsGrid}>

                        {/* Claim 1 — 163x */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>~163×</div>
                            <div className={classes.claimMeaning}>
                                fewer attention operations in the current architecture setup
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Measured / derived from architecture token lengths — not a universal law.
                                </span>
                                <span>Artifact: 02_PHIDEUS_NEURAL_ARCHITECTURES.md (sequence lengths: audio 2400 frames vs descriptor tokens)</span>
                                <span>Cut: 2026-02-25</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View methodology →
                            </a>
                        </div>

                        {/* Claim 2 — Compute savings (safe wording; update to "Up to ~2.6×" once profiling artifact is published in Docs/Main Repo) */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>Shorter sequences</div>
                            <div className={classes.claimMeaning}>
                                significant compute savings from shorter descriptor sequences
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Observed in current setup. A verified profiling artifact will be linked here once published in Docs/Main Repo.
                                </span>
                                <span>Cut: 2026-02-25</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View docs →
                            </a>
                        </div>

                        {/* Claim 3 — +8.8pp (updated 2026-04-09) */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>+8.8 pp</div>
                            <div className={classes.claimMeaning}>
                                mean training-seed improvement of d4a4 over D0 in bidirectional retrieval.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Measured on current benchmark + current closed arms only.
                                </span>
                                <span>5 training seeds · Cut: 2026-04-09</span>
                                <span>Benchmark: MAESTRO Audio↔MIDI. See Docs/Repo for methodology.</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View evidence →
                            </a>
                        </div>

                        {/* Claim 4 — +82% CKA */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>up to +82%</div>
                            <div className={classes.claimMeaning}>
                                representational alignment between domains (CKA metric)
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Measured on current closed suite. CKA measures geometric similarity
                                    between domain representations — higher means more aligned.
                                </span>
                                <span>Test06 (RSA/CKA) · Gate 5B · Cut: 2026-02-25</span>
                                <span>Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/10_TEST_RESULTS_06.md</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View evidence →
                            </a>
                        </div>

                    </div>






                </div>
            </section>

            {/* ── 7. WHERE IS PHIDEUS TODAY ── */}
            <section className={classes.currentMomentSection}>
                <div className="container">
                    <span className={classes.measuredBadge}>Current status</span>
                    <h2>Where Is PHIDEUS Today</h2>
                    <p className={classes.currentMomentIntro}>
                        PHIDEUS is no longer just at the stage of proving the idea works once.
                        It now combines a canonical closure in Step 1, an active vocal front where the initial
                        mechanistic null is already closed, and a synthetic testbed where ratio geometry
                        can be tested with much greater control.
                    </p>
                    <div className={classes.currentMomentGrid}>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>84.0% ±2.7pp</div>
                            <div className={classes.momentLabel}>
                                Canonical closure of d4a4 across five independent training seeds.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>4/4</div>
                            <div className={classes.momentLabel}>
                                Test02 has closed the capacity control for the main block.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>Step 2</div>
                            <div className={classes.momentLabel}>
                                Active main front; the live task is now the P2 vs P3 diagnostic.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>Step 3</div>
                            <div className={classes.momentLabel}>
                                Synthetic testbed already active, with dual baseline and first geometric line run.
                            </div>
                        </div>
                    </div>
                    <p className={classes.momentStamp}>Data updated as of 2026-04-09</p>
                </div>
            </section>

            {/* ── 8. READ THE UPDATED PAPER ── */}
            <section className={classes.paperSection}>
                <div className={`container ${classes.paperContainer}`}>
                    <h2>Read the Updated Paper</h2>
                    <p className={classes.paperDescription}>
                        The extended white paper details the Harmonic Information Theory,
                        its interdisciplinary foundations, and the empirical results obtained to date.
                    </p>
                    <div className={classes.paperLinks}>
                        <a
                            href="/assets/docs/papper.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.ctaPrimary}
                        >
                            Download paper (PDF)
                        </a>
                        <a
                            href="https://github.com/altermundi/Phideus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.ctaGhost}
                        >
                            View repository
                        </a>
                    </div>
                    <p className={classes.paperHitRef}>
                        The full theoretical development of the program is now publicly available
                        in the HIT book: open repository and web edition at{' '}
                        <a href="https://hit.altermundi.net" target="_blank" rel="noopener noreferrer">
                            hit.altermundi.net
                        </a>.
                    </p>
                </div>
            </section>

            {/* ── 9. SCIENTIFIC FINDINGS ── */}
            <ScientificFindings />

        </Layout>
    );
}
