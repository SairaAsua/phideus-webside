import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
    const { language, toggleLanguage } = useLanguage();
    const labels = {
        home: language === 'es' ? 'Inicio / Tesis' : 'Home / Thesis',
        roadmap: language === 'es' ? 'Hoja de ruta' : 'Roadmap',
        evidence: language === 'es' ? 'Evidencia' : 'Evidence',
        architecture: language === 'es' ? 'Arquitectura' : 'Architecture',
        institutional: language === 'es' ? 'Institucional' : 'Institutional'
    };

    return (
        <nav className={classes.navbar}>
            <div className={`container ${classes.navContainer}`}>
                <Link to="/" className={classes.logo}>
                    PHI<span className={classes.accent}>DEUS</span>
                </Link>
                <div className={classes.links}>
                    <Link to="/">{labels.home}</Link>
                    <Link to="/roadmap">{labels.roadmap}</Link>
                    <Link to="/evidence">{labels.evidence}</Link>
                    <Link to="/architecture">{labels.architecture}</Link>
                    <Link to="/institutional">{labels.institutional}</Link>
                </div>
                <button
                    type="button"
                    className={classes.languageButton}
                    aria-label="Cambiar idioma entre espanol e ingles"
                    title={language === 'es' ? 'Cambiar a ingles' : 'Switch to spanish'}
                    onClick={toggleLanguage}
                >
                    <span className={language === 'es' ? classes.activeLanguage : classes.inactiveLanguage}>ES</span>
                    {' | '}
                    <span className={language === 'en' ? classes.activeLanguage : classes.inactiveLanguage}>EN</span>
                </button>
            </div>
        </nav>
    );
}
