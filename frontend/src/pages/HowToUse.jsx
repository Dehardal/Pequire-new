import React from 'react';
import './HowToUse.css';
import wordmark from '../assets/wordmark.webp';
import ProcessSection from '../components/ProcessSection';
import SpecialFeatures from '../components/SpecialFeatures';

const HowToUse = () => {
    return (
        <div className="how-to-use-page">
            <section className="download-hero">
                <div className="hero-grid-overlay"></div>
                <div className="hero-bg-fill"></div>
                
                <div className="keywords-bg-container">
                    {[1, 2, 3].map(row => (
                        <div key={row} className="keywords-row">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <img key={i} src={wordmark} alt="" className="bg-wordmark" />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="download-content">
                    <h1 className="download-title">Get the<br /><span className="text-brand-blue">Pequire</span> App</h1>
                    <p className="download-subtitle">On-demand maintenance and service management, connecting you with verified professionals for every space.</p>
                    <div className="download-buttons">
                        <button className="btn-primary-lg">Download for iOS</button>
                        <button className="btn-outline-lg">Download for Android</button>
                    </div>
                </div>
            </section>


            <ProcessSection />
            <SpecialFeatures />
        </div>

    );
};

export default HowToUse;
