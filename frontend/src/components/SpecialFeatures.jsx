import React from 'react';
import './SpecialFeatures.css';

const features = [
    {
        title: "Emergency Service",
        description: "Need help right now? Enable 'Emergency Mode' and we'll prioritize your request, matching you with the nearest available provider within minutes.",
        icon: "⚡"
    },
    {
        title: "Scheduled Maintenance",
        description: "Set up recurring services (weekly cleaning, monthly AC service) and never worry about forgetting. We remind you and auto-book your preferred provider.",
        icon: "📅"
    },
    {
        title: "Multi-Service Booking",
        description: "Need multiple services? Add them to your cart and book them together. Providers can coordinate to complete everything in one visit.",
        icon: "🛒"
    }
];

const SpecialFeatures = () => {
    return (
        <section className="special-features-section">
            <div className="special-features-container">
                <h2 className="special-features-title">Special Features</h2>
                <div className="special-features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="special-feature-card">
                            <div className="special-feature-icon">{feature.icon}</div>
                            <h3 className="special-feature-name">{feature.title}</h3>
                            <p className="special-feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialFeatures;
