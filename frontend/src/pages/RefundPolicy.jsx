import React from 'react';
import './LegalPage.css';

const RefundPolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-grid-overlay"></div>
            <div className="legal-bg-glow"></div>
            
            <div className="legal-container">
                <header className="legal-header">
                    <span className="legal-subtitle">Fair Play</span>
                    <h1 className="legal-title">Refund & Cancellation</h1>
                    <p className="legal-content">Last updated: May 2026</p>
                </header>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. Service Cancellations</h2>
                        <p>We understand that plans change. You can cancel your service booking through the Pequire app under the following conditions:</p>
                        <ul>
                            <li>Free Cancellation: Up to 2 hours before the scheduled service time.</li>
                            <li>Late Cancellation: A small convenience fee may apply if cancelled within 2 hours of the appointment.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>2. Refund Eligibility</h2>
                        <p>Refunds are processed in the following scenarios:</p>
                        <ul>
                            <li>Provider No-Show: If the assigned professional fails to arrive at the scheduled time.</li>
                            <li>Technical Errors: Double payments or system glitches during checkout.</li>
                            <li>Unsatisfactory Resolution: If a service issue cannot be resolved by our quality assurance team.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. Processing Time</h2>
                        <p>Approved refunds are typically processed within 5-7 business days and will be credited back to your original payment method.</p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Dispute Resolution</h2>
                        <p>If you have any issues with a service performed, please raise a ticket through the 'Support & Help' section within 24 hours of completion.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
