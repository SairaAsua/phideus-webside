import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={`container ${classes.footerContainer}`}>
                <div className={classes.info}>
                    Harmonic Information Theory Research Program
                </div>
            </div>
        </footer>
    );
}
