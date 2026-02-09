import React, { useState } from 'react';
import './HowItWorks.css';

const steps = [
    {
        id: '01',
        title: 'Strategy & Planning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae tortor tristique cursus eu sed sapien.',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
        displayTitle: ['Lorem ipsum', 'dolor sit amet.', 'Lorem ipsum']
    },
    {
        id: '02',
        title: 'Creative Design',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2072&auto=format&fit=crop',
        displayTitle: ['Design Focus', 'creative path.', 'Visuals']
    },
    {
        id: '03',
        title: 'Development',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop',
        displayTitle: ['Pure Code', 'efficient builds.', 'Launch']
    },
    {
        id: '04',
        title: 'Evaluation',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1522812905030-d88691515281?q=80&w=2070&auto=format&fit=crop',
        displayTitle: ['Quality Check', 'final review.', 'Success']
    }
];

const HowItWorks = () => {
    const [activeId, setActiveId] = useState('01');
    const activeStep = steps.find(s => s.id === activeId);

    return (
        <section className="how-section">
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
