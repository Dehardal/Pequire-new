import React from 'react';
import './BentoFeatures.css';

const BentoFeatures = () => {
    return (
        <section className="bento-section">
            <div className="container">
                <div className="section-head center">
                    <div className="pill-badge-outline solution-badge">
                        <span className="pill-dot blue-dot"></span> PLATFORM FEATURES
                    </div>
                    <h2 className="bento-headline">Everything you<br />need, <span className="text-brand-blue">in one tap</span></h2>
                    <p className="bento-subtitle">Powerful tools designed to make service management effortless for everyone.</p>
                </div>

                <div className="bento-main-grid">
                    {/* Smart Booking - Large Left */}
                    <div className="bento-card bento-card-large bento-dark reveal visible">
                        <div className="bento-label">SMART BOOKING</div>
                        <div className="bento-phone-mock">
                            <div className="bento-phone-frame">
                                <div className="bento-phone-screen">
                                    <div className="bp-row"></div>
                                    <div className="bp-row"></div>
                                    <div className="bp-grid">
                                        <div className="bp-block"></div>
                                        <div className="bp-block"></div>
                                        <div className="bp-block"></div>
                                        <div className="bp-block"></div>
                                    </div>
                                    <div className="bp-btn"></div>
                                </div>
                            </div>
                        </div>
                        <p className="bento-caption">Snap a photo. Our AI takes it from there.</p>
                    </div>

                    {/* Right Column */}
                    <div className="bento-right-col">
                        {/* AI Matching */}
                        <div className="bento-card bento-light reveal visible">
                            <div className="bento-label dark-label">AI-MATCHING</div>
                            <div className="bento-mini-mock">
                                <div className="bmm-card">
                                    <div className="bmm-header"></div>
                                    <div className="bmm-line"></div>
                                    <div className="bmm-bar"></div>
                                </div>
                            </div>
                            <p className="bento-caption">Snap problem and Get Solution with AI</p>
                        </div>

                        {/* Live Tracking */}
                        <div className="bento-card bento-blue reveal visible">
                            <div className="bento-label white-label">LIVE-TRACKING</div>
                            <div className="bento-track-mock">
                                <div className="btm-card">
                                    <div className="btm-top">
                                        <div className="btm-avatar"></div>
                                        <div className="btm-bar"></div>
                                    </div>
                                    <div className="btm-bottom">
                                        <span className="btm-eta">ETA 10m</span>
                                        <span className="btm-arriving">Arriving</span>
                                    </div>
                                </div>
                            </div>
                            <p className="bento-caption white-cap">Know exactly where your professional is, every step.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="bento-bottom-row">
                    <div className="bento-app-badge reveal visible">
                        <div className="bab-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                            </svg>
                        </div>
                        <div>
                            <div className="bab-title">Available on iOS & Android</div>
                            <div className="bab-sub">Coming Soon</div>
                        </div>
                    </div>
                    <div className="bento-features-row reveal visible">
                        <div className="bf-item">
                            <div className="bf-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <span>Instant Booking</span>
                        </div>
                        <div className="bf-divider"></div>
                        <div className="bf-item">
                            <div className="bf-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                            </div>
                            <span>Verified Pros</span>
                        </div>
                        <div className="bf-divider"></div>
                        <div className="bf-item">
                            <div className="bf-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                            <span>Secure Payments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoFeatures;
