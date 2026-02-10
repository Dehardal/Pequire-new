import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-info">
                        <div className="footer-logo">
                            <div className="logo-icon"></div>
                            <h2>Lorem ipsum</h2>
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
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h3>Navigation</h3>
                            <ul>
                                <li><a href="/">Homepage</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/downloads">Downloads</a></li>
                                <li><a href="/careers">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>For Users</h3>
                            <ul>
                                <li><a href="/how-to-use">How to Use</a></li>
                                <li><a href="/services-near-me">Services Near you</a></li>
                                <li><a href="/join-as-provider">Join as Provider</a></li>
                                <li><a href="/download-app">Download App</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Social Links</h3>
                            <ul>
                                <li><a href="/privacy-policy">Privacy & Policy</a></li>
                                <li><a href="/refund-policy">Refund & Cancellation Policy</a></li>
                                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                                <li><a href="/support">Support & Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="pink-section">
                    <div className="pink-circle-bg"></div>
                    <h1 className="huge-text">Lorem ipsum</h1>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </footer>
    );
};

export default Footer;
