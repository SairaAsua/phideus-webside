import Layout from '../../components/layout/Layout';
import classes from './Institutional.module.css';

export default function Institutional() {
    return (
        <Layout>
            <div className={`container ${classes.institutionalPage}`}>

                {/* ── HEADER ── */}
                <header className={classes.header}>
                    <span className={classes.headerTag}>Institutional</span>
                    <h1 className={classes.title}>Be Part of This</h1>
                    <p className={classes.lead}>
                        PHIDEUS is an open research program. The scientific questions are genuinely open.
                        The architecture decisions are empirically driven. The next escalons will require
                        people with different skills, different domains, and different ways of seeing.
                    </p>
                </header>

                {/* ── ALTER MUNDI ── */}
                <section className={classes.section}>
                    <h2>About AlterMundi</h2>
                    <div className={`glass-panel ${classes.infoCard}`}>
                        <p>
                            We are <strong>AlterMundi</strong>, a civil association dedicated to exploring and building
                            accessible, community-driven technological infrastructures.
                        </p>
                        <div className={classes.contactBlock}>
                            <p className={classes.contactLabel}>Join the research or collaborate with us:</p>
                            <a href="mailto:info@altermundi.net" className={classes.emailLink}>info@altermundi.net</a>
                        </div>
                    </div>
                </section>

                {/* ── ACKNOWLEDGEMENTS ── */}
                <section className={classes.section}>
                    <h2>Acknowledgements</h2>
                    <div className={`glass-panel ${classes.infoCard} ${classes.ackCard}`}>
                        <p>
                            We extend our profound gratitude to the <strong>Universidad Nacional de Córdoba (UNC)</strong>.
                        </p>
                        <p>
                            The generous provision of computational resources and compute time by the UNC was critical
                            to this phase of the project, allowing our team to accelerate training cycles and reduce
                            an estimated <strong>200 days of work</strong>.
                        </p>
                    </div>
                </section>

                {/* ── REFERENCES ── */}
                <section className={classes.section}>
                    <h2>Bibliography & References</h2>
                    <div className={`glass-panel ${classes.biblioCard}`}>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Dataset</h4>
                            <p className={classes.citation}>
                                Hawthorne, C., Stasyuk, A., Roberts, A., Simon, I., Huang, C.-Z. A., Dieleman, S., Elsen, E., Engel, J., & Eck, D. (2019). Enabling Factorized Piano Music Modeling and Generation with the MAESTRO Dataset. <em>International Conference on Learning Representations (ICLR)</em>.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Audio Backbone</h4>
                            <p className={classes.citation}>
                                Li, Y., Yuan, R., Zhang, G., Ma, Y., Chen, X., Yin, H., Lin, C., Ragni, A., Benetos, E., Gyenge, N., et al. (2024). MERT: Acoustic Music Understanding Model with Large-Scale Self-Supervised Training. <em>International Conference on Learning Representations (ICLR)</em>.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Training Objective</h4>
                            <p className={classes.citation}>
                                Bardes, A., Ponce, J., & LeCun, Y. (2022). VICReg: Variance-Invariance-Covariance Regularization for Self-Supervised Learning. <em>International Conference on Learning Representations (ICLR)</em>.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Optimizer</h4>
                            <p className={classes.citation}>
                                Loshchilov, I., & Hutter, F. (2019). Decoupled Weight Decay Regularization. <em>International Conference on Learning Representations (ICLR)</em>.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Scheduler (cosine / warm restarts)</h4>
                            <p className={classes.citation}>
                                Loshchilov, I., & Hutter, F. (2017). SGDR: Stochastic Gradient Descent with Warm Restarts. <em>International Conference on Learning Representations (ICLR)</em>.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Transformer Base</h4>
                            <p className={classes.citation}>
                                Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention Is All You Need. <em>Advances in Neural Information Processing Systems (NeurIPS)</em>, 30.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Conceptual Antecedent for Reverse Cross-Attention</h4>
                            <p className={classes.citation}>
                                Jaegle, A., Gimeno, F., Brock, A., Zisserman, A., Vinyals, O., & Carreira, J. (2021). Perceiver: General Perception with Iterative Attention. <em>International Conference on Machine Learning (ICML)</em>.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Representational Alignment Metric</h4>
                            <p className={classes.citation}>
                                Kornblith, S., Norouzi, M., Lee, H., & Hinton, G. (2019). Similarity of Neural Network Representations Revisited. <em>International Conference on Machine Learning (ICML)</em>, 3519–3529.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Representational Similarity Framework</h4>
                            <p className={classes.citation}>
                                Kriegeskorte, N., Mur, M., & Bandettini, P. (2008). Representational Similarity Analysis — Connecting the Branches of Systems Neuroscience. <em>Frontiers in Systems Neuroscience</em>, 2, 4.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Linear Probing</h4>
                            <p className={classes.citation}>
                                Alain, G., & Bengio, Y. (2017). Understanding Intermediate Layers Using Linear Classifier Probes. <em>International Conference on Learning Representations (ICLR), Workshop Track</em>.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Embedding Visualization</h4>
                            <p className={classes.citation}>
                                van der Maaten, L., & Hinton, G. (2008). Visualizing Data using t-SNE. <em>Journal of Machine Learning Research</em>, 9, 2579–2605.
                            </p>
                            <p className={classes.citation}>
                                McInnes, L., Healy, J., & Melville, J. (2018). UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction. arXiv:1802.03426.
                            </p>
                        </div>

                        <div className={classes.biblioGroup}>
                            <h4 className={classes.biblioCategory}>Evaluated Architectural Families</h4>
                            <p className={classes.citation}>
                                Perez, E., Strub, F., de Vries, H., Dumoulin, V., & Courville, A. (2018). FiLM: Visual Reasoning with a General Conditioning Layer. <em>AAAI Conference on Artificial Intelligence</em>.
                            </p>
                            <p className={classes.citation}>
                                Shazeer, N., Mirhoseini, A., Maziarz, K., Davis, A., Le, Q., Hinton, G., & Dean, J. (2017). Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer. <em>International Conference on Learning Representations (ICLR)</em>.
                            </p>
                        </div>

                    </div>
                </section>

            </div>
        </Layout>
    );
}
