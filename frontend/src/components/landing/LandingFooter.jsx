import React from 'react';
import { Link } from 'react-router-dom';
import './LandingFooter.css';
import Logo from '../../assets/Logo.webp';
import wordmark from '../../assets/wordmark.webp';
import Letters from '../../assets/Letters.webp';


const LandingFooter = () => {
    return (
        <footer className="landing-footer">
            <div className="container footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={Logo} alt="PeQuire Logo" style={{ height: '32px', width: 'auto' }} />
                            <img src={wordmark} alt="PeQuire" className="footer-wordmark" />
                        </Link>
                        <p className="footer-desc">
                            On-demand maintenance and service management, connecting you with verified professionals for every space.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.instagram.com/pequire_services/?hl=en" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="X">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-head">Navigation</div>
                        <Link to="/">Homepage</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/how-to-use">How to Use</Link>
                        <Link to="/careers">Careers</Link>
                    </div>


                    <div className="footer-col">
                        <div className="footer-col-head">For Users</div>
                        <Link to="/how-to-use">How to Use</Link>
                        <Link to="/services">Services Near you</Link>
                        <Link to="/careers">Join as Provider</Link>
                        <a href="#get-app">Download App</a>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-head">Legal Links</div>
                        <a href="#">Privacy & Policy</a>
                        <a href="#">Refund & Cancellation Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Support & Help</a>
                    </div>
                </div>
            </div>

            <div className="footer-arc-wrap">
                <div className="footer-arc"></div>
                <div className="footer-giant-letters" style={{ backgroundImage: `url(${Letters})` }}></div>
            </div>

            <div className="footer-bottom-bar">
                <div className="container footer-bar-inner">
                    <div className="footer-bar-left">
                        <a href="mailto:info@pequire.com">info@pequire.com</a>
                        <a href="tel:+918081158394">+91 8081158394</a>
                    </div>

                    <div className="footer-bar-right">
                        © {new Date().getFullYear()} Pequire Technologies. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
