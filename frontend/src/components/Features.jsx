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
            title: "Professional Streaks",
            description: "Build confidence with our high-streak professionals. Top-rated providers earn streaks for consistent, reliable, and high-quality service.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Real-Time Tracking",
            description: "Watch your service provider arrive in real-time. Full transparency from the moment they start their journey to your doorstep.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Engagement Rewards",
            description: "Earn reward points for every successful booking. Complete your profile and maintain your own streak to unlock exclusive benefits.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
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
