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
                    Lorem ipsum dolor sit amet.
                    <br />
                    Lorem ipsum dolor
                </h1>
                <p className="hero-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
                    ipsum vitae tortor tristique cursus eu sed sapien. Sed pellentesque
                    odio nisi.
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
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
                        fill="#FADADD"
                        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
