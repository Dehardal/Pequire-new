import React from 'react';
import './About.css';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-hero-container">
                    <h1 className="about-hero-title">We're making home maintenance simple</h1>
                    <p className="about-hero-subtitle">
                        Pequire was born from a frustrating experience: not knowing who to 
                        call when something breaks at home. We built the solution we wish existed.
                    </p>
                </div>
            </section>

            <section className="about-story">
                <div className="about-container">
                    <h2>Our Story</h2>
                    <div className="story-content">
                        <p>Founded in 2025, Pequire set out to solve a problem every Indian household faces: finding trustworthy professionals for home repairs and maintenance.</p>
                        <p>Traditional options were broken: calling random numbers led to unreliable service, and friends' recommendations weren't always available. We knew there had to be a better way.</p>
                        <p>By combining AI-powered diagnosis with a rigorously vetted provider network, we created a platform that's fast, transparent, and trustworthy.</p>
                    </div>
                </div>
            </section>

            <section className="about-values">
                <div className="about-container">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Trust First</h3>
                            <p>We background-check every provider and guarantee every service. Your home's safety isn't negotiable.</p>
                        </div>
                        <div className="value-card">
                            <h3>Radical Transparency</h3>
                            <p>See pricing before you book. No hidden fees, no surprises.</p>
                        </div>
                        <div className="value-card">
                            <h3>Technology for Good</h3>
                            <p>AI should make life easier, not more complicated. Our tech works in the background so you don't have to think about it.</p>
                        </div>
                        <div className="value-card">
                            <h3>Provider Success</h3>
                            <p>Happy providers deliver better service. We pay fairly and provide tools to help them grow their business.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
