import React from 'react';
import './FeaturesSection.css';

const features = [
    {
        title: 'Verified Professionals Only',
        desc: 'Every technician passes background, identity, and skill verification before being listed on the platform.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
        )
    },
    {
        title: 'Transparent Pricing',
        desc: 'Clear, upfront cost estimates before booking. No hidden charges, no price surprises after the job.',
        icon: <span style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1 }}>₹</span>
    },
    {
        title: 'AI-Based Issue Categorization',
        desc: 'Automatically classify service requests using AI — reducing human error and speeding up job matching.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        )
    },
    {
        title: 'Quick Response',
        desc: "From request to doorstep. We match you with an available professional near you — so you're never waiting long.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
        )
    },
    {
        title: 'Real-Time Tracking',
        desc: 'Live GPS tracking of your technician from dispatch to doorstep, with ETA updates at every stage.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 9c0 4.9-8 11-8 11S4 13.9 4 9a8 8 0 1 1 16 0z"></path>
                <circle cx="12" cy="9" r="2.5"></circle>
            </svg>
        )
    },
    {
        title: 'Secure Digital Payments',
        desc: 'Encrypted payment processing with multiple methods — held in escrow until service is confirmed complete.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        )
    }
];

const FeaturesSection = () => {
    return (
        <section className="features-section" id="features">
            <div className="container">
                <div className="section-head center">
                    <div className="pill-badge-outline solution-badge">
                        <span className="pill-dot blue-dot"></span> OUR FEATURES
                    </div>
                    <h2 className="features-title">Everything you need,<br /><span className="text-brand-blue">nothing you don't</span></h2>
                    <p className="features-subtitle">Pequire connects you with verified professionals to fix, maintain, and manage your spaces quickly, transparently, and reliably.</p>
                </div>
                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="feature-card reveal">
                            <div className="feat-icon">{f.icon}</div>
                            <h4>{f.title}</h4>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
