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
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor
                    </h2>
                    <p className="offer-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi id ipsum vitae tortor tristique cursus eu sed sapien.
                    </p>
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
