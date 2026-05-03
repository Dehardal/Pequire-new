import React from 'react';
import './ProblemSection.css';

const ProblemSection = () => {
    return (
        <section className="problem-section" id="problem">
            <div className="section-bg-grid"></div>
            <div className="container">
                <div className="section-head center">
                    <div className="pill-badge-outline danger">
                        <span className="pill-dot red"></span> THE PROBLEM
                    </div>
                    <h2 className="problem-title">Service Management <span className="text-coral">Is Broken</span></h2>
                    <p className="problem-sub">
                        Finding reliable service professionals is time-consuming and uncertain.
                        Pricing lacks transparency, tracking is unavailable, and accountability is missing.
                    </p>
                </div>
                {/* 2x2 Grid */}
                <div className="grid-2x2">
                    <div className="prob-card reveal">
                        <div className="prob-icon-wrap i-red">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <polyline points="9 12 11 14 15 10"></polyline>
                            </svg>
                        </div>


                        <h4>Time-Consuming Discovery</h4>
                        <p>
                            Finding reliable service professionals takes days — word-of-mouth, unreliable listings,
                            and follow-up calls waste valuable time.
                        </p>
                    </div>

                    <div className="prob-card reveal">
                        <div className="prob-icon-wrap i-orange">
                            <span style={{ fontSize: '24px', fontWeight: 500, lineHeight: 1 }}>₹</span>
                        </div>
                        <h4>Zero Pricing Transparency</h4>
                        <p>
                            Quotes vary wildly with no accountability. Surprise charges and hidden fees create
                            frustration and distrust in the market.
                        </p>
                    </div>
                    <div className="prob-card reveal">
                        <div className="prob-icon-wrap i-blue">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 9c0 4.9-8 11-8 11S4 13.9 4 9a8 8 0 1 1 16 0z"></path>
                                <circle cx="12" cy="9" r="2.5"></circle>
                                <path d="M7 23s2-2 5 0 5 0 5 0" strokeDasharray="2 2"></path>
                            </svg>
                        </div>
                        <h4>No Tracking or Accountability</h4>
                        <p>
                            Once a technician is dispatched, there's no visibility. No live tracking, no updates, and no
                            recourse if things go wrong.
                        </p>
                    </div>
                    <div className="prob-card reveal">
                        <div className="prob-icon-wrap i-purple">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="9" y1="21" x2="9" y2="9"></line>
                            </svg>
                        </div>
                        <h4>Fragmented Business Operations</h4>
                        <p>
                            For enterprises, managing multiple vendors across locations without centralized control leads
                            to revenue leakage, delays, and poor documentation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
