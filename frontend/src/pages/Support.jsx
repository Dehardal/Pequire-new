import React from 'react';
import './LegalPage.css';

const Support = () => {
    return (
        <div className="legal-page">
            <div className="legal-grid-overlay"></div>
            <div className="legal-bg-glow"></div>
            
            <div className="legal-container">
                <header className="legal-header">
                    <span className="legal-subtitle">We're Here for You</span>
                    <h1 className="legal-title">Support & Help</h1>
                    <p className="legal-content">Need assistance? Our support ecosystem is designed to resolve issues in real-time.</p>
                </header>

                <div className="legal-content">
                    <section className="legal-section">
                        <h2>1. In-App Support</h2>
                        <p>For immediate assistance with an ongoing booking, use the 'Help Center' within the Pequire mobile application. Our AI chatbot and live agents are available 24/7.</p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Common Topics</h2>
                        <ul>
                            <li>Booking Status: Track your professional in real-time through the 'My Bookings' tab.</li>
                            <li>Payment Issues: View invoices and manage payment methods in the 'Wallet' section.</li>
                            <li>Account Access: Update your profile, phone number, and primary location settings.</li>
                            <li>Service Quality: Report any issues with a completed task through the rating and feedback system.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. Contact Channels</h2>
                        <p>Prefer to speak with us? Reach out through any of our official channels:</p>
                        <ul>
                            <li>Email: info@pequire.com</li>
                            <li>Phone: +91 8081158394</li>
                            <li>Hours: Monday – Sunday, 9:00 AM – 9:00 PM</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Community & FAQs</h2>
                        <p>Join our community on social media to stay updated on new features and maintenance tips for your space.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Support;
