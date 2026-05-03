import React from 'react';
import './LandingHero.css';

const LandingHero = () => {
    return (
        <section className="hero">
            <div className="hero-grid-overlay"></div>
            <div className="hero-bg-fill"></div>

            <div className="container hero-layout">
                {/* Left */}
                <div className="hero-text">
                    <div className="pill-badge">
                        <span className="pill-dot" style={{ background: 'var(--blue)' }}></span>
                        <span style={{ color: 'var(--blue)', fontWeight: 700 }}>ON-DEMAND SERVICE PLATFORM</span>
                    </div>
                    <h1>On-Demand<br /><span className="hero-blue">Maintenance</span> <span className="font-light">for</span><br />Homes <span className="font-light">&amp;</span> Businesses</h1>

                    <p className="hero-sub" style={{ maxWidth: '500px', color: '#cbd5e1' }}>
                        Pequire connects you with verified professionals to fix, maintain, and manage your spaces quickly, transparently, and reliably.
                    </p>
                    <div className="hero-btns" style={{ marginTop: '32px', gap: '16px', display: 'flex' }}>
                        <a href="#" className="btn-primary-lg" style={{ padding: '14px 32px', borderRadius: '30px' }}>
                            Book a Service
                        </a>
                        <a href="#how-it-works" className="btn-outline-lg"
                            style={{ padding: '14px 32px', borderRadius: '30px', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                            How it Works
                        </a>
                    </div>
                    <div className="hero-trust" style={{ marginTop: '40px', gap: '24px', color: '#94a3b8', fontSize: '0.85rem', display: 'flex' }}>
                        <div className="trust-badge">
                            <div className="trust-circle-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            Verified Professionals
                        </div>
                        <div className="trust-badge">
                            <div className="trust-circle-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <rect x="3" y="11" width="18" height="11" rx="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            Secure Payments
                        </div>
                        <div className="trust-badge">
                            <div className="trust-circle-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            Real-Time Tracking
                        </div>
                    </div>
                </div>

                {/* Right: App Mockup Card */}
                <div className="hero-visual">
                    <div className="mockup-card glass-panel floating">
                        <div className="mockup-header-top">
                            <div style={{ fontSize: '11px', color: '#cbd5e1' }}>Service Request</div>
                            <div className="pill-badge-sm green">In Progress</div>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>AC Repair</div>

                        <div className="mockup-pro-strip">
                            <div className="mock-av" style={{ backgroundImage: "url('https://i.pravatar.cc/150?img=11')" }}></div>
                            <div className="mock-pro-mid">
                                <div className="pro-n">Rajesh Singh <span style={{ color: '#00e880' }}>✓</span></div>
                                <div className="pro-t">Electrician</div>
                                <div className="pro-r">
                                    <span style={{ color: '#f5a623' }}>★★★★★</span> 4.9
                                </div>
                            </div>
                            <div className="mock-pro-eta">
                                <div>ETA</div>
                                <strong>12 MIN</strong>
                            </div>
                        </div>

                        {/* Route Map Container */}
                        <div className="mockup-map-container dark-map">
                            <div className="map-placeholder">
                                <svg className="route-line" preserveAspectRatio="none" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 20 80 L 40 70 L 60 90 L 80 85 L 120 60 L 140 60" fill="none" stroke="#025EF3" strokeWidth="2.5" />
                                    <path d="M 20 80 L 40 70 L 60 90 L 80 85 L 120 60 L 140 60" fill="none" stroke="#3B82F6" strokeWidth="1" filter="blur(2px)" />
                                    <path d="M 140 60 C 150 50, 160 30, 180 20" fill="none" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4,4" />
                                </svg>
                                <div className="map-eta-badge">12 MIN</div>

                                <div className="map-pin drop-pin">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#fff" />
                                    </svg>
                                </div>
                                <div className="map-node node-start">
                                    <div className="node-ring"></div>
                                    <div className="node-core"></div>
                                </div>
                                <div className="map-node node-end">
                                    <div className="node-ring"></div>
                                    <div className="node-core"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mockup-progress tracker-line">
                            <div className="progress-steps text-xs" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                <div className="prog-step done">
                                    <div className="prog-dot-icon">●</div><span>Booked</span>
                                </div>
                                <div className="prog-line done"></div>
                                <div className="prog-step done">
                                    <div className="prog-dot-icon">●</div><span>Assigned</span>
                                </div>
                                <div className="prog-line done"></div>
                                <div className="prog-step done">
                                    <div className="prog-dot-icon">●</div><span>On Route</span>
                                </div>
                                <div className="prog-line active"></div>
                                <div className="prog-step active">
                                    <div className="prog-dot-icon active-ring"></div><span style={{ color: '#fff' }}>Working</span>
                                </div>
                                <div className="prog-line default"></div>
                                <div className="prog-step">
                                    <div className="prog-dot-icon empty"></div><span>Completed</span>
                                </div>
                            </div>
                        </div>

                        <div className="mockup-footer-bot">
                            <div>
                                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Service Type</div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>AC Repair & Servicing</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Estimated Cost</div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>₹1,200</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating stats */}
                    <div className="float-stat glass-float stat-top-left floating-slow">
                        <div>
                            <div className="stat-mini-label">Active Providers</div>
                            <div className="stat-mini-val">200+</div>
                            <div className="stat-mini-sub" style={{ color: '#00e880', fontWeight: 600 }}>Nearby</div>
                        </div>
                    </div>

                    <div className="float-stat glass-float stat-bottom-right floating-slower">
                        <div>
                            <div className="stat-mini-label">Service Done</div>
                            <div className="stat-mini-val">40K+</div>
                            <div className="stat-mini-sub">This Month</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingHero;
