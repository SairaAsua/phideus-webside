import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import classes from './Roadmap.module.css';

const gates = [
    { stage: 'Gate 0–2.5', status: 'closed', label: 'Closed', message: 'Foundational pipeline and baseline comparability established. The rules of the game were set here.' },
    { stage: 'Gate 3 (DANN)', status: 'nogo', label: 'Closed — NO-GO', message: 'Adversarial domain adaptation tried to erase modality differences. It erased useful information instead. Important negative result: suppression is not the answer.' },
    { stage: 'Gate 4.2', status: 'closed', label: 'Closed', message: 'First confirmation that descriptor value is mechanism-dependent. The same descriptor can win or lose depending on how it is injected.' },
    { stage: 'Gate 4.3', status: 'closed', label: 'Closed', message: 'Strong descriptor/mechanism signal established. The direction was clear: ratio-informed injection works.' },
    { stage: 'Gate 4.4', status: 'closed', label: 'Closed', message: 'Major architecture screening completed. Six injection variants compared under controlled conditions.' },
    { stage: 'Gate 4.5', status: 'closed', label: 'Operationally closed', message: 'Scheduler and depth block used for checkpoint selection. Training dynamics understood.' },
    { stage: 'Gate 5B', status: 'active', label: 'Active — scientific package', message: 'Six-layer evidence package: performance, causality, robustness, internal alignment, spectral sensitivity, embedding geometry. This is the current public center.' },
    { stage: 'Gate 5A', status: 'pending', label: 'Pending', message: 'Full descriptor × mechanism sweep, guided by Gate 5B outputs. The next systematic pass.' },
];

