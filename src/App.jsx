import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Roadmap from './pages/Roadmap/Roadmap';
import Evidence from './pages/Evidence/Evidence';
import Architecture from './pages/Architecture/Architecture';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thesis" element={<Home />} /> {/* Routing thesis back to Home which contains it for now */}
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/evidence" element={<Evidence />} />
                <Route path="/architecture" element={<Architecture />} />
            </Routes>
        </Router>
    );
}

export default App;
