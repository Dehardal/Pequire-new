import React from 'react';
import './ServicesHero.css';

const ServicesHero = () => {
    return (
        <section className="services-hero">
            <div className="services-hero-container">
                <div className="services-hero-content">
                    <p className="services-hero-subtitle">Lorem ipsum</p>
                    <h1 className="services-hero-title">Lorem ipsum</h1>

                    <div className="services-hero-bottom-grid">
                        <div className="services-hero-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae</p>
                        </div>
                        <div className="services-hero-features">
                            <div className="services-feature-item">
                                <span className="services-feature-bullet"></span>
                                <span className="services-feature-text">tristique cursus en.</span>
                            </div>
                            <div className="services-feature-item">
                                <span className="services-feature-bullet"></span>
                                <span className="services-feature-text">tristique cursus en.</span>
                            </div>
                        </div>
                    </div>

                    <div className="services-hero-actions">
                        <button className="services-btn-primary">Primary</button>
                        <button className="services-btn-secondary">Secondary</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
