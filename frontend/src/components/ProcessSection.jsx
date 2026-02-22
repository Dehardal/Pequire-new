import React, { useState, useEffect, useRef } from 'react';
import './ProcessSection.css';

// Generate 16 steps with alternating layout
// Generate 16 steps with alternating layout
const steps = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    label: `Process Step ${i + 1}`,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum enim sollicitudin, placerat massa sit amet, suscipit ante.',
    layout: i % 2 === 0 ? 'normal' : 'reverse',
}));

const ProcessSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null, // Use Viewport as root for Global Scroll
            rootMargin: '-45% 0px -45% 0px', // Trigger when item is in the exact center 10% band
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        itemRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    // Calculate active dot index (4 steps per dot)
    const activeDotIndex = Math.floor(activeIndex / 4);

    return (
        <section className="process-section">
            <div className="process-wrapper">
                {/* Left Fixed Column (30%) */}
                <div className="process-left-column">
                    <div className="timeline-arc-wrapper">
                        {/* Shifted ViewBox and Path to x=60 (was x=10) */}
                        <svg className="arc-line" viewBox="0 0 300 600" fill="none" preserveAspectRatio="xMinYMid meet">
                            <path
                                d="M 60 50 A 300 300 0 0 1 60 550"
                                stroke="#d0d0d0"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Dots with Active State Logic */}
                        <div className={`fixed-dot dot-1 ${activeDotIndex === 0 ? 'active' : ''}`}>
                            <div className="step-dot" style={{ backgroundColor: '#D4849A' }} />
                            <span className="step-label">Start</span>
                        </div>

                        <div className={`fixed-dot dot-2 ${activeDotIndex === 1 ? 'active' : ''}`}>
                            <div className="step-dot" style={{ backgroundColor: '#9B7DB8' }} />
                            <span className="step-label">Process</span>
                        </div>

                        <div className={`fixed-dot dot-3 ${activeDotIndex === 2 ? 'active' : ''}`}>
                            <div className="step-dot" style={{ backgroundColor: '#98D470' }} />
                            <span className="step-label">Review</span>
                        </div>

                        <div className={`fixed-dot dot-4 ${activeDotIndex === 3 ? 'active' : ''}`}>
                            <div className="step-dot" style={{ backgroundColor: '#8ED8E8' }} />
                            <span className="step-label">End</span>
                        </div>
                    </div>
                </div>

                {/* Right Scrollable Column (70%) */}
                <div className="process-right-column">
                    <div className="process-scroll-container">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                data-index={index}
                                ref={el => itemRefs.current[index] = el}
                                className={`content-row ${step.layout === 'reverse' ? 'reverse' : ''} ${index === activeIndex ? 'active' : ''}`}
                            >
                                <div className="content-image" />
                                <div className="content-text">
                                    <h3>{step.label}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
