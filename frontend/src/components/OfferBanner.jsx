import React from 'react';
import './OfferBanner.css';
import bannerImage from '../assets/Banner.png';

const OfferBanner = () => {
    return (
        <section className="offer-banner-section">
            {/* Background Blobs */}
            <div className="blob-top-left"></div>
            <div className="blob-bottom-right"></div>

            <div className="offer-container">
                <header className="offer-header">
                    <h2 className="offer-title">
                        Ready to fix your problem?
                    </h2>
                    <p className="offer-description">
                        Join thousands of homeowners who've solved their household 
                        problems with Pequire. Upload your issue and get matched with 
                        a verified professional today.
                    </p>
                    <div className="offer-actions" style={{ marginTop: '2rem' }}>
                        <button className="btn btn-primary">Get Started Now</button>
                        <p className="secondary-text" style={{ 
                            marginTop: '1rem', 
                            fontSize: '0.9rem', 
                            color: 'var(--neutral-400)' 
                        }}>
                            No subscription required. Pay only for services you book.
                        </p>
                    </div>
                </header>

                <div className="offer-image-container">
                    <img
                        src={bannerImage}
                        alt="Offer Featured Banner"
                        className="offer-banner-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default OfferBanner;
