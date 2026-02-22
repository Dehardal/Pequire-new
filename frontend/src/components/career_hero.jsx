import React from 'react';
import './career_hero.css';

const CareerHero = () => {
    return (
        <section className="career-hero">
            {/* Vertical lines on top of background for extra detail */}
            <div className="hero-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="hero-container">
                <h1 className="hero-headline">
                    Build the future of <span className="pill-shape"></span> home services with us
                </h1>
                <p className="hero-subheadline">
                    Join a fast-growing team that's making household maintenance 
                    simple for millions of Indians.
                </p>
                <div className="hero-actions">
                    <button className="btn btn-primary">View Openings</button>
                    <button className="btn btn-secondary">Join as Provider</button>
                </div>
            </div>
        </section>
    );
};

export default CareerHero;
