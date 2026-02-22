import React, { useState } from 'react';
import './Testimonials.css';

const testimonialData = [
    {
        id: 1,
        title: 'Priya Sharma',
        subtitle: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
        description: 'Pequire diagnosed my AC issue in seconds. The technician arrived within 30 minutes and fixed it immediately. Impressive!',
    },
    {
        id: 2,
        title: 'Rahul Mehta',
        subtitle: 'Bangalore',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        description: 'Finally, a service app I can trust. The plumber was professional, the pricing was transparent, and the job was done perfectly.',
    },
    {
        id: 3,
        title: 'Anjali Reddy',
        subtitle: 'Hyderabad',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
        description: 'I used the AI diagnosis for an electrical issue. It was spot-on, and I got three quotes within minutes. Highly recommend.',
    },
    {
        id: 4,
        title: 'Vikram Singh',
        subtitle: 'Delhi',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
        description: 'The best service experience I\'ve had. The app is easy to use and the quality of work is top-notch.',
    },
    {
        id: 5,
        title: 'Sneha Kapoor',
        subtitle: 'Pune',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
        description: 'Fast, reliable, and affordable. Pequire is now my go-to for all home maintenance needs.',
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
                            const rotation = (item.id % 2 === 0 ? 5 : -5) * (position + 1) * 0.5;

                            return (
                                <div
                                    key={item.id}
                                    className={`deck-card ${isActive ? 'active' : ''} ${isActive && isFlipped ? 'flipped' : ''}`}
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
