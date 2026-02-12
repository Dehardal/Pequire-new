import React, { useState } from 'react';
import './Testimonials.css';

const testimonialData = [
    {
        id: 1,
        title: 'Lorem ipsum',
        subtitle: 'dolor',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
        description: 'Exceptional craftsmanship and attention to detail. The custom cabinets exceeded my expectations.',
    },
    {
        id: 2,
        title: 'Lorem ipsum',
        subtitle: 'dolor',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
        description: 'Fast, professional, and reliable. Fixed our leak in no time and left everything spotless.',
    },
    {
        id: 3,
        title: 'Lorem ipsum',
        subtitle: 'dolor',
        image: 'https://images.unsplash.com/photo-1581092160562-40ca08e59814?q=80&w=2070&auto=format&fit=crop',
        description: 'Highly skilled electrician. Upgraded our entire panel safely and efficiently. Highly recommended!',
    },
    {
        id: 4,
        title: 'Lorem ipsum',
        subtitle: 'dolor',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop',
        description: 'The most convenient laundry service I’ve ever used. Clothes come back fresh and perfectly folded.',
    },
    {
        id: 5,
        title: 'Lorem ipsum',
        subtitle: 'dolor',
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop',
        description: 'Sparkling clean results every single time. Their team is thorough, polite, and very professional.',
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Automatic infinite loop - User requested 1.5sec
    React.useEffect(() => {
        let interval;
        if (isAutoPlaying && !isFlipped) {
            interval = setInterval(() => {
                handleNext();
            }, 1500); // 1.5s interval
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, isFlipped, currentIndex]);

    const handleCardClick = (index) => {
        if (index === currentIndex) {
            setIsFlipped(!isFlipped);
            setIsAutoPlaying(isFlipped);
        } else {
            setIsFlipped(false);
            setTimeout(() => {
                setCurrentIndex(index);
            }, 300);
        }
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
        }, 300);
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
        }, 300);
    };

    // Swipe logic
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) handleNext();
        if (isRightSwipe) handlePrev();
    };

    return (
        <section
            className="testimonials-section"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => !isFlipped && setIsAutoPlaying(true)}
        >
            <div className="testimonials-header">
                <h1 className="testimonials-title">Lorem ipsum dolor sit amet.</h1>
                <h2 className="testimonials-subtitle">Lorem ipsum dolor</h2>
                <p className="testimonials-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
                    ipsum vitae tortor tristique cursus eu sed sapien.
                </p>
            </div>

            <div
                className="deck-outer-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleTouchStart}
                onMouseMove={(e) => touchStart && handleTouchMove(e)}
                onMouseUp={() => { handleTouchEnd(); setTouchStart(null); }}
                onMouseLeave={() => { setTouchStart(null); }}
            >
                <div className="deck-container">
                    {/* Section Level Navigation Buttons - Now flanking the stack */}
                    <button className="abs-nav-btn prev" onClick={handlePrev}>←</button>
                    <button className="abs-nav-btn next" onClick={handleNext}>→</button>

                    <div className="deck-stage">
                        {testimonialData.map((item, index) => {
                            let position = (index - currentIndex + testimonialData.length) % testimonialData.length;
                            const isActive = position === 0;
                            // Identify the card that just left the front and is moving to the back
                            const isMovingBack = position === testimonialData.length - 1;
                            const rotation = (item.id % 2 === 0 ? 5 : -5) * (position + 1) * 0.5;

                            return (
                                <div
                                    key={item.id}
                                    className={`deck-card ${isActive ? 'active' : ''} ${isActive && isFlipped ? 'flipped' : ''} ${isMovingBack ? 'moving-back' : ''}`}
                                    style={{
                                        '--position': position,
                                        '--rotation': `${rotation}deg`,
                                        zIndex: testimonialData.length - position
                                    }}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className="card-content">
                                                <div className="card-text-top">
                                                    <span className="card-title">{item.title}</span>
                                                    <br />
                                                    <span className="card-subtitle">{item.subtitle}</span>
                                                </div>
                                                <div className="card-image-wrapper">
                                                    <img src={item.image} alt={item.title} draggable="false" />
                                                </div>
                                                <div className="card-footer">
                                                    <span className="footer-label">Primary</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="card-back-content">
                                                <div className="quote-icon">“</div>
                                                <p className="card-description">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
