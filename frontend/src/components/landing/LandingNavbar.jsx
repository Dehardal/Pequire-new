import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LandingNavbar.css';
import Logo from '../../assets/Logo.webp';
import wordmark from '../../assets/wordmark.webp';


const LandingNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                {/* Logo */}
                <Link to="/" className="landing-logo">
                    <img src={Logo} alt="PeQuire Logo" className="logo-img" />
                    <img src={wordmark} alt="PeQuire" className="logo-wordmark" />
                </Link>


                {/* Links */}
                <ul className="nav-links">
                    <li><Link to="/" className={isActive('/') ? 'active' : ''}>Homepage</Link></li>
                    <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
                    <li><Link to="/how-to-use" className={isActive('/how-to-use') ? 'active' : ''}>How to Use</Link></li>
                    <li><Link to="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</Link></li>
                </ul>



                {/* CTA */}
                <div className="nav-cta">
                    <Link to="/careers" className="btn-nav-outline">Join as Professional</Link>
                    <a href="tel:8081158394" className="btn-nav-primary">Contact Us</a>
                </div>



                {/* Hamburger */}
                <button className={`hamburger ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
                <Link to="/how-to-use" onClick={() => setMobileOpen(false)}>How to Use</Link>
                <Link to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>


                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Link to="/careers" className="btn-nav-outline" style={{ textAlign: 'center' }} onClick={() => setMobileOpen(false)}>Become a Pro</Link>
                    <a href="tel:8081158394" className="btn-nav-primary" style={{ textAlign: 'center' }}>Contact Us</a>
                </div>
            </div>

        </nav>
    );
};

export default LandingNavbar;
