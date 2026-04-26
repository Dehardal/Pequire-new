import React from 'react';
import './AppStats.css';
import appMockup from '../assets/App.webp';

const AppStats = () => {
    return (
        <section className="app-stats-section">
            {/* Specific Organic Background Curve */}
            <div className="stats-curve-bg"></div>

            <div className="app-stats-container">
                <header className="stats-header">
                    <h2 className="stats-main-title">Join thousands of happy homeowners.</h2>
                </header>

                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">4.8★</span>
                        <p className="stat-label">Average Service Rating</p>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">200+</span>
                        <p className="stat-label">Verified Professionals</p>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <p className="stat-label">Successful Services</p>
                    </div>
                </div>

                <div className="mockup-cluster">
                    <img src={appMockup} alt="App Interface Preview" className="mockup-img" />
                </div>
            </div>
        </section>
    );
};

export default AppStats;

