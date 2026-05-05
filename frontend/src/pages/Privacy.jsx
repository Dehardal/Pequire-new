import React from 'react';
import './LegalPage.css';

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="legal-grid-overlay"></div>
            <div className="legal-bg-glow"></div>
            
            <div className="legal-container">
                <header className="legal-header">
                    <span className="legal-subtitle">Transparency & Trust</span>
                    <h1 className="legal-title">Privacy Policy</h1>
                    <p className="legal-content">Last updated: May 2026</p>
                </header>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. Data Collection</h2>
                        <p>At Pequire, we collect information to provide better services to all our users. This includes:</p>
                        <ul>
                            <li>Profile Information: Name, phone number, and location for service matching.</li>
                            <li>Usage Data: How you interact with our mobile applications and website.</li>
                            <li>Service History: Documentation of maintenance tasks and professional interactions.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>2. How We Use Data</h2>
                        <p>Your data is used primarily to facilitate the matching process between households and verified professionals. We use AI algorithms to ensure the best fit based on proximity, skill, and availability.</p>
                        <p>We do not sell your personal information to third parties. Data is shared with service providers only when a booking is confirmed.</p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Data Security</h2>
                        <p>We implement industry-standard security protocols to protect your information. This includes end-to-end encryption for communication and secure storage for all personal identifiers within the Pequire ecosystem.</p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Your Rights</h2>
                        <p>You have the right to access, update, or delete your personal information at any time through the Pequire user application or by contacting our support team.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
