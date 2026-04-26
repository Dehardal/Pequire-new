import React, { useState } from 'react';
import './HowItWorks.css';

const steps = [
    {
        id: '01',
        title: 'Upload the Problem',
        description: "Take a photo or describe what's broken. Our AI analyzes it instantly.",
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a4e5190?q=80&w=2070&auto=format&fit=crop',
        displayTitle: ['Fix anything', 'in 4 simple steps']
    },
    {
        id: '02',
        title: 'Get Instant Diagnosis',
        description: 'We identify the issue and suggest the right service category with a price estimate.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
        displayTitle: ['Fix anything', 'in 4 simple steps']
    },
    {
        id: '03',
        title: 'Book a Professional',
        description: 'Choose from verified providers near you. See their ratings, experience, and availability.',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop',
        displayTitle: ['Fix anything', 'in 4 simple steps']
    },
    {
        id: '04',
        title: 'Complete & Rate to Earn',
        description: 'Your provider fixes the problem. Rate the service to build your streak and earn reward points for future discounts!',
        image: 'https://images.unsplash.com/photo-1504148455328-497c596d2290?q=80&w=2070&auto=format&fit=crop',
        displayTitle: ['Fix anything', 'in 4 simple steps']
    }
];

const HowItWorks = () => {
    const [activeId, setActiveId] = useState('01');
    const activeStep = steps.find(s => s.id === activeId);

    return (
        <section className="how-section" id="how-it-works">
            <div className="how-container">
                {/* Steps Grid */}
                <div className="steps-grid">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`step-column ${activeId === step.id ? 'active' : ''}`}
                            onClick={() => setActiveId(step.id)}
                        >
                            <div className="step-number">{step.id}</div>
                            <div className="step-image-wrapper">
                                <img src={step.image} alt={`Step ${step.id}`} className="step-image" />
                            </div>
                            <div className="step-caption">{step.title}</div>
                        </div>
                    ))}
                </div>

                {/* Info Content */}
                <div className="how-content">
                    <h2 className="how-title">
                        {activeStep.displayTitle.map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h2>
                    <p className="how-description">
                        {activeStep.description}
                    </p>
                    <button className="btn-primary-custom">Primary</button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
