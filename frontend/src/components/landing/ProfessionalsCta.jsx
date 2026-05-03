import React from 'react';
import './ProfessionalsCta.css';

const ProfessionalsCta = () => {
    return (
        <section className="pro-conversion-section">
            <div className="container">
                <div className="pro-conv-card">
                    <div className="pro-conv-pattern"></div>
                    <div className="pro-conv-content">
                        <div className="pill-badge-outline pro-pill">
                            <span className="pill-dot blue-dot"></span> FOR PROFESSIONALS
                        </div>
                        <h2 className="pro-conv-headline">Turn your skills into a<br /><span className="text-brand-blue">steady income</span></h2>
                        <p className="pro-conv-sub">Get job requests directly. Manage your schedule. Get paid securely. All from one app.</p>
                        
                        <div className="pro-conv-trust">
                            <div className="pct-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>FREE TO JOIN</span>
                            </div>
                            <div className="pct-sep"></div>
                            <div className="pct-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>FLEXIBLE HOURS</span>
                            </div>
                            <div className="pct-sep"></div>
                            <div className="pct-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>INSTANT PAYOUTS</span>
                            </div>
                        </div>

                        <div className="pro-conv-btns">
                            <a href="/careers" className="btn-primary-lg pro-cta-btn">Join as a Professional</a>
                            <a href="#" className="pro-link">Learn how it works</a>
                        </div>

                    </div>
                </div>

                {/* Why Professionals Choose Pequire */}
                <div className="pro-benefits-section">
                    <h3 className="pro-benefits-heading">Why Professionals choose Pequire</h3>
                    <div className="pro-benefits-grid">
                        <div className="pro-benefit-card reveal">
                            <div className="pbc-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                    <line x1="1" y1="10" x2="23" y2="10"></line>
                                </svg>
                            </div>
                            <h4>Guaranteed Payments</h4>
                            <p>Secure transactions for every job you complete, directly to your account.</p>
                        </div>
                        <div className="pro-benefit-card reveal">
                            <div className="pbc-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <h4>Your Schedule</h4>
                            <p>Work when you want, where you want. Total freedom to you.</p>
                        </div>
                        <div className="pro-benefit-card reveal">
                            <div className="pbc-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                            </div>
                            <h4>Earnings & Analytics Tracker</h4>
                            <p>Track your income, jobs completed, and performance, all together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalsCta;
