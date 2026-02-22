import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Services from './pages/Services';
import HowToUse from './pages/HowToUse';
import About from './pages/About';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/how-to-use" element={<HowToUse />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
