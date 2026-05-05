import React, { useState, useEffect, useRef } from 'react';
import { 
    LuDownloadCloud, LuClipboardList, LuCpu, LuCalculator, 
    LuCalendarCheck, LuMapPin, LuWrench, LuShieldCheck, 
    LuCreditCard, LuFileText, LuStar, LuLock, 
    LuHistory, LuHeadset, LuGift, LuBuilding 
} from 'react-icons/lu';
import './ProcessSection.css';

const steps = [
    { id: 1, label: 'Download & Onboard', icon: <LuDownloadCloud />, text: 'Get the Pequire app from the Play Store or App Store and complete our quick, secure OTP-based registration in seconds.', layout: 'normal' },
    { id: 2, label: 'Define Your Need', icon: <LuClipboardList />, text: 'Select a service category and describe your issue. You can even upload a photo for our AI to categorize the problem instantly.', layout: 'reverse' },
    { id: 3, label: 'Instant AI Matching', icon: <LuCpu />, text: 'Our intelligent system analyzes your location and the required skills to match you with the perfect verified professional nearby.', layout: 'normal' },
    { id: 4, label: 'Transparent Estimation', icon: <LuCalculator />, text: 'Receive a clear, upfront cost estimate based on the service type and severity—no hidden charges or post-service price surprises.', layout: 'reverse' },
    { id: 5, label: 'Confirm Your Booking', icon: <LuCalendarCheck />, text: 'Review the matched professional\'s profile and ratings, select your preferred time slot, and confirm with a single tap.', layout: 'normal' },
    { id: 6, label: 'Live Professional Tracking', icon: <LuMapPin />, text: 'Watch your technician move in real-time on our integrated map as they navigate to your doorstep with accurate ETA updates.', layout: 'reverse' },
    { id: 7, label: 'Expert Service Execution', icon: <LuWrench />, text: 'The verified professional arrives and performs the job with precision while you receive live progress updates directly through the app.', layout: 'normal' },
    { id: 8, label: 'Quality Verification', icon: <LuShieldCheck />, text: 'Once work is finished, you review the results. Our professionals ensure the workspace is left clean and the issue is fully resolved.', layout: 'reverse' },
    { id: 9, label: 'Secure Digital Payment', icon: <LuCreditCard />, text: 'Pay safely through the app using UPI, Cards, or Net Banking only after you are 100% satisfied with the completed service.', layout: 'normal' },
    { id: 10, label: 'Automated Digital Invoice', icon: <LuFileText />, text: 'Receive an itemized digital invoice and a comprehensive service report instantly on your device for your records and transparency.', layout: 'reverse' },
    { id: 11, label: 'Rate & Provide Feedback', icon: <LuStar />, text: 'Share your experience and rate the professional. Your feedback helps maintain our high community standards and rewards top-tier pros.', layout: 'normal' },
    { id: 12, label: 'Escrow Protection', icon: <LuLock />, text: 'Your payment is held securely in escrow and is only released to the professional once the job is confirmed as successfully completed.', layout: 'reverse' },
    { id: 13, label: 'Access Service History', icon: <LuHistory />, text: 'View all your past bookings, digital invoices, and service reports anytime from your personalized account dashboard.', layout: 'normal' },
    { id: 14, label: '24/7 Dedicated Support', icon: <LuHeadset />, text: 'Our specialized support team is always available to assist with any queries, follow-up maintenance, or service-related questions.', layout: 'reverse' },
    { id: 15, label: 'Refer & Earn Rewards', icon: <LuGift />, text: 'Invite friends or businesses to join the Pequire ecosystem and earn exclusive rewards for every successful first service they book.', layout: 'normal' },
    { id: 16, label: 'Manage Multiple Spaces', icon: <LuBuilding />, text: 'Add and manage multiple addresses like Home, Office, or Business to streamline maintenance for all your properties from one account.', layout: 'reverse' },
];

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
                                <div className="content-image">{step.icon}</div>
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
