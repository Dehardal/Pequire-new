import React from 'react';
import './LegalPage.css';

const Terms = () => {
    return (
        <div className="legal-page">
            <div className="legal-grid-overlay"></div>
            <div className="legal-bg-glow"></div>
            
            <div className="legal-container">
                <header className="legal-header">
                    <span className="legal-subtitle">The Agreement</span>
                    <h1 className="legal-title">Terms & Conditions</h1>
                    <p className="legal-content">Last updated: May 2026</p>
                </header>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing the Pequire website or mobile applications, you agree to be bound by these terms of service and all applicable laws and regulations.</p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Service Platform</h2>
                        <p>Pequire operates as an AI-powered marketplace connecting households with maintenance professionals. We vet all providers on our platform but users are encouraged to verify task details upon arrival.</p>
                    </section>

                    <section className="legal-section">
                        <h2>3. User Responsibilities</h2>
                        <p>Users must provide accurate information regarding their service needs and location. You are responsible for ensuring a safe working environment for the arriving professional.</p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Payment Terms</h2>
                        <p>All payments must be processed through the Pequire secure payment gateway. Direct cash transactions with providers outside the platform are not covered by the Pequire Quality Guarantee.</p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Intellectual Property</h2>
                        <p>The Pequire name, logo, and all related branding are the exclusive property of Pequire Technologies and may not be used without prior written consent.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
