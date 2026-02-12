import React, { useState, useEffect } from 'react';
import './Trailrwheel.css';

const testimonials = [
    { id: 1, name: 'Alex Rivera', title: 'Strategy Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', quote: 'Alex is at the top! Strategy is key to our success. Lorem ipsum dolor sit amet.' },
    { id: 2, name: 'Sarah Chen', title: 'Creative Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', quote: ' Sarah brings color to our world. Consectetur adipiscing elit.' },
    { id: 3, name: 'Marcus Bell', title: 'CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', quote: 'Marcus leads with vision. Integer posuere lorem sed sem fermentum.' },
    { id: 4, name: 'Elena Sofia', title: 'Marketing', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop', quote: 'Elena grows our reach. Morbi id ipsum vitae tortor tristique.' },
    { id: 5, name: 'David Kim', title: 'Product', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', quote: 'David builds the future. Lorem ipsum dolor sit amet.' },
    { id: 6, name: 'Jasmine Lee', title: 'Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop', quote: 'Jasmine designs for people. Consectetur adipiscing elit.' },
    { id: 7, name: 'Robert Fox', title: 'Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', quote: 'Robert codes with precision. Integer posuere lorem sed sem.' },
    { id: 8, name: 'Amelia Gray', title: 'Support', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop', quote: 'Amelia supports our users. Morbi id ipsum vitae tortor.' },
    { id: 9, name: 'Liam Wilson', title: 'Sales', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', quote: 'Liam drives our growth. Lorem ipsum dolor sit amet.' },
    { id: 10, name: 'Mia Novak', title: 'Content', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', quote: 'Mia tells our story. Consectetur adipiscing elit.' },
    { id: 11, name: 'Noah Reed', title: 'DevOps', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', quote: 'Noah ensures stability. Integer posuere lorem sed sem.' },
    { id: 12, name: 'Chloe Vance', title: 'Analyst', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop', quote: 'Chloe analyzes the data. Morbi id ipsum vitae tortor.' }
];

const Trailrwheel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [rotation, setRotation] = useState(0);

    const totalSteps = testimonials.length;
    const stepAngle = 360 / totalSteps;

    // Automatic clockwise rotation
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalSteps);
            setRotation((prev) => prev - stepAngle); // -30deg for clockwise visual movement
        }, 3500);

        return () => clearInterval(interval);
    }, [isPaused, stepAngle, totalSteps]);

    // Calculate which index is at the top (12 o'clock)
    // -90 degrees is the top position in standard polar coords
    // currentRotation of wheel affects the virtual position of each item

    const handleAvatarClick = (index) => {
        const targetAngle = index * -stepAngle;
        // Find the closest equivalent angle to the current rotation
        let diff = (targetAngle - rotation) % 360;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        setRotation(rotation + diff);
        setActiveIndex(index);
    };

    return (
        <section className="trailrwheel-section">
            <div className="trailrwheel-header">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <h3>Lorem ipsum dolor</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
                    ipsum vitae tortor tristique cursus eu sed sapien.
                </p>
            </div>

            <div
                className="wheel-display-area"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Visual Arc Line */}
                <div className="wheel-arc-line"></div>

                <div className="wheel-container" style={{ transform: `rotate(${rotation}deg)` }}>
                    {testimonials.map((item, index) => {
                        const itemInitialAngle = (index * stepAngle);
                        const localAngle = itemInitialAngle - 90;
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={item.id}
                                className={`wheel-avatar-box ${isActive ? 'active' : ''}`}
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${localAngle}deg) translate(380px) rotate(${-localAngle - rotation}deg)`
                                }}
                                onClick={() => handleAvatarClick(index)}
                            >
                                <img src={item.image} alt={item.name} className="wheel-avatar-img" />
                            </div>
                        );
                    })}
                </div>

                {/* Trailrwheel Quote Box - Fixed at the bottom of the semi-circle */}
                <div className="trailrwheel-quote-container">
                    <div className="quote-box" key={activeIndex}>
                        <span className="quote-icon-top">“</span>
                        <h4 className="quote-author-name">{testimonials[activeIndex].name}</h4>
                        <p className="quote-text">
                            {testimonials[activeIndex].quote}
                        </p>
                        <span className="quote-icon-bottom">”</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trailrwheel;
