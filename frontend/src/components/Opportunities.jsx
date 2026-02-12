import React from 'react';
import './Opportunities.css';

const Opportunities = () => {
    const opportunities = [
        {
            id: 1,
            title: 'Lorem ipsum dolor',
            tags: ['Lorem ipsum', 'Dolor sit'],
            requirements: [
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.'
            ]
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor',
            tags: ['Lorem ipsum', 'Dolor sit'],
            requirements: [
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.'
            ]
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor',
            tags: ['Lorem ipsum', 'Dolor sit'],
            requirements: [
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.'
            ]
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor',
            tags: ['Lorem ipsum', 'Dolor sit'],
            requirements: [
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.'
            ]
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor',
            tags: ['Lorem ipsum', 'Dolor sit'],
            requirements: [
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.'
            ]
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor',
            tags: ['Lorem ipsum', 'Dolor sit'],
            requirements: [
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.',
                'Lorem ipsum dolor sit amet.'
            ]
        }
    ];

    return (
        <section className="opportunities-section">
            <div className="opportunities-container">
                <p className="opportunities-subtitle">Lorem ipsum dolor sit amet.</p>
                <h2 className="opportunities-title">Lorem ipsum dolor sit amet.</h2>

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
                            <button className="card-button">Primary</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
