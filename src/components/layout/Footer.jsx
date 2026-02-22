import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={`container ${classes.footerContainer}`}>
                <div className={classes.stamp}>
                    <span>Data Freshness:</span> <strong>As of 2026-02-22</strong>
                </div>
                <div className={classes.info}>
                    Harmonic Information Theory Research Program
                </div>
            </div>
        </footer>
    );
}
