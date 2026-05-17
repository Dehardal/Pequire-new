
import React from 'react';

const WhyPequire = () => {
  return (
    <section className="why-section" id="why-pequire" style={{ padding: "100px 0" }}>
      <div className="container why-layout">
        <div className="why-text">
          <div className="pill-badge-outline solution-badge">
            <span className="pill-dot blue-dot"></span> WHY PEQUIRE
          </div>
          <h2 className="why-title">Not just a service,<br /><span className="text-brand-blue">a promise you<br />can count on</span></h2>
          <p className="why-sub">Hundreds of home service apps exist. Here's what makes Pequire the one worth trusting.</p>
          <a href="#" className="btn-primary-lg">Book a Service</a>
        </div>
        <div className="why-grid">
          <div className="why-card reveal">
            <div className="why-card-top">
              <span className="why-num">01</span>
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
            </div>
            <h4>We verify, not just list</h4>
            <p>Every professional is background-checked, identity-verified, and skill-tested before appearing on your screen.</p>
          </div>
          <div className="why-card reveal">
            <div className="why-card-top">
              <span className="why-num">02</span>
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
            </div>
            <h4>No price surprises, Ever</h4>
            <p>See the full cost before you confirm. No hidden charges, no additions after the job. What you approve is what you pay.</p>
          </div>
          <div className="why-card reveal">
            <div className="why-card-top">
              <span className="why-num">03</span>
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
            </div>
            <h4>AI that actually works for you</h4>
            <p>Describe your problem or upload a photo. Our AI identifies, categorizes, and matches you with the right professional instantly.</p>
          </div>
          <div className="why-card reveal">
            <div className="why-card-top">
              <span className="why-num">04</span>
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
            </div>
            <h4>You're in control, start to finish</h4>
            <p>Track your professional in real time, know arrival time, and pay only when the job is done to your satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPequire;
