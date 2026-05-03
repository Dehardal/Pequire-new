import React from 'react';
import './WhyPequire.css';

const WhyPequire = () => {
    return (
        <section className="why-section" id="why">
            <div className="container why-layout">
                <div className="why-text">
                    <div className="pill-badge-outline solution-badge">
                        <span className="pill-dot blue-dot"></span> WHY PEQUIRE
                    </div>
                    <h2 className="why-title">Not just a service,<br /><span className="text-brand-blue">a promise you<br />can count on</span></h2>
                    <p className="why-sub">Hundreds of home service apps exist. Here's what makes Pequire the one worth trusting.</p>
                    <a href="https://booking.pequire.com" className="btn-primary-lg">Book a Service</a>
                </div>
                <div className="why-grid">
                    <div className="why-card reveal">
                        <div className="why-card-top">
                            <span className="why-num">01</span>
                            <div className="why-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                                </svg>
                            </div>
                        </div>
                        <h4>Curated Selection</h4>
                        <p>We handpick only the top 10% of service professionals through a rigorous multi-step vetting process.</p>
                    </div>
                    <div className="why-card reveal">
                        <div className="why-card-top">
                            <span className="why-num">02</span>
                            <div className="why-icon">
                                <span style={{ fontSize: '20px', fontWeight: 600 }}>₹</span>
                            </div>
                        </div>
                        <h4>Transparent Pricing</h4>
                        <p>No hidden fees or "emergency charges." Get upfront estimates and clear digital invoices for every job.</p>
                    </div>
                    <div className="why-card reveal">
                        <div className="why-card-top">
                            <span className="why-num">03</span>
                            <div className="why-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                    <path d="M16 16v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1" />
                                    <circle cx="12" cy="13" r="3" />
                                </svg>
                            </div>
                        </div>
                        <h4>Dedicated Support</h4>
                        <p>Our helpdesk is active 24/7. From tracking your pro to resolving disputes, we've got your back.</p>
                    </div>
                    <div className="why-card reveal">
                        <div className="why-card-top">
                            <span className="why-num">04</span>
                            <div className="why-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        </div>
                        <h4>Guaranteed Quality</h4>
                        <p>Not satisfied? We'll make it right. Every service booked through Pequire is covered by our quality guarantee.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyPequire;
