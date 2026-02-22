import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div className={`container ${classes.navContainer}`}>
                <Link to="/" className={classes.logo}>
                    PHI<span className={classes.accent}>DEUS</span>
                </Link>
                <div className={classes.links}>
                    <Link to="/">Home / Thesis</Link>
                    <Link to="/roadmap">Roadmap</Link>
                    <Link to="/evidence">Evidence</Link>
                    <Link to="/architecture">Architecture</Link>
                </div>
            </div>
        </nav>
    );
}
