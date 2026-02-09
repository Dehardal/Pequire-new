import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Home />} />
                        <Route path="/how-to-use" element={<Home />} />
                        <Route path="/careers" element={<Home />} />
                        <Route path="/contact" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