export default function Roadmap() {
    useEffect(() => {
        document.title = 'Roadmap | Phideus';
    }, []);

    return (
        <Layout>
            <div className={`container ${classes.page}`}>

                {/* ── HERO ── */}
                <header className={classes.header}>
                    <span className={classes.headerTag}>TripleScaloneta</span>
                    <h1 className={classes.title}>The Ladder to Planetary Intelligence</h1>
                    <p className={classes.lead}>
                        One central question. Three domains. A staged scientific ladder designed to find out
                        how far ratio-based representation can travel across the physical world.
                    </p>
                    <p className={classes.lead}>
                        We are not rushing. We are building something that works — and works for reasons
                        we understand. Every gate closes with evidence, not with optimism.
                    </p>
                    <p className={classes.freshness}>Data as of 2026-02-25</p>
                </header>

                {/* ── WHERE WE ARE ── */}
                <section className={`glass-panel ${classes.statusBanner}`}>
                    <div className={classes.statusBannerInner}>
                        <div className={classes.statusBannerText}>
                            <span className={classes.statusPill}>Gate 5B active</span>
                            <h2 className={classes.statusTitle}>Escalon 1 is producing its strongest evidence</h2>
                            <p>
                                Audio ↔ MIDI cross-modal retrieval on MAESTRO. The model that adds ratio
                                descriptors reaches <strong>S=83.8%</strong> vs a baseline of <strong>73.4%</strong>.
                                That is +10.4 pp — with causal proof and six independent validation layers.
                                Gate 5B is not a single metric. It is a structured scientific argument.
                            </p>
                        </div>
                        <div className={classes.statusLinks}>
                            <Link to="/evidence" className={classes.statusCta}>See the evidence →</Link>
                        </div>
                    </div>
                </section>

                {/* ── THE THREE ESCALONS ── */}
                <section className={classes.escalonSection}>
                    <h2>Three Escalons — One Question</h2>
                    <p className={classes.sectionLead}>
                        Each escalon increases the difficulty of the ratio-transfer hypothesis.
                        Escalon 1 is the Rosetta Stone: perfect symbolic correspondence, maximum
                        experimental control. From here, we generalize.
                    </p>

                    <div className={classes.escalonGrid}>

                        <div className={`glass-panel ${classes.escalonCard} ${classes.escalonActive}`}>
                            <div className={classes.escalonHeader}>
                                <div>
                                    <span className={classes.escalonNumber}>01</span>
                                    <h3>Audio ↔ MIDI</h3>
                                    <span className={classes.escalonDomain}>MAESTRO dataset</span>
                                </div>
                                <span className={classes.badgeActive}>Active</span>
                            </div>
                            <p>
                                The same musical piece — heard as sound and symbolically transcribed.
                                Two completely different mathematical spaces, identical content.
                                If ratio descriptors can bridge this gap with causal evidence,
                                the framework has a solid foundation to stand on.
                            </p>
                            <div className={classes.escalonResult}>
                                <span>Current best: d4a4 S=83.8%</span>
                                <span>+10.4 pp over baseline</span>
                            </div>
                            <p className={classes.escalonCondition}>
                                <strong>Advancement condition:</strong> Close Gate 5B package + pending Test 09 and UNC blocks.
                            </p>
                        </div>

                        <div className={`glass-panel ${classes.escalonCard} ${classes.escalonPlanned}`}>
                            <div className={classes.escalonHeader}>
                                <div>
                                    <span className={classes.escalonNumber}>02</span>
                                    <h3>Speech ↔ EGG</h3>
                                    <span className={classes.escalonDomain}>Natural coupling, no symbolic identity</span>
                                </div>
                                <span className={classes.badgePlanned}>Planned</span>
                            </div>
                            <p>
                                Speech carries ratio structure in formant relationships and prosodic
                                dynamics. EGG (electroglottography) measures vocal fold contact —
                                a completely different physical signal, coupled by the same vocal source.
                                If ratio transfer holds here, it is not a music artifact.
                            </p>
                            <p className={classes.escalonCondition}>
                                <strong>Advancement condition:</strong> Escalon 1 closure bundle + reproducible mechanism shortlist.
                            </p>
                        </div>

                        <div className={`glass-panel ${classes.escalonCard} ${classes.escalonPlanned}`}>
                            <div className={classes.escalonHeader}>
                                <div>
                                    <span className={classes.escalonNumber}>03</span>
                                    <h3>ECG ↔ PPG</h3>
                                    <span className={classes.escalonDomain}>Biomedical signals, shared rhythm</span>
                                </div>
                                <span className={classes.badgePlanned}>Planned</span>
                            </div>
                            <p>
                                ECG and PPG measure cardiac activity from different angles — electrical
                                and photoplethysmographic. Their coupling emerges from shared cardiac-respiratory
                                rhythm ratios. No symbolic identity exists between them, only proportion.
                                A positive result here would show ratio structure is a cross-domain principle.
                            </p>
                            <p className={classes.escalonCondition}>
                                <strong>Advancement condition:</strong> Escalon 2 positive transfer criteria met.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ── GATE TIMELINE ── */}
                <section className={classes.gatesSection}>
                    <h2>Escalon 1 — Gate by Gate</h2>
                    <p className={classes.sectionLead}>
                        Each gate is a decision point. Closed means the question was answered.
                        NO-GO means we learned something important and moved forward.
                        Every path — including the failed ones — is documented.
                    </p>
                    <div className={classes.timeline}>
                        {gates.map((g) => (
                            <div
                                key={g.stage}
                                className={`glass-panel ${classes.gateCard} ${
                                    g.status === 'active' ? classes.gateActive :
                                    g.status === 'nogo' ? classes.gateNogo :
                                    g.status === 'pending' ? classes.gatePending : ''
                                }`}
                            >
                                <div className={classes.gateHeader}>
                                    <h3>{g.stage}</h3>
                                    <span className={`${classes.gateLabel} ${
                                        g.status === 'active' ? classes.gateLabelActive :
                                        g.status === 'nogo' ? classes.gateLabelNogo :
                                        g.status === 'pending' ? classes.gateLabelPending :
                                        classes.gateLabelClosed
                                    }`}>{g.label}</span>
                                </div>
                                <p>{g.message}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── NEXT 60-90 DAYS ── */}
                <section className={`glass-panel ${classes.prioritiesSection}`}>
                    <h2>Next 60–90 Days</h2>
                    <ol className={classes.priorityList}>
                        <li>
                            <strong>Close pending Gate 5B blocks —</strong> Test 09 full invariance matrix
                            and remaining UNC training studies. These complete the robustness layer.
                        </li>
                        <li>
                            <strong>Publish the Gate 5B communication package —</strong> full reproducible
                            evidence with chart map, methodology, and source paths. Publicly archived.
                        </li>
                        <li>
                            <strong>Feed Gate 5A —</strong> validated mechanism constraints from Gate 5B
                            inform the next systematic descriptor × mechanism sweep.
                        </li>
                        <li>
                            <strong>Prepare Escalon 2 launch brief —</strong> advancement criteria from
                            consolidated Escalon 1 evidence, targeting Speech ↔ EGG.
                        </li>
                    </ol>
                    <p className={classes.freshness}>Data as of 2026-02-25</p>
                </section>

                {/* ── LONG-TERM VISION ── */}
                <section className={classes.visionSection}>
                    <span className={classes.visionTag}>long-term vision</span>
                    <h2>Where This Goes</h2>
                    <div className={classes.visionGrid}>
                        <div>
                            <p>
                                If ratio structure transfers reliably across music, speech, and biosignals,
                                the same architectural principles scale to any domain where periodic or
                                quasi-periodic structure encodes meaningful information.
                            </p>
                            <p>
                                Ecosystem monitoring from forest soundscapes and ocean recordings.
                                Industrial vibration diagnostics. Multi-modal medical sensing.
                                Environmental early warning systems built on harmonic coherence —
                                not labels, not tokens, not human annotation at scale.
                            </p>
                        </div>
                        <div>
                            <p>
                                A ratio-native AI is not specialized by modality. It is organized by
                                the mathematical structure that biological and physical systems share.
                                The TripleScaloneta is the empirical ladder that determines whether
                                this is scientifically sound.
                            </p>
                            <p className={classes.visionNote}>
                                We are in Escalon 1. The foundation is being validated, gate by gate.
                                The ambition is planetary. The method is rigorous.
                                Both things are true at the same time.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── COLLABORATE ── */}
                <section className={classes.collaborateSection}>
                    <h2>Be Part of This</h2>
                    <p className={classes.collaborateLead}>
                        PHIDEUS is an open research program. The scientific questions are genuinely open.
                        The architecture decisions are empirically driven. The next escalons will require
                        people with different skills, different domains, and different ways of seeing.
                    </p>
                    <div className={classes.collaborateGrid}>
                        <div className={`glass-panel ${classes.collaborateCard}`}>
                            <h3>Researchers</h3>
                            <p>
                                If you work in signal processing, self-supervised learning, cross-modal
                                representation, or auditory neuroscience — the HIT hypotheses are
                                scientifically interesting and still open. Escalon 2 and 3 will need domain
                                expertise in speech, EGG, ECG, and biosignal processing.
                            </p>
                        </div>
                        <div className={`glass-panel ${classes.collaborateCard}`}>
                            <h3>Engineers</h3>
                            <p>
                                We are actively building ratio-native model components. Injection mechanism
                                design, efficiency optimization, descriptor architecture — these are open
                                engineering problems with measured outcomes and reproducible benchmarks.
                            </p>
                        </div>
                        <div className={`glass-panel ${classes.collaborateCard}`}>
                            <h3>Partners</h3>
                            <p>
                                Organizations working on environmental monitoring, biomedical sensing, or
                                any domain where cross-modal signal alignment matters — Escalon 3 and beyond
                                are designed to generalize to your domain.
                            </p>
                        </div>
                    </div>
                    <div className={classes.collaborateCta}>
                        <p>Follow the evidence as it is published:</p>
                        <div className={classes.collaborateLinks}>
                            <Link to="/evidence" className={classes.collaborateLink}>Evidence page</Link>
                            <Link to="/architecture" className={classes.collaborateLink}>Technical docs</Link>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.collaborateLink}>Main repo ↗</a>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
