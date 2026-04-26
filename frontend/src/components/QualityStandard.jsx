import React from 'react';
import './QualityStandard.css';
// Using SP_image.webp as placeholder, user should replace with carpenter.png
import QualityImage from '../assets/Quality_image.webp';

const QualityStandard = () => {
    return (
        <section className="quality-section">
            <div className="quality-container">
                <div className="quality-content">
                    <h2 className="quality-title">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor
                    </h2>
                    <p className="quality-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
                        ipsum vitae tortor tristique cursus eu sed sapien.
                    </p>
                    <div className="quality-buttons">
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-secondary">Secondary</button>
                    </div>
                </div>

                <div className="quality-image-wrapper">
                    <div className="quality-blob"></div>
                    <img
                        src={QualityImage}
                        alt="Quality Standard"
                        className="quality-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default QualityStandard;


