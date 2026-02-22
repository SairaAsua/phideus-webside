import Navbar from './Navbar';
import Footer from './Footer';
import classes from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={classes.wrapper}>
            <Navbar />
            <main className={classes.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
