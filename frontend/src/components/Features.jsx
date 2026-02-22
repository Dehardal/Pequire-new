import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "AI-Powered Diagnosis",
            description: "Not sure what's broken? Upload a photo and our AI identifies the problem for you. Get the right solution, every time.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Verified Professionals",
            description: "Every service provider is background-checked, trained, and performance-rated. Your home's safety is our priority.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Transparent Pricing",
            description: "See exactly what you'll pay before you book. No hidden charges, no surprises.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 6v2m0 8v2" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Fast Response",
            description: "Most bookings matched with a provider within 15 minutes. Service completed the same day.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <h2 className="features-title">
                        Why choose Pequire
                    </h2>
                    <p className="features-subtitle">
                        Providing the most reliable household services with cutting edge technology.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card-wrapper">
                            <div className="feature-icon-box">
                                {feature.icon}
                            </div>
                            <h3 className="feature-label">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
