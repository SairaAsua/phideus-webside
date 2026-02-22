import { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import classes from './Roadmap.module.css';

const milestones = [
    { stage: 'Gate 0-2.5', status: 'Closed', message: 'Foundational pipeline and baseline comparability established.' },
    { stage: 'Gate 3 (DANN)', status: 'Closed (NO-GO)', message: 'Adversarial invariance did not provide robust gain.' },
    { stage: 'Gate 4.2', status: 'Closed', message: 'Ratio descriptor benefit depends on injection mechanism.' },
    { stage: 'Gate 4.3', status: 'Closed', message: 'Strong signal from descriptor/mechanism combinations.' },
    { stage: 'Gate 4.4', status: 'Closed', message: 'Major architecture screening completed.' },
    { stage: 'Gate 4.5', status: 'In progress', message: 'Scheduler/depth optimization with mixed outcomes.' },
    { stage: 'Gate 5A / 5B', status: 'Pending', message: 'Full sweep and scientific showcase after 4.5 closure.' }
];

export default function Roadmap() {
    useEffect(() => {
        document.title = 'Roadmap | Phideus';
    }, []);

    return (
        <Layout>
            <div className={`container ${classes.page}`}>
                <header className={classes.header}>
                    <h1>TripleScaloneta Roadmap</h1>
                    <p className={classes.lead}>
                        The experimental ladder for one central question: how much transferable information can ratio structure provide under cross-modality deep learning setups.
                    </p>
                </header>

                <section className={classes.timeline}>
                    <div className={`glass-panel ${classes.step} ${classes.active}`}>
                        <div className={classes.stepHeader}>
                            <h3>Escalon 1</h3>
                            <span className={classes.statusActive}>Active</span>
                        </div>
                        <div className={classes.stepBody}>
                            <p><strong>Domain:</strong> Audio &lt;-&gt; MIDI (MAESTRO)</p>
                            <p><strong>Objective:</strong> Measure ratio-information gain in a high-quality paired benchmark.</p>
                            <p><strong>Progression:</strong> Close Gate 4.5 pending runs and finalize Gate 5 decision package.</p>
                        </div>
                    </div>

                    <div className={`glass-panel ${classes.step}`}>
                        <div className={classes.stepHeader}>
                            <h3>Escalon 2</h3>
                            <span className={classes.statusPlanned}>Planned</span>
                        </div>
                        <div className={classes.stepBody}>
                            <p><strong>Domain:</strong> Speech &lt;-&gt; EGG</p>
                            <p><strong>Objective:</strong> Validate the same ratio logic in a different paired-sensor regime.</p>
                            <p><strong>Condition:</strong> Escalon 1 closure bundle + reproducible mechanism shortlist.</p>
                        </div>
                    </div>

                    <div className={`glass-panel ${classes.step}`}>
                        <div className={classes.stepHeader}>
                            <h3>Escalon 3</h3>
                            <span className={classes.statusPlanned}>Planned</span>
                        </div>
                        <div className={classes.stepBody}>
                            <p><strong>Domain:</strong> ECG &lt;-&gt; PPG</p>
                            <p><strong>Objective:</strong> Stress-test generality of ratio logic in biomedical signals.</p>
                            <p><strong>Condition:</strong> Escalon 2 positive transfer criteria met.</p>
                        </div>
                    </div>
                </section>

                <section className={classes.milestonesSection}>
                    <h2>Escalon 1 Internal Milestones (Gate View)</h2>
                    <div className={classes.milestonesGrid}>
                        {milestones.map((item) => (
                            <div key={item.stage} className={`glass-panel ${classes.milestoneCard}`}>
                                <div className={classes.milestoneTop}>
                                    <h3>{item.stage}</h3>
                                    <span>{item.status}</span>
                                </div>
                                <p>{item.message}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={`glass-panel ${classes.priorities}`}>
                    <h2>Public Priorities (Next 60-90 days)</h2>
                    <ol>
                        <li>Finalize Gate 4.5 pending scheduler runs.</li>
                        <li>Publish Gate 5A comparison matrix (descriptor x mechanism).</li>
                        <li>Build Gate 5B communication package for scientific and investor audiences.</li>
                        <li>Prepare Escalon 2 launch brief with criteria, resources, and expected milestones.</li>
                    </ol>
                </section>
            </div>
        </Layout>
    );
}
