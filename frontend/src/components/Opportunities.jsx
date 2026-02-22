import React from 'react';
import './Opportunities.css';

const Opportunities = () => {
    const opportunities = [
        {
            id: 1,
            title: 'Product Manager',
            tags: ['Bangalore', 'Full-time'],
            requirements: [
                'Define product strategy and roadmap',
                'Work with AI team on diagnosis accuracy',
                'Analyze user behavior and metrics',
                '3-5 years product management experience'
            ]
        },
        {
            id: 2,
            title: 'Backend Engineer',
            tags: ['Bangalore', 'Full-time'],
            requirements: [
                'Design and build APIs for mobile apps',
                'Work on real-time matching algorithms',
                'Optimize database queries for scale',
                '2-4 years backend development experience'
            ]
        }
    ];

    const WhyJoin = [
        {
            title: "Meaningful Work",
            text: "We're solving real problems for real people. Every day, you'll help homeowners feel safe and supported in their homes."
        },
        {
            title: "Fast Growth",
            text: "We're expanding to 10 cities this year. Early team members grow quickly into leadership roles."
        },
        {
            title: "Modern Tech Stack",
            text: "Work with AI/ML, real-time systems, and modern development tools. We invest in the latest technology."
        },
        {
            title: "Flexible Work",
            text: "Hybrid model with 3 days in-office, 2 days remote. We value results over hours."
        }
    ];

    return (
        <section className="opportunities-section">
            <div className="opportunities-container">
                <h2 className="section-title">Why Join Pequire</h2>
                <div className="why-join-grid">
                    {WhyJoin.map((item, index) => (
                        <div key={index} className="why-join-card">
                            <h3>{index + 1}. {item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <p className="opportunities-subtitle">Join our team</p>
                <h2 className="opportunities-title">Open Positions</h2>

                <div className="opportunities-grid">
                    {opportunities.map((opportunity) => (
                        <div key={opportunity.id} className="opportunity-card">
                            <h3 className="card-title">{opportunity.title}</h3>
                            <div className="card-tags">
                                {opportunity.tags.map((tag, index) => (
                                    <span key={index} className="tag-pill">{tag}</span>
                                ))}
                            </div>
                            <ul className="card-requirements">
                                {opportunity.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                            <button className="btn btn-primary">Apply Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
