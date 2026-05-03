import React, { useState, useEffect } from 'react';
import './LandingTestimonials.css';

const TESTIMONIALS = [
    {
        type: 'user', rating: 4,
        quote: '“Saved me during a kitchen emergency. Plumber <span class="testi-hl">arrived in 20 mins.</span>”',
        name: 'Sneha Mishra', loc: 'Kanpur', ini: 'SM'
    },
    {
        type: 'pro', rating: 5,
        quote: '“The platform connects me with genuine clients. I\'ve grown my bookings <span class="testi-hl">by 3x in 6 months.</span>”',
        name: 'Ravi Kumar', loc: 'Delhi', ini: 'RK'
    },
    {
        type: 'user', rating: 5,
        quote: '“Booked an electrician in minutes. Pricing was <span class="testi-hl">completely transparent.</span>”',
        name: 'Priya Sharma', loc: 'Mumbai', ini: 'PS'
    },
    {
        type: 'pro', rating: 5,
        quote: '“Best platform for freelancers. Payments arrive fast and support is <span class="testi-hl">always available.</span>”',
        name: 'Arjun Mehta', loc: 'Pune', ini: 'AM'
    },
    {
        type: 'user', rating: 4,
        quote: '“Was skeptical at first but the carpenter fixed my wardrobe perfectly. <span class="testi-hl">Will definitely reuse!</span>”',
        name: 'Divya Nair', loc: 'Bengaluru', ini: 'DN'
    },
    {
        type: 'pro', rating: 5,
        quote: '“As an AC technician I struggled offline. This app gave me <span class="testi-hl">a steady stream of jobs.</span>”',
        name: 'Suresh Patel', loc: 'Ahmedabad', ini: 'SP'
    }
];

const tileDefs = [
    { c: 1, r: '1/3', cl: 'light' }, { c: 2, r: '1', cl: 'light' }, { c: 2, r: '2/4', cl: 'dark' },
    { c: 3, r: '1/3', cl: 'light' }, { c: 3, r: '3/5', cl: 'dark' }, { c: 4, r: '1', cl: 'light' },
    { c: 4, r: '2/4', cl: 'dark' }, { c: 5, r: '1/4', cl: 'light' }, { c: 5, r: '4/6', cl: 'dark' },
    { c: 6, r: '1/3', cl: 'light' }, { c: 6, r: '3/5', cl: 'dark' }, { c: 7, r: '1', cl: 'light' },
    { c: 7, r: '2/4', cl: 'dark' }, { c: 8, r: '1/3', cl: 'light' }, { c: 8, r: '3', cl: 'dark' },
    { c: 8, r: '4/6', cl: 'dark' }, { c: 9, r: '1', cl: 'light' }, { c: 9, r: '2/4', cl: 'light' },
    { c: 9, r: '4/6', cl: 'dark' }, { c: 10, r: '1/3', cl: 'light' }, { c: 10, r: '3/5', cl: 'dark' },
    { c: 1, r: '4/6', cl: 'dark' }, { c: 2, r: '5/7', cl: 'light' }, { c: 3, r: '6', cl: 'dark' },
    { c: 10, r: '6', cl: 'light' }, { c: 5, r: '6', cl: 'light' }, { c: 7, r: '5/7', cl: 'dark' }
];


const LandingTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;
        setDirection('next');
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setDirection('prev');
    };

    const setDirection = (dir) => {
        setIsAnimating(true);
        setAnimationClass(dir === 'next' ? 'testi-slide-out-next' : 'testi-slide-out-prev');

        setTimeout(() => {
            setCurrentIndex((prev) => {
                if (dir === 'next') return (prev + 1) % TESTIMONIALS.length;
                return (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
            });
            setAnimationClass('testi-slide-in');
        }, 350);

        setTimeout(() => {
            setAnimationClass('');
            setIsAnimating(false);
        }, 850);
    };

    const activeTesti = TESTIMONIALS[currentIndex];

    return (
        <section className="testi-section" id="testimonials">
            <div className="testi-mosaic">
                <div className="testi-tile-grid">
                    {tileDefs.map((t, i) => (
                        <div
                            key={i}
                            className={`testi-tile ${t.cl}`}
                            style={{
                                gridColumn: t.c,
                                gridRow: t.r,
                                animation: `tileFloat ${3.6 + (i % 5) * 0.2}s ease-in-out ${(i * 0.12).toFixed(1)}s infinite alternate`
                            }}
                        ></div>
                    ))}
                </div>
                <div className="testi-mosaic-fade"></div>
            </div>

            <div className="testi-content">
                <div className="pill-badge-outline solution-badge">
                    <span className="pill-dot blue-dot"></span> OUR GOSSIPS
                </div>

                <h2 className="testi-headline">Trusted by homeowners, <span className="text-brand-blue">Loved<br />by professionals</span></h2>
                <p className="testi-subtitle">Trusted by homeowners, Loved by professionals. Real experiences from the people who matter most.</p>


                <div className={`testi-deck-stage ${isAnimating ? 'flipping' : ''}`}>
                    <div className="testi-depth-card td3"></div>
                    <div className="testi-depth-card td2"></div>
                    <div className="testi-depth-card td1"></div>
                    <div className={`testi-flip-wrapper ${animationClass}`}>
                        <div className={`testi-card-face ${activeTesti.type === 'user' ? 'testi-user-card' : 'testi-pro-card'}`}>
                            <div className="testi-card-top">
                                <div>
                                    <div className="testi-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`testi-star ${i < activeTesti.rating ? 'on' : 'off'}`}>★</span>
                                        ))}
                                    </div>
                                    <div className="testi-rating-text">{activeTesti.rating}.0 Ratings</div>
                                </div>
                                <div className={`testi-badge ${activeTesti.type === 'user' ? 'homeowner' : 'professional'}`}>
                                    {activeTesti.type === 'user' ? 'HOMEOWNER' : 'PROFESSIONAL'}
                                </div>
                            </div>
                            <div className="testi-quote" dangerouslySetInnerHTML={{ __html: activeTesti.quote }}></div>
                            <div>
                                <div className="testi-card-divider"></div>
                                <div className="testi-author-row">
                                    <div className="testi-avatar">{activeTesti.ini}</div>
                                    <div>
                                        <div className="testi-author-name">{activeTesti.name}</div>
                                        <div className="testi-author-loc">{activeTesti.loc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testi-dots">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className={`testi-dot ${i === currentIndex ? 'active' : ''} ${t.type === 'pro' ? 'pro-dot' : ''}`}
                            onClick={() => !isAnimating && setDirection(i > currentIndex ? 'next' : 'prev')}
                        ></div>
                    ))}
                </div>

                <div className="testi-btn-row">
                    <button className="testi-btn" onClick={handlePrev}>
                        <span className="testi-btn-icon">←</span> PREV
                    </button>
                    <button className="testi-btn" onClick={handleNext}>
                        NEXT <span className="testi-btn-icon">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LandingTestimonials;
