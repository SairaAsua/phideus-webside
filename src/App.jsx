import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Roadmap from './pages/Roadmap/Roadmap';
import Evidence from './pages/Evidence/Evidence';
import Architecture from './pages/Architecture/Architecture';
import Institutional from './pages/Institutional/Institutional';
import './index.css';

function App() {
    const configuredBase = (import.meta.env.BASE_URL || '').replace(/\/$/, '');
    const canUseConfiguredBase =
        configuredBase &&
        configuredBase !== '/' &&
        window.location.pathname.startsWith(`${configuredBase}/`);
    const routerBasename = canUseConfiguredBase ? configuredBase : '';

    return (
        <Router basename={routerBasename}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thesis" element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/evidence" element={<Evidence />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/institutional" element={<Institutional />} />
            </Routes>
        </Router>
    );
}

export default App;
