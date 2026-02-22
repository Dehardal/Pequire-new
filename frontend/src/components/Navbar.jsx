import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import Wordmark from '../assets/wordmark.png';

const Navbar = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 150) {
            // Always show at the top
            setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
            // Hiding when scrolling down past threshold
            setIsVisible(false);
        } else {
            // Showing when scrolling up from anywhere
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${!isVisible ? 'navbar--hidden' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={Logo} alt="Pequire Logo" className="navbar-logo-img" />
                    <img src={Wordmark} alt="Pequire" className="navbar-wordmark-img" />
                </Link>

                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className={`navbar-link ${isActive('/services') ? 'active' : ''}`}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/how-to-use" className={`navbar-link ${isActive('/how-to-use') ? 'active' : ''}`}>
                            How to Use
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className={`navbar-link ${isActive('/careers') ? 'active' : ''}`}>
                            Careers
                        </Link>
                    </li>
                </ul>

                <Link to="/contact" className="navbar-btn">
                    Contact Us
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
