import { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import MetricCard from '../../components/evidence/MetricCard';
import DescriptorTable from '../../components/evidence/DescriptorTable';
import LazyImage from '../../components/visuals/LazyImage';
import classes from './Evidence.module.css';

export default function Evidence() {
    useEffect(() => {
        document.title = 'Evidence | Phideus';
    }, []);

    return (
        <Layout>
            <div className={`container ${classes.page}`}>
                <header className={classes.header}>
                    <h1>Escalon 1 Evidence</h1>
                    <p className={classes.lead}>
                        The empirical layer of the TripleScaloneta inside the HIT program. Cross-modality is the experiment field to test the claim that ratio structure supports transfer.
                    </p>
                </header>

                <section className={classes.chronologySection}>
                    <h2>Escalon 1 Chronology (Method Evolution)</h2>
                    <div className={classes.timeline}>
                        <div className={classes.timelineItem}>
                            <div className={classes.timelineDot}>1</div>
                            <div className={classes.timelineContent}>
                                <h3>Early analyzer phase (hash/token style)</h3>
                                <p>Proved feasibility but with limited robustness.</p>
                            </div>
                        </div>
                        <div className={classes.timelineItem}>
                            <div className={classes.timelineDot}>2</div>
                            <div className={classes.timelineContent}>
                                <h3>Transition trigger</h3>
                                <p>Early methods were not stable enough for strict causal comparison.</p>
                            </div>
                        </div>
                        <div className={classes.timelineItem}>
                            <div className={classes.timelineDot}>3</div>
                            <div className={classes.timelineContent}>
                                <h3>BIAS_CONTROL transition</h3>
                                <p>Moved to contrastive neural training, canonical evaluation, and gate logic.</p>
                            </div>
                        </div>
                        <div className={classes.timelineItem}>
                            <div className={classes.timelineDot}>4</div>
                            <div className={classes.timelineContent}>
                                <h3>Current state</h3>
                                <p>Descriptor/mechanism optimization plus scheduler-depth analysis under controlled comparability.</p>
                            </div>
                        </div>
                        <div className={classes.timelineItem}>
                            <div className={classes.timelineDot}>5</div>
                            <div className={classes.timelineContent}>
                                <h3>Dual-path continuity</h3>
                                <p>These results feed both HIT validation and the engineering of ratio-native model behavior.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`glass-panel ${classes.findingsPanel}`}>
                    <h2>Key Findings for Public Communication</h2>
                    <ul className={classes.findingsList}>
                        <li>
                            <strong>Ratio injection improves performance:</strong> <code>d4a4</code> outperforms baseline D0 by <strong>+9.6pp</strong> in 5-epoch screening.
                        </li>
                        <li>
                            <strong>High-efficiency mechanisms:</strong> Reverse cross-attention (<code>a4r</code> family) delivers strongly while staying computationally efficient (~13 min/epoch).
                        </li>
                        <li>
                            <strong>Speed profile (~2.6x train speed):</strong> Reverse-cross-att family (<code>a4r</code>, <code>d4a4r</code>, <code>d4-a4r</code>) runs ~13 min/epoch vs baseline-class ~34 min/epoch. Strategic implication: ratio-driven mechanisms are computationally scalable.
                        </li>
                    </ul>
                </section>

                <section className={`glass-panel ${classes.protocolPanel}`}>
                    <h2>Canonical Comparability Protocol</h2>
                    <ul>
                        <li>Foundation checkpoint: <code>foundation_locked_e25.pt</code></li>
                        <li>Freeze policy: <code>run-d</code></li>
                        <li>Batch size: <code>16</code> | Seed: <code>42</code></li>
                        <li>Structured pool evaluation: <code>pool=256</code>, <code>queries=500</code></li>
                        <li>Primary score: <code>S = min(A2M_R@10, M2A_R@10)</code></li>
                    </ul>
                    <p className={classes.protocolNote}>Rows in the full descriptor table are comparable only under this shared protocol.</p>
                </section>

                <section className={classes.visualsSection}>
                    <h2>Scientific Visual Evidence (Class A)</h2>
                    <div className={classes.visualsGrid}>
                        <div className={classes.visualCard}>
                            <LazyImage src="/Para_Sai/assets/figures/fig_umap_multigate.png" alt="UMAP Multigate Visualization" />
                            <p className={classes.visualCaption}>UMAP Multigate Analysis</p>
                        </div>
                        <div className={classes.visualCard}>
                            <LazyImage src="/Para_Sai/assets/figures/fig_heatmaps_multigate.png" alt="Heatmaps Multigate" />
                            <p className={classes.visualCaption}>Multigate Heatmaps</p>
                        </div>
                        <div className={classes.visualCard}>
                            <LazyImage src="/Para_Sai/assets/figures/fig_similarity_scatter.png" alt="Similarity Scatter" />
                            <p className={classes.visualCaption}>Similarity Scatter Plot</p>
                        </div>
                        <div className={classes.visualCard}>
                            <LazyImage src="/Para_Sai/assets/figures/similarity_matrix.png" alt="Similarity Matrix" />
                            <p className={classes.visualCaption}>Retrieval Similarity Matrix</p>
                        </div>
                        <div className={classes.visualCard}>
                            <LazyImage src="/Para_Sai/assets/figures/umap_modality.png" alt="UMAP Modality" />
                            <p className={classes.visualCaption}>Modality Clustering (UMAP)</p>
                        </div>
                        <div className={classes.visualCard}>
                            <LazyImage src="/Para_Sai/assets/figures/umap_composer.png" alt="UMAP Composer" />
                            <p className={classes.visualCaption}>Composer Separation (UMAP)</p>
                        </div>
                    </div>
                </section>

                <section className={classes.metricsSection}>
                    <h2>Evaluation Metrics and Runs</h2>

                    <h3 className={classes.metricsSubhead}>Closed Results (Screening and 30-Epoch)</h3>
                    <div className={classes.metricsGrid}>
                        <MetricCard title="Gate 4.3 Baseline (D0)" value="60.2%" status="closed" sourceLabel="@5ep" />
                        <MetricCard title="Gate 4.3 Screening (d4a4)" value="69.8%" status="closed" sourceLabel="@5ep (+9.6pp vs D0)" />
                        <MetricCard title="Gate 4.3 Long Run (d4a4)" value="83.6%" status="closed" sourceLabel="@30ep" />
                        <MetricCard title="Gate 4.3 Long Run (a4r)" value="82.0%" status="closed" sourceLabel="@30ep" />
                        <MetricCard title="Gate 4.3 Long Run (d4-a4r)" value="79.8%" status="closed" sourceLabel="@30ep" />
                        <MetricCard title="Gate 4.4 Bridge (t3-wt)" value="79.8%" status="closed" sourceLabel="@30ep" />
                        <MetricCard title="Gate 4.3 Long Run (d4a4r)" value="74.4%" status="closed" sourceLabel="@30ep" />
                        <MetricCard title="Gate 4.4 Long Run (moe-dual)" value="72.6%" status="closed" sourceLabel="@30ep" />
                    </div>

                    <h3 className={classes.metricsSubhead}>Closed Results (60-Epoch Gate 4.5)</h3>
                    <div className={classes.metricsGrid}>
                        <MetricCard title="Gate 4.5 Completed (d4a4)" value="83.8%" status="closed" sourceLabel="All-time Best @60ep" />
                        <MetricCard title="Gate 4.5 Hold (t3-wt)" value="81.2%" status="closed" sourceLabel="@50ep hold" />
                        <MetricCard title="Gate 4.5 Completed (a4r)" value="79.4%" status="closed" sourceLabel="@60ep" />
                        <MetricCard title="Gate 4.5 Baseline (D0)" value="72.8%" status="closed" sourceLabel="@60ep" />
                    </div>

                    <h3 className={classes.metricsSubhead}>Pending Validation</h3>
                    <div className={classes.metricsGrid}>
                        <MetricCard title="Gate 4.5 Queue (d4-a4r)" value="Pending" status="pending" sourceLabel="Cosine stretched @60ep" />
                        <MetricCard title="Gate 4.5 Queue (moe-dual)" value="Pending" status="pending" sourceLabel="Cosine stretched @60ep" />
                        <MetricCard title="Cosine-tail batch" value="Pending" status="pending" sourceLabel="D0, d4a4, a4r, d4-a4r" />
                    </div>
                </section>

                <section className={classes.tableSection}>
                    <DescriptorTable />
                </section>
            </div>
        </Layout>
    );
}
