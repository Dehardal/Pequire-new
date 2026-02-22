import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Wordmark from '../assets/wordmark.png';
import Letters from '../assets/Letters.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container on-light">
                    <div className="footer-info">
                        <div className="footer-logo">
                            <img src={Logo} alt="Pequire Logo" className="footer-logo-img" />
                            <img src={Wordmark} alt="Pequire" className="footer-wordmark-img" />
                        </div>
                        <p className="footer-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae tortor tristique cursus.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon facebook"><FaFacebook /></a>
                            <a href="#" className="social-icon instagram"><FaInstagram /></a>
                            <a href="#" className="social-icon linkedin"><FaLinkedin /></a>
                            <a href="#" className="social-icon twitter">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="x-icon">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="footer-contact-info" style={{ marginTop: '30px', color: '#666', fontSize: '14px', lineHeight: '1.8' }}>
                            <p>Email: support@pequire.com</p>
                            <p>Phone: 1800-123-PEQUIRE (tollfree)</p>
                            <p>Hours: 24/7 Support</p>
                        </div>
                    </div>

                    <div className="footer-grid">
                    <div className="footer-col">
                        <h3>For Users</h3>
                        <ul>
                            <li><NavLink to="/how-to-use">How to Use</NavLink></li>
                            <li><NavLink to="/services">Services Near You</NavLink></li>
                            <li><NavLink to="/careers">Join as Provider</NavLink></li>
                            <li><a href="#">Download App</a></li>
                            <li><a href="#">Help & Support</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/careers">Careers</NavLink></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Refund & Cancellation</a></li>
                            <li><a href="#">Provider Agreement</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="pink-section">
                    <div className="pink-circle-bg"></div>
                    <div 
                        className="huge-image" 
                        style={{ '--mask-url': `url(${Letters})` }}
                        aria-label="Letters Background"
                    />
                </div>
            </div>

            <div className="footer-bottom on-dark">
                <p>&copy; {new Date().getFullYear()} Pequire. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
