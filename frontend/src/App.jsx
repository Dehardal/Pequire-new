import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingNavbar from './components/landing/LandingNavbar';
import LandingFooter from './components/landing/LandingFooter';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Services from './pages/Services';
import HowToUse from './pages/HowToUse';
import Privacy from './pages/Privacy';
import RefundPolicy from './pages/RefundPolicy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import './styles/App.css';

function AppContent() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <div className="app">
            <LandingNavbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/how-to-use" element={<HowToUse />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/contact" element={<Home />} />
                </Routes>
            </main>
            <LandingFooter />
        </div>
    );
}


function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;

