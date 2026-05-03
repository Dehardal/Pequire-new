import React from 'react';
import './ProfessionalsCta.css';

const ProfessionalsCta = () => {
    return (
        <section className="pro-conversion-section">
            <div className="container">
                <div className="pro-conv-card">
                    <div className="pro-conv-pattern"></div>
                    <div className="pro-conv-content">
                        <div className="pill-badge-outline pro-pill">
                            <span className="pill-dot blue-dot"></span> FOR PROFESSIONALS
                        </div>
                        <h2 className="pro-conv-headline">Turn your skills into a<br /><span className="text-brand-blue">steady income</span></h2>
                        <p className="pro-conv-sub">Get job requests directly. Manage your schedule. Get paid securely. All from one app.</p>
                        
                        <div className="pro-conv-btns">
                            <a href="/careers" className="btn-primary-lg">Join as a Provider</a>
                            <a href="#" className="btn-outline-primary-lg">See How it Works</a>
                        </div>

                        <div className="pro-conv-stats">
                            <div className="pcs-item">
                                <div className="pcs-val">300%</div>
                                <div className="pcs-lab">Average Revenue Growth</div>
                            </div>
                            <div className="pcs-sep"></div>
                            <div className="pcs-item">
                                <div className="pcs-val">₹0</div>
                                <div className="pcs-lab">Upfront Lead Cost</div>
                            </div>
                            <div className="pcs-sep"></div>
                            <div className="pcs-item">
                                <div className="pcs-val">24h</div>
                                <div className="pcs-lab">Quick Payment Settlement</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalsCta;
