import React from 'react';
import './SolutionTimeline.css';

const steps = [
    { num: '01', title: 'Upload Issue', desc: 'Snap a photo or record a voice/text description of the problem. Our AI categorizes the issue instantly.', icon: 'img' },
    { num: '02', title: 'Get Instant Estimate', desc: 'Receive transparent pricing from matched service professionals — no surprises, no hidden fees.', icon: 'rs' },
    { num: '03', title: 'Confirm Booking', desc: 'Select your preferred professional, time slot, and confirm the job with a single tap.', icon: 'cal' },
    { num: '04', title: 'Track Live', desc: "Follow your technician's real-time location and receive instant updates throughout the service.", icon: 'loc' },
    { num: '05', title: 'Secure Payment', desc: 'Pay digitally after service completion with full invoice documentation and receipts.', icon: 'shield' },
    { num: '06', title: 'Rate & Review', desc: 'Rate your experience to maintain quality standards and help the community.', icon: 'star' }
];

const SolutionTimeline = () => {
    return (
        <section className="solution-section" id="how-it-works">
            <div className="section-bg-grid"></div>
            <div className="container">
                <div className="section-head center">
                    <div className="pill-badge-outline solution-badge">
                        <span className="pill-dot blue-dot"></span> THE SOLUTION
                    </div>
                    <h2 className="solution-title">A Smarter Way to <span className="text-brand-blue">Manage Services</span></h2>
                    <p className="solution-sub">
                        Pequire digitizes the entire service workflow — from issue reporting to completion and payment.
                        Everything is recorded, transparent, and accountable.
                    </p>
                </div>

                <div className="solution-layout">
                    {/* Left: Timeline Steps */}
                    <div className="timeline-steps">
                        <div className="timeline-line"></div>
                        {steps.map((step, index) => (
                            <div key={index} className="timeline-item reveal">
                                <div className="timeline-icon">
                                    {/* Simplified icons for now or port SVGs from index.html */}
                                    <div className="timeline-num">{step.num}</div>
                                </div>
                                <div className="timeline-body">
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Book a Service App Mockup */}
                    <div className="solution-visual">
                        <div className="sol-app-mockup">
                            <div className="sol-mockup-header">
                                <div className="mockup-dots">
                                    <span className="md red"></span>
                                    <span className="md yellow"></span>
                                    <span className="md green"></span>
                                </div>
                                <span className="mockup-title">Book a Service</span>
                                <span></span>
                            </div>
                            <div className="sol-mockup-body">
                                <div className="sol-upload-zone">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#025EF3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                        <polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                    <div className="sol-upload-text">Drop photo or describe issue</div>
                                    <div className="sol-upload-sub">(AI categorizes instantly)</div>
                                </div>

                                <div className="sol-matched-card">
                                    <div className="sol-matched-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#025EF3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
                                        </svg>
                                    </div>
                                    <div className="sol-matched-info">
                                        <div className="sol-matched-title">HVAC- Cooling Issue</div>
                                        <div className="sol-matched-sub">Matched: 3 verified technicians nearby</div>
                                    </div>
                                </div>

                                <div className="sol-estimate-row">
                                    <div className="sol-est-box">
                                        <div className="sol-est-label">Estimated cost</div>
                                        <div className="sol-est-value">₹199-₹399</div>
                                    </div>
                                    <div className="sol-est-box">
                                        <div className="sol-est-label">ETA</div>
                                        <div className="sol-est-value">15mins</div>
                                    </div>
                                </div>
                                <button className="sol-confirm-btn">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Value Proposition Cards */}
                <div className="solution-value-cards reveal">
                    {['Fully Digitized', '100% Transparent', 'Always Accountable'].map((title, i) => (
                        <div key={i} className="value-card">
                            <div className="value-card-left"></div>
                            <div className="value-card-body">
                                <div className="value-card-title">{title}</div>
                                <div className="value-card-sub">
                                    {i === 0 ? 'End-To-End Service Workflow' : i === 1 ? 'Pricing Before You Confirm' : 'Documented, Tracked, Rated'}
                                </div>
                            </div>
                            <div className="value-card-check">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionTimeline;
