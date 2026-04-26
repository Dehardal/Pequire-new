import React from 'react';
import './ProviderCollection.css';
import providerImg from '../assets/Provider.webp';

const ProviderCollection = () => {
    return (
        <section className="provider-section">
            <div className="provider-container">
                <div className="provider-content">
                    <h1 className="provider-title">
                        Lorem ipsum dolor <br />
                        sit amet. Lorem <br />
                        ipsum dolor
                    </h1>
                    <p className="provider-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi id ipsum vitae tortor tristique cursus eu sed sapien.
                    </p>
                    <div className="provider-actions">
                        <button className="btn-primary-black">Primary</button>
                        <button className="btn-secondary-outline">Secondary</button>
                    </div>
                </div>

                <div className="provider-visual">
                    <div className="provider-blob"></div>
                    <img
                        src={providerImg}
                        alt="3D Character Provider"
                        className="provider-character"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProviderCollection;

