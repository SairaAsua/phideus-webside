import React from 'react';
import classes from './ScientificFindings.module.css';

export default function ScientificFindings() {
    return (
        <section className={classes.scientificSection}>
            <div className="container">
                <div className={classes.sectionHeader}>
                    <h2>Scientific Findings and Causality</h2>
                    <span className={classes.sectionBadge}>Empirical Observations</span>
                </div>

                <div className={classes.findingsGrid}>

                    {/* Panel 1: Causal Audio Descriptor */}
                    <div className={`glass-panel ${classes.findingCard}`}>
                        <div className={classes.cardHeader}>
                            <span className={classes.cardLabel}>Finding 01</span>
                            <h3>The Audio Descriptor (A4) is Causal</h3>
                        </div>
                        <div className={classes.cardVisual}>
                            <div className={classes.causalDiagram}>
                                <div className={classes.node}>Descriptor Audio (A4)</div>
                                <div className={classes.arrow}>→</div>
                                <div className={classes.nodeActive}>High Performance</div>
                            </div>
                        </div>
                        <div className={classes.cardMetricBox}>
                            <span className={classes.metricValueWarning}>Drop of 75-78pp</span>
                            <span className={classes.metricLabel}>Without A4</span>
                        </div>
                        <div className={classes.cardText}>
                            <p>
                                System collapse: the operational system drops 75-78pp without the A4 descriptor.
                            </p>
                        </div>
                    </div>

                    {/* Panel 2: Representational Alignment */}
                    <div className={`glass-panel ${classes.findingCard}`}>
                        <div className={classes.cardHeader}>
                            <span className={classes.cardLabel}>Finding 02</span>
                            <h3>Duplicated Representational Alignment</h3>
                        </div>
                        <div className={classes.cardVisual}>
                            <div className={classes.alignmentVisual}>
                                <div className={classes.networkViz}>
                                    <span className={classes.networkLabel}>Baseline</span>
                                    <span className={classes.networkScore}>CKA: 0.435</span>
                                </div>
                                <div className={classes.networkArrow}>→</div>
                                <div className={classes.networkVizActive}>
                                    <span className={classes.networkLabel}>Reverse Cross-Attention</span>
                                    <span className={classes.networkScore}>CKA: 0.794</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardMetricBox}>
                            <span className={classes.metricValuePositive}>+82%</span>
                            <span className={classes.metricLabel}>Alignment</span>
                        </div>
                        <div className={classes.cardText}>
                            <p>
                                Reverse Cross-Attention radically improves the geometric similarity between domain representations.
                            </p>
                        </div>
                    </div>

                    {/* Panel 3: MIDI Paradox */}
                    <div className={`glass-panel ${classes.findingCard}`}>
                        <div className={classes.cardHeader}>
                            <span className={classes.cardLabel}>Finding 03</span>
                            <h3>The MIDI Descriptor Paradox (D4)</h3>
                        </div>
                        <div className={classes.cardVisual}>
                            <div className={classes.paradoxVisual}>
                                <div className={classes.scaleSide}>
                                    <span className={classes.scaleWeight}>Regularizer</span>
                                    <span className={classes.scaleLabel}>(Training)</span>
                                </div>
                                <div className={classes.scaleCenter}>⚖️</div>
                                <div className={classes.scaleSide}>
                                    <span className={classes.scaleWeight}>Non-Causal Effect</span>
                                    <span className={classes.scaleLabel}>(Inference)</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardMetricBox}>
                            <span className={classes.metricValueNeutral}>Asymmetric</span>
                            <span className={classes.metricLabel}>Behavior</span>
                        </div>
                        <div className={classes.cardText}>
                            <p>
                                Acts as a regularizer during training but does not have a strong causal effect during inference.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
