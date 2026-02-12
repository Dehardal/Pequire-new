import React from 'react';
import './OurServices.css';

const OurServices = () => {
    const services = [
        {
            id: 1,
            title: 'Carpenter',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 2.83l-3.77 3.77a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1.26-1.26a1 1 0 0 1 1.42 1.42l-4.24 4.24a1 1 0 0 1-1.42 0l-8.48-8.48a1 1 0 0 1 0-1.42l4.24-4.24a1 1 0 0 1 1.42 1.42L14.7 6.3z" />
                    <path d="M4.3 19.7l6.4-6.4M2 22l4-4" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Plumber',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                    <path d="M12 2A10 10 0 0 0 2 12M22 12A10 10 0 0 1 12 22" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Electrician',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'Laundry Man',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4H7z" />
                    <circle cx="12" cy="13" r="4" />
                    <path d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    <path d="M7 7h1.5M10 7h.5M12.5 7h.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="our-services-section">
            <div className="our-services-container">
                <div className="our-services-header">
                    <h2 className="our-services-title">LOREM IPSUM<br />DOLOR</h2>
                    <div className="our-services-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ipsum vitae tristique cursus eu sed sapien.</p>
                    </div>
                </div>

                <div className="our-services-grid">
                    {services.map(service => (
                        <div key={service.id} className="our-service-card">
                            <div className="our-service-icon-box">
                                {service.icon}
                            </div>
                            <p className="our-service-name">{service.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
