
import React from 'react';

const Professionals = () => {
  return (
    <section className="pro-section" id="professionals" style={{ padding: "100px 0" }}>
      <div className="container">
        <div className="pro-cta-card reveal">
          <span className="pro-label">FOR PROFESSIONALS</span>
          <h2 className="pro-title">Turn your skills into a<br /><span className="text-brand-blue">steady income</span></h2>
          <p className="pro-sub">Get job requests directly. Manage your schedule. Get paid securely. All from one app.</p>
          <div className="pro-trust-row">
            <div className="pro-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>FREE TO JOIN</span>
            </div>
            <div className="pro-trust-divider"></div>
            <div className="pro-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>FLEXIBLE HOURS</span>
            </div>
            <div className="pro-trust-divider"></div>
            <div className="pro-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>INSTANT PAYOUTS</span>
            </div>
          </div>
          <a href="#" className="btn-primary-lg pro-cta-btn">Join as a Professional</a>
          <a href="#" className="pro-link">Learn how it works</a>
        </div>

        <h3 className="pro-why-heading">Why Professionals choose Pequire</h3>
        <div className="pro-benefits-grid">
          <div className="pro-benefit-card reveal">
            <div className="pro-benefit-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <h4>Guaranteed Payments</h4>
            <p>Secure transactions for every job you complete, directly to your account.</p>
          </div>
          <div className="pro-benefit-card reveal">
            <div className="pro-benefit-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h4>Your Schedule</h4>
            <p>Work when you want, where you want. Total freedom to you.</p>
          </div>
          <div className="pro-benefit-card reveal">
            <div className="pro-benefit-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h4>Earnings &amp; Analytics Tracker</h4>
            <p>Track your income, jobs completed, and performance, all together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
