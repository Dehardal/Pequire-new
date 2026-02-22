import React from 'react';
import './Hero.css';
import workersImage from '../assets/SP_image.png';
import toolboxImage from '../assets/toolbox.png';

const Hero = () => {
    return (
        <section className="hero">
            {/* Floating Toolbox Icons */}
            <div className="toolbox toolbox-1">
                <img src={toolboxImage} alt="toolbox" />
            </div>
            <div className="toolbox toolbox-2">
                <img src={toolboxImage} alt="toolbox" />
            </div>
            <div className="toolbox toolbox-3">
                <img src={toolboxImage} alt="toolbox" />
            </div>
            <div className="toolbox toolbox-4">
                <img src={toolboxImage} alt="toolbox" />
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    Your problem, 
                    <br />
                    identified and solved
                </h1>
                <p className="hero-description">
                    AI-powered diagnosis connects you with verified professionals in 
                    minutes. From plumbing to electrical work, get it fixed today.
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">Book a Service</button>
                    <button className="btn btn-secondary">See How It Works</button>
                </div>
                {/* Adding Trust Signal Bar as it's new in the specs */}
                <div className="trust-signal-bar">
                    <span>✓ 500+ Services Completed</span>
                    <span>✓ 200+ Verified Professionals</span>
                    <span>✓ 4.8★ Average Rating</span>
                </div>
            </div>

            {/* Workers Illustration */}
            <div className="workers-container">
                <img
                    src={workersImage}
                    alt="Workers"
                    className="workers-image"
                />
            </div>

            {/* Pink Wave */}
            <div className="wave-container">
                <svg viewBox="0 0 1440 320" className="wave" preserveAspectRatio="none">
                    <path
                        fill="#e8f0fc"
                        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
