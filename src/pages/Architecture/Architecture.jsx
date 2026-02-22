import { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import classes from './Architecture.module.css';

const coreEvidence = [
    {
        name: 'Main index',
        url: 'https://altermundi.github.io/Phideus/',
        claim: 'Dual encoder branches (audio + MIDI), projection heads to shared embedding space, contrastive-style objective with canonical retrieval evaluation.',
        metric: 'S = min(A2M, M2A) + hard-negative robustness'
    },
    {
        name: 'Cross-att injection',
        url: 'https://altermundi.github.io/Phideus/crossatt',
        claim: 'Reverse cross-attention (a4r family) delivers strong retrieval performance while staying computationally efficient (~13 min/epoch vs ~34 min/epoch baseline-class).',
        metric: 'a4r = 82.0% @ 30ep'
    },
    {
        name: 'MERT + MIDI transformer',
        url: 'https://altermundi.github.io/Phideus/phideus',
        claim: 'Dual descriptor concat (d4a4) achieves the all-time best retrieval result in BIAS_CONTROL (+9.6pp vs baseline D0 at 5ep).',
        metric: 'd4a4 = 83.8% @ 60ep'
    },
    {
        name: 'Hybrid adapter fine-tuning',
        url: 'https://altermundi.github.io/Phideus/bloquea',
        claim: 'Architecture walkthrough. See GitHub Pages for full details.',
        metric: 'See walkthrough'
    }
];

const historicalEvolution = [
    {
        name: 'DANN',
        url: 'https://altermundi.github.io/Phideus/dann',
        claim: 'Architecture walkthrough. See GitHub Pages for full details.',
        metric: 'Historical'
    },
    {
        name: 'HRM',
        url: 'https://altermundi.github.io/Phideus/hrm',
        claim: 'Architecture walkthrough. See GitHub Pages for full details.',
        metric: 'Historical'
    },
    {
        name: 'ConstellationVAE',
        url: 'https://altermundi.github.io/Phideus/constellation',
        claim: 'Architecture walkthrough. See GitHub Pages for full details.',
        metric: 'Historical'
    },
    {
        name: 'JEPA-Lite',
        url: 'https://altermundi.github.io/Phideus/jepa',
        claim: 'Architecture walkthrough. See GitHub Pages for full details.',
        metric: 'Historical'
    },
    {
        name: 'RosetaVAE',
        url: 'https://altermundi.github.io/Phideus/roseta',
        claim: 'Architecture walkthrough. See GitHub Pages for full details.',
        metric: 'Historical'
    }
];

export default function Architecture() {
    useEffect(() => {
        document.title = 'Architecture | Phideus';
    }, []);

    return (
        <Layout>
            <div className={`container ${classes.page}`}>
                <header className={classes.header}>
                    <h1>Architecture Explorer</h1>
                    <p className={classes.lead}>
                        Phideus compares not only descriptors, but also injection mechanisms. This is central to explaining why some descriptors win only with specific integration paths.
                    </p>
                </header>

                <section className={classes.archSection}>
                    <h2>Core Evidence Implementations</h2>
                    <div className={classes.list}>
                        {coreEvidence.map((link) => (
                            <div key={link.name} className={`glass-panel ${classes.archBlock}`}>
                                <div className={classes.archContent}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className={classes.archLink}>
                                        <h3>{link.name} <span className={classes.externalIcon}>↗</span></h3>
                                    </a>
                                    <p className={classes.claim}><strong>Claim:</strong> {link.claim}</p>
                                    <div className={classes.metric}><strong>Metric:</strong> {link.metric}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={classes.archSection}>
                    <h2>Historical Architecture Evolution</h2>
                    <div className={classes.list}>
                        {historicalEvolution.map((link) => (
                            <div key={link.name} className={`glass-panel ${classes.archBlock}`}>
                                <div className={classes.archContent}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className={classes.archLink}>
                                        <h3>{link.name} <span className={classes.externalIcon}>↗</span></h3>
                                    </a>
                                    <p className={classes.claim}><strong>Claim:</strong> {link.claim}</p>
                                    <div className={classes.metric}><strong>Metric:</strong> {link.metric}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
}
