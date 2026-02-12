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
                    Lorem ipsum dolor <span className="pill-shape"></span> sit amet, adipiscing elit. Morbi id ipsum vitae tortor tristique cursus eu sed sapien.
                </h1>
                <p className="hero-subheadline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae tortor tristique cursus eu sed sapien. Sed pellentesque odio nisi.
                </p>
                <div className="hero-actions">
                    <button className="btn-black">Primary</button>
                    <button className="btn-outline">Secondary</button>
                </div>
            </div>
        </section>
    );
};

export default CareerHero;
