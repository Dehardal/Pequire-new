import React from 'react';
import './Testimonials.css';

const testimonialCards = [
    {
        id: 1,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1581244276891-833938deaa5c?q=80&w=1974&auto=format&fit=crop',
        rotation: -8,
        translateY: 40,
        zIndex: 1
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1504148455328-4972bbf6d482?q=80&w=1974&auto=format&fit=crop',
        rotation: -4,
        translateY: 10,
        zIndex: 2
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1974&auto=format&fit=crop',
        rotation: 0,
        translateY: -20,
        zIndex: 3
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1572916117970-13f9f4a56a68?q=80&w=1974&auto=format&fit=crop',
        rotation: 4,
        translateY: 10,
        zIndex: 2
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1516216628859-9bccecad13fc?q=80&w=1970&auto=format&fit=crop',
        rotation: 8,
        translateY: 40,
        zIndex: 1
    }
];

const Testimonials = () => {
    return (
        <section className="new-testimonials-section">
            <div className="new-testimonials-header">
                <h2 className="new-testimonials-title">Lorem ipsum dolor sit amet.</h2>
                <h3 className="new-testimonials-subtitle">Lorem ipsum dolor</h3>
                <p className="new-testimonials-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
                    ipsum vitae tortor tristique cursus eu sed sapien.
                </p>
            </div>

            <div className="testimonials-cards-container">
                {testimonialCards.map((card) => (
                    <div
                        key={card.id}
                        className="testimonial-polaroid-card"
                        style={{
                            transform: `rotate(${card.rotation}deg) translateY(${card.translateY}px)`,
                            zIndex: card.zIndex
                        }}
                    >
                        <div className="card-image-wrapper">
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className="card-content">
                            <h4 className="card-title">{card.title}</h4>
                            <button className="card-btn-primary">Primary</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
