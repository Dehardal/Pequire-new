import React from 'react';
import './AppStats.css';
import appMockup from '../assets/App.png';

const AppStats = () => {
    return (
        <section className="app-stats-section">
            {/* Specific Organic Background Curve */}
            <div className="stats-curve-bg"></div>

            <div className="app-stats-container">
                <header className="stats-header">
                    <h2 className="stats-main-title">Lorem ipsum dolor sit amet.</h2>
                </header>

                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">4+</span>
                        <p className="stat-label">Lorem ipsum</p>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">7K+</span>
                        <p className="stat-label">Lorem ipsum</p>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">40K+</span>
                        <p className="stat-label">Lorem ipsum</p>
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
