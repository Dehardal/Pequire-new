import React from 'react';
import './HowToUse.css';
import Footer from '../components/Footer';
import ProcessSection from '../components/ProcessSection';

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
                    <h1 className="download-title">Lorem ipsum</h1>
                    <div className="download-buttons">
                        <button className="btn-primary-black">Primary</button>
                        <button className="btn-primary-outline">Primary</button>
                    </div>
                </div>
            </section>

            <ProcessSection />
            <Footer />
        </div>
    );
};

export default HowToUse;
