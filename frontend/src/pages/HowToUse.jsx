import React from 'react';
import './HowToUse.css';
import ProcessSection from '../components/ProcessSection';
import SpecialFeatures from '../components/SpecialFeatures';
import Footer from '../components/Footer';

const HowToUse = () => {
    return (
        <div className="how-to-use-page">
            <section className="download-hero">
                <div className="keywords-bg-container">
                    <div className="keywords-row">
                        Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1
                    </div>
                    <div className="keywords-row">
                        Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1
                    </div>
                    <div className="keywords-row">
                        Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1 Wordmark 1
                    </div>
                </div>

                <div className="download-content">
                    <h1 className="download-title">Get the Pequire App</h1>
                    <div className="download-buttons">
                        <button className="btn-primary-black">iPhone Download</button>
                        <button className="btn-primary-outline">Android Download</button>
                    </div>
                </div>
            </section>

            <ProcessSection />
            <SpecialFeatures />
            <Footer />
        </div>
    );
};

export default HowToUse;
