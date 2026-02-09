import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae tortor tristique cursus eu sed sapien."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae tortor tristique cursus eu sed sapien."
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae tortor tristique cursus eu sed sapien."
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
                        <div key={feature.id} className="feature-card">
                            <div className="feature-number">{feature.id}</div>
                            <h3 className="feature-card-title">{feature.title}</h3>
                            <p className="feature-card-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
