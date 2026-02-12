import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="8" cy="18" r="3" />
                    <circle cx="16" cy="18" r="3" />
                    <path d="M12 8v4M8 15l4-3 4 3" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Lorem ipsum dolor",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M17 7h4v4" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Lorem ipsum dolor",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a4 4 0 1 0-8 0" />
                    <path d="M12 12v4" />
                    <rect x="8" y="14" width="8" height="2" rx="1" />
                    <path d="M10 18h4" />
                    <path d="M7 10h1M16 10h1" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Lorem ipsum dolor",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                    <path d="M9 22h6" />
                    <path d="M12 19v-2" />
                    <path d="M12 7V5" />
                    <path d="M8 8l-1.5-1.5" />
                    <path d="M16 8l1.5-1.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <h2 className="features-title">
                        Lorem ipsum dolor sit amet.
                        <br />
                        Lorem ipsum dolor
                    </h2>
                    <p className="features-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
                        ipsum vitae tortor tristique cursus eu sed sapien.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card-wrapper">
                            <div className="feature-icon-box">
                                {feature.icon}
                            </div>
                            <p className="feature-label">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
