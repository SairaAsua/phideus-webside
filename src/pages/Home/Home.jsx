import { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import LazyImage from '../../components/visuals/LazyImage';
import classes from './Home.module.css';

export default function Home() {
    useEffect(() => {
        document.title = 'Phideus | Harmonic Information Theory';
    }, []);

    return (
        <Layout>
            <section className={classes.hero}>
                <div className={classes.heroBg}>
                    <LazyImage src="/Para_Sai/assets/backgrounds/HERO_01_drift_frozen.png" alt="Phideus Diagnostic Turning Point" />
                </div>
                <div className={`container ${classes.heroContent}`}>
                    <h1 className={classes.title}>PHIDEUS</h1>
                    <p className={classes.subtitle}>
                        A long-horizon program exploring whether frequency-ratio structure can operate as a portable information domain across heterogeneous signals.
                    </p>
                </div>
            </section>

            <section className={classes.whySection}>
                <div className="container">
                    <div className={classes.whyContainer}>
                        <h2>Why Ratios Matter</h2>
                        <p className={classes.whyText}>
                            If ratio-structured representations transfer reliably across modalities, the same modeling principles can scale from music to speech and biosignals.
                        </p>
                    </div>
                </div>
            </section>

            <section className={classes.thesisSection}>
                <div className="container">
                    <h2>Project Thesis</h2>
                    <div className={`glass-panel ${classes.panel}`}>
                        <p className={classes.thesisText}>
                            Phideus is framed by <strong>Harmonic Information Theory (HIT)</strong> and studies whether ratio-based relational structure can serve as an information layer that transfers across modalities, not just inside one sensor type.
                        </p>
                        <p className={classes.thesisNote}>
                            Cross-modality deep learning is the <em>operational experiment field</em>, not the conceptual endpoint.
                        </p>

                        <div className={classes.hypothesisGrid}>
                            <div className={classes.hypothesisCard}>
                                <h4>H1 - Structure</h4>
                                <p>Real signals contain non-random ratio structure</p>
                                <div className={classes.statusValidated}>Validated</div>
                            </div>
                            <div className={classes.hypothesisCard}>
                                <h4>H2 - Learnability</h4>
                                <p>Neural systems can learn compact ratio-informed representations</p>
                                <div className={classes.statusValidated}>Validated</div>
                            </div>
                            <div className={classes.hypothesisCard}>
                                <h4>H3 - Cross-modality</h4>
                                <p>Ratio structure supports transfer across modalities</p>
                                <div className={classes.statusActive}>In progress (Escalon 1)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.dualitySection}>
                <div className="container">
                    <h2>Program Duality: Two Simultaneous Paths</h2>
                    <p className={classes.thesisText}>
                        Phideus is intentionally built as a double path. Both paths are coupled: theory defines what to test, and model behavior provides the evidence loop.
                    </p>
                    <div className={classes.dualityGrid}>
                        <div className={`glass-panel ${classes.dualityCard}`}>
                            <h3>1. Research Path</h3>
                            <div className={classes.dualityTag}>Theoretical + Empirical</div>
                            <ul>
                                <li>Explore whether ratios carry reusable structure</li>
                                <li>Test that claim across modalities with controlled experiments</li>
                            </ul>
                        </div>
                        <div className={`glass-panel ${classes.dualityCard}`}>
                            <h3>2. AI Model Path</h3>
                            <div className={classes.dualityTag}>Engineering + Capability</div>
                            <ul>
                                <li>Design and train models that learn and operate with ratio logic</li>
                                <li>Move toward ratio-native representations and decision behavior</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.atmosphereSection}>
                <div className={`container ${classes.atmosphereGrid}`}>
                    <div className={classes.atmosphereMedia}>
                        <LazyImage src="/Para_Sai/assets/stylized/fig1_galaxy_umap.png" alt="Stylized galaxy-style UMAP visual" />
                    </div>
                    <div className={`glass-panel ${classes.atmosphereText}`}>
                        <h2>Visual Atmosphere Layer</h2>
                        <p>
                            Stylized visuals are used as narrative support and attention layer while evidence claims remain tied to Class A scientific figures.
                        </p>
                        <p className={classes.atmosphereNote}>Decorative asset (non-evidentiary).</p>
                    </div>
                </div>
            </section>

            <section className={classes.nextSection}>
                <div className={classes.nextBg}>
                    <LazyImage src="/Para_Sai/assets/backgrounds/HERO_02_bridges_separation.png" alt="Phideus Escalon 2 Separation" />
                </div>
                <div className={`container ${classes.nextContent}`}>
                    <h2>What Comes Next</h2>
                    <p className={classes.lead}>Investor and Partner Roadmap</p>
                    <ol className={classes.nextList}>
                        <li>Close Gate 4.5 pending runs for full scheduler-controlled comparison.</li>
                        <li>Enter Gate 5A (descriptor x mechanism sweep) with stronger causal confidence.</li>
                        <li>Build Gate 5B showcase package (13-test scientific validation bundle).</li>
                        <li>Prepare Escalon 2 launch criteria once Escalon 1 closure thresholds are met.</li>
                        <li>Keep both tracks synchronized: advance HIT evidence and ratio-native model capability together.</li>
                    </ol>
                </div>
            </section>
        </Layout>
    );
}
