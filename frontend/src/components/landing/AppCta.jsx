import React from 'react';
import './AppCta.css';

const AppCta = () => {
    return (
        <section className="app-section" id="get-app">
            <div className="container app-layout">
                {/* Left Column */}
                <div className="app-text">
                    <div className="pill-badge-outline app-badge-pill">
                        <span className="pill-dot" style={{ background: '#34D399' }}></span> GET THE APP
                    </div>
                    <h2 className="app-heading">Your Problems<br />Sorted, <span className="app-heading-accent">Right<br />from your pocket</span></h2>
                    <p className="app-subtitle">Book services, track professionals, and manage payments — all in one place. Available on iOS and Android.</p>

                    {/* Download Buttons */}
                    <div className="app-badges">
                        <a href="#" className="app-badge">
                            <div className="app-badge-icon">
                                <svg width="24" height="24" viewBox="0 0 384 512" fill="white">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                </svg>
                            </div>
                            <div>
                                <div className="app-badge-label">Download on the</div>
                                <div className="app-badge-store">App Store</div>
                            </div>
                        </a>
                        <a href="#" className="app-badge">
                            <div className="app-badge-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.414l2.474 1.432c.357.207.578.567.578.982s-.221.775-.578.982l-2.474 1.432-2.547-2.547 2.547-2.281zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
                                </svg>
                            </div>
                            <div>
                                <div className="app-badge-label">Get it on</div>
                                <div className="app-badge-store">Google Play</div>
                            </div>
                        </a>
                    </div>

                    {/* Rating Block */}
                    <div className="app-rating-block">
                        <div className="app-rating-left">
                            <div className="app-rating-number">4.8</div>
                            <div className="app-rating-stars">★★★★★</div>
                            <div className="app-rating-count">Based on 12k+ reviews</div>
                        </div>
                        <div className="app-rating-bars">
                            {[85, 65, 30, 12, 5].map((val, i) => (
                                <div key={i} className="app-bar-row">
                                    <span>{5 - i}</span>
                                    <div className="app-bar">
                                        <div className="app-bar-fill" style={{ width: `${val}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Phone Mockup */}
                <div className="app-phones-wrap">
                    <div className="phone-shadow phone-shadow-left"></div>
                    <div className="phone-shadow phone-shadow-right"></div>

                    <div className="phone-device">
                        <div className="phone-notch"></div>
                        <div className="phone-screen">
                            {/* In-app Mockup Content */}
                            <div className="ps-status-bar">
                                <span>9:41</span>
                                <div className="ps-status-icons">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9z" /></svg>
                                    <div className="ps-battery"></div>
                                </div>
                            </div>

                            <div className="ps-profile">
                                <div className="ps-avatar-circle"></div>
                                <div>
                                    <div className="ps-welcome">Welcome back,</div>
                                    <div className="ps-username">Alex Johnson</div>
                                </div>
                            </div>

                            <div className="ps-search">Find a service...</div>

                            <div className="ps-premium">
                                <div className="ps-prem-label">PREMIUM PLAN</div>
                                <div className="ps-prem-title">Get 20% off your<br />first cleaning</div>
                                <div className="ps-prem-btn">Claim Offer</div>
                            </div>

                            <div className="ps-services">
                                {[
                                    { n: 'Clean', c: '#34D399' },
                                    { n: 'Plumber', c: '#3B82F6' },
                                    { n: 'Electric', c: '#F59E0B' },
                                    { n: 'More', c: '#A78BFA' }
                                ].map((s, i) => (
                                    <div key={i} className="ps-svc">
                                        <div className="ps-svc-icon" style={{ borderColor: s.c }}></div>
                                        <span>{s.n}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="ps-active-jobs">
                                <div className="ps-jobs-title">Active Jobs</div>
                                <div className="ps-job-card">House Cleaning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app-trust-strip">
                {['Secured Payments', 'Verified Professionals', 'Affordable Cost'].map((t, i) => (
                    <React.Fragment key={i}>
                        <div className="app-trust-item">
                            <span>{t}</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#34D399"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.5" /></svg>
                        </div>
                        {i < 2 && <div className="app-trust-divider"></div>}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default AppCta;
