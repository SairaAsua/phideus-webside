import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import FigureCard from '../../components/visuals/FigureCard';
import ScientificFindings from '../../components/visuals/ScientificFindings';
import classes from './Home.module.css';

export default function Home() {
    useEffect(() => {
        document.title = 'Phideus | Native Intelligence of Proportions';
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
                        Native intelligence of proportions.
                    </p>
                    <p className={classes.subtitleSecondary}>
                        PHIDEUS is rooted in Harmonic Information Theory: it explores, develops, and turns it into experimental architecture. At Gate 1, that hypothesis already delivered a canonical result over five independent training seeds. Today the program is moving beyond that closure toward an active vocal front and a synthetic benchmark where the geometry of ratios can be tested under much tighter control.
                    </p>
                    <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.ctaPrimary}>View repository</a>
                    <Link to="/" className={classes.ctaGhost}>Main index</Link>
                    <a href="mailto:info@altermundi.net" className={classes.ctaGhost}>Learn more</a>
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
                                Most AI systems learn from surfaces: tokens, labels, pixel values. They excel when there is abundant labeled data from a single domain. But they struggle when asked to transfer knowledge across sensor types, or when labeled data is scarce.
                            </p>
                            <p>
                                PHIDEUS tests a different path: <strong>learning through relationships</strong>.
                                If the structure that matters in oscillatory systems is encoded in ratios (proportions between components), not in absolute values, then building an AI that reads ratios natively could yield stronger transfer and better efficiency.
                            </p>
                            <p className={classes.challengeNote}>
                                Current benchmark: audio waveforms ↔ MIDI note sequences on MAESTRO.
                                Same musical content, completely distinct mathematical spaces.
                            </p>
                        </div>
                        <div>
                            <FigureCard
                                isAnim
                                src="/assets/evidence/gate5b/animations/anim1_morphing_evolution.gif"
                                alt="Morphing evolution animation between domains"
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
                        <h2>The Thesis: Ratios as a Common Language</h2>
                        <p>
                            A frequency ratio is scale-invariant. The 3:2 relationship is the same whether it occurs between 300 Hz and 200 Hz, or between 1,500 Hz and 1,000 Hz: the proportion is identical, only the absolute values differ. Oscillatory systems across music, speech, and biosignals share this property: their meaningful structure is encoded in relationships between components, not in absolute values.
                        </p>
                        <p>
                            <strong>Harmonic Information Theory (HIT)</strong> proposes that part of the structure in oscillatory systems can be expressed as ratio distributions, and that this proportion-based structure may be transferable across the domains that share it.
                        </p>
                        <p className={classes.hitNote}>
                            This is a research hypothesis under active study, not an established result. Cross-modal deep learning is the experimental field where we put it to the test.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 4. THE DUAL EXPLORATION ── */}
            <section className={classes.explorationSection}>
                <div className="container">
                    <h2>Two Simultaneous Explorations</h2>
                    <p className={classes.explorationIntro}>
                        PHIDEUS works as a feedback loop between two lines of work. Each one feeds the other.
                    </p>
                    <div className={classes.explorationGrid}>
                        <div className={`glass-panel ${classes.explorationCard}`}>
                            <span className={classes.explorationTag}>Loop A — Science</span>
                            <h3>Harmonic Information Theory as an operational hypothesis</h3>
                            <p>
                                We use the behavior of AI models as a scientific probe. If injecting ratio descriptors consistently improves cross-domain alignment under controlled conditions, it is empirical evidence that ratio structure carries transferable information.
                            </p>
                            <p className={classes.explorationNote}>
                                Scale invariance as a general principle and generalization beyond the current benchmark remain open research questions.
                            </p>
                        </div>
                        <div className={`glass-panel ${classes.explorationCard}`}>
                            <span className={classes.explorationTag}>Loop B — Engineering</span>
                            <h3>Building attention guided by proportions</h3>
                            <p>
                                We build models where ratio descriptors do not decorate the architecture as an additional feature. Instead, they guide the attention logic, defining how the model organizes relationships. Then we measure efficiency, retrieval quality, and alignment.
                            </p>
                            <p className={classes.explorationNote}>
                                Results are measured on the current benchmark and closed experimental arms.
                            </p>
                        </div>
                    </div>
                    <blockquote className={classes.bridgeSentence}>
                        We are not adding ratios as "just another metric". We are testing ratios as an organizing principle of attention and representation.
                    </blockquote>
                    <p className={classes.explorationNote} style={{ textAlign: 'center', marginTop: '1.5rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                        That dual loop has already produced three visible outputs: a canonical closure at Gate 1, a vocal front where the first mechanistic null is already closed, and a synthetic extension where the geometry can be tested under much tighter control.
                    </p>
                </div>
            </section>

            {/* ── 5. THE KEY MECHANISM ── */}
            <section className={classes.mechanismSection}>
                <div className="container">
                    <div className={classes.mechanismGrid}>
                        <div className={classes.mechanismContent}>
                            <span className={classes.challengeLabel}>key mechanism</span>
                            <h2>Reverse Cross-Attention</h2>
                            <p className={classes.mechanismText}>
                                In standard Transformer cross-attention, every extracted feature seeks to relate to every other: O(n²) operations crossing domains. In Reverse Cross-Attention, the ratio descriptor tokens act as the <em>query</em>: they define which inter-domain relationships are explored, drastically reducing the search space.
                            </p>
                            <p className={classes.mechanismText}>
                                Implementation details, sequence-length profiles, and test results are available in the technical documentation.
                            </p>
                        </div>
                        <div className={classes.mechanismMediaFull}>
                            <FigureCard
                                src="/assets/grafico1.png"
                                alt="Reverse Cross-Attention diagram"
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
                        Four key points from the current benchmark (MAESTRO Audio↔MIDI, Gate 5B).
                        Each metric includes its cut-off date and the path to evidence.
                        Scope is limited to the current configuration and closed experimental arms.
                    </p>

                    <div className={classes.claimsGrid}>

                        {/* Card 1 — 163x */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>163×</div>
                            <div className={classes.claimMeaning}>
                                fewer attention operations in the Transformer core.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Measured/derived from token sequence lengths. Not a universal law.
                                </span>
                                <span>Artifact: audio 2400 frames vs descriptors</span>
                                <span>Cut-off: 2026-02-25</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View methodology →
                            </a>
                        </div>

                        {/* Card 2 — Compute savings */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>2.6×</div>
                            <div className={classes.claimMeaning}>
                                faster training and inference in the current setup.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Observed in the current configuration. Verified profile available in the documents.
                                </span>
                                <span>Cut-off: 2026-02-25</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View documents →
                            </a>
                        </div>

                        {/* Card 3 — +8.8pp */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>+8.8 pp</div>
                            <div className={classes.claimMeaning}>
                                training-seed mean improvement of d4a4 over D0 in bidirectional retrieval.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Measured on the current benchmark and closed experimental branches.
                                </span>
                                <span>5 training seeds · Cut-off: 2026-04-09</span>
                                <span>Benchmark: MAESTRO Audio↔MIDI.</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View evidence →
                            </a>
                        </div>

                        {/* Card 4 — 4/4 */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>4/4</div>
                            <div className={classes.claimMeaning}>
                                capacity control already closed in Test02, ruling out that the gain is explained only by extra parameters.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Results measured on the consolidated branch of the canonical layer.
                                </span>
                                <span>Cut-off: 2026-04-09</span>
                                <span>Test02 Capacity Verification artifact</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                View evidence →
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* ── 7. WHERE PHIDEUS IS TODAY ── */}
            <section className={classes.currentMomentSection}>
                <div className="container">
                    <span className={classes.measuredBadge}>Current moment of the program</span>
                    <h2>Where PHIDEUS Stands Today</h2>
                    <p className={classes.currentMomentIntro}>
                        PHIDEUS is no longer just at the stage of showing that the idea works once.
                        Today it combines a canonical closure at Gate 1, an active vocal front where the initial
                        mechanistic null has already been closed, and a synthetic benchmark where the geometry
                        of ratios can be tested under much tighter control.
                    </p>
                    <div className={classes.currentMomentGrid}>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>84.0% ±2.7pp</div>
                            <div className={classes.momentLabel}>
                                canonical closure of d4a4 over five independent training seeds.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>4/4</div>
                            <div className={classes.momentLabel}>
                                Test02 has closed the capacity control of the main block.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>Gate 2</div>
                            <div className={classes.momentLabel}>
                                active main front; the live task is now the P2 vs P3 diagnostic.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>Gate 3</div>
                            <div className={classes.momentLabel}>
                                synthetic benchmark already active, with a dual baseline and the first geometric line run.
                            </div>
                        </div>
                    </div>
                    <p className={classes.momentStamp}>Data updated as of 2026-04-09</p>
                </div>
            </section>

            {/* ── 8. READ UPDATED PAPER ── */}
            <section className={classes.paperSection}>
                <div className={`container ${classes.paperContainer}`}>
                    <h2>Read the Updated Paper</h2>
                    <p className={classes.paperDescription}>
                        Here we tell the vision with narrative clarity. The expanded evidence already includes the Gate 1 training-seed closure, the completed capacity control, the negative closure of the 13G-B generative phase, the P2 vs P3 vocal front, the Gate 3 synthetic benchmark, and the program's long public formulation in the HIT book.
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
                        The program's longer theoretical development is already publicly available
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
