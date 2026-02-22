import React from 'react';
import './JoinProfessional.css';

const benefits = [
    "Steady flow of customers in your area",
    "Flexible schedule - accept jobs when you want",
    "Digital payment (no cash hassles)",
    "Training and skill certification",
    "Insurance coverage on all jobs"
];

const steps = [
    "Apply online with your skills and experience",
    "We verify your background and skills",
    "Get added to the platform",
    "Start receiving job requests",
    "Earn 70-80% of booking value"
];

const JoinProfessional = () => {
    return (
        <section className="join-pro-section">
            <div className="join-pro-container">
                <div className="join-pro-header">
                    <h2 className="join-pro-title">Grow your business with Pequire</h2>
                    <p className="join-pro-subtitle">Join hundreds of professionals who've increased their earnings by 40% with Pequire.</p>
                </div>

                <div className="join-pro-grid">
                    <div className="join-pro-card">
                        <h3>Benefits</h3>
                        <ul className="benefit-list">
                            {benefits.map((benefit, index) => (
                                <li key={index}>✓ {benefit}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="join-pro-card">
                        <h3>How it works</h3>
                        <ol className="step-list">
                            {steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="join-pro-footer">
                    <div className="earnings-preview">
                        <p>Average earnings per month:</p>
                        <div className="earnings-grid">
                            <span>Plumbers: ₹35k-55k</span>
                            <span>Electricians: ₹30k-50k</span>
                            <span>Carpenters: ₹40k-60k</span>
                        </div>
                    </div>
                    <button className="btn btn-primary">Register as Provider</button>
                </div>
            </div>
        </section>
    );
};

export default JoinProfessional;
