import React from 'react';
import './ServicesHero.css';

const ServicesHero = () => {
    return (
        <section className="services-hero">
            <div className="services-hero-container">
                <div className="services-hero-content">
                    <p className="services-hero-subtitle">High Quality Help</p>
                    <h1 className="services-hero-title">Professional services for every household need</h1>

                    <div className="services-hero-bottom-grid">
                        <div className="services-hero-description">
                            <p>From emergency repairs to regular maintenance, our verified professionals handle it all. Fast, reliable, and transparent.</p>
                        </div>
                    </div>

                    <div className="services-hero-actions">
                        <button className="services-btn-primary">Explore All Services</button>
                        <button className="services-btn-secondary">Book a Consultation</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
