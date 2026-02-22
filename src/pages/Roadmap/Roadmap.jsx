import { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import classes from './Roadmap.module.css';

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
            </div>
        </Layout>
    );
}
