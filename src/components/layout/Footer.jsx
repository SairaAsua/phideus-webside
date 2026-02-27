import classes from './Footer.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
    const { language } = useLanguage();
    const labels = {
        freshness: language === 'es' ? 'Actualizado:' : 'Data Freshness:',
        program:
            language === 'es'
                ? 'Programa de investigacion en Teoria Armonica de la Informacion'
                : 'Harmonic Information Theory Research Program'
    };

    return (
        <footer className={classes.footer}>
            <div className={`container ${classes.footerContainer}`}>
                <div className={classes.info}>
                    {labels.program}
                </div>
            </div>
        </footer>
    );
}
