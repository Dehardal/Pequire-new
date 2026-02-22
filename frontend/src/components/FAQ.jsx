import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "How do I know what service I need?",
        answer: "Upload a photo of the problem and our AI will identify it for you. If you're still unsure, our customer support team can help."
    },
    {
        question: "Are the service providers verified?",
        answer: "Yes. Every professional on Pequire is background-checked, skill-verified, and performance-rated by previous customers."
    },
    {
        question: "What if I'm not satisfied with the service?",
        answer: "We offer a satisfaction guarantee. If you're not happy, we'll send another professional to fix it at no extra charge."
    },
    {
        question: "How is pricing determined?",
        answer: "Pricing is based on the service category, complexity of the job, and materials required. You'll see the estimate before you book."
    },
    {
        question: "Can I book for a specific date and time?",
        answer: "Yes. You can schedule services up to 7 days in advance or book for immediate service (usually within 1-2 hours)."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, credit/debit cards, and digital wallets. Cash payment can be enabled upon request."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">Common questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
