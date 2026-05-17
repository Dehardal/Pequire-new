
import React from 'react';

const AppDownload = () => {
  return (
    <section className="app-section" id="get-app" style={{ background: "#01173B", padding: "100px 0" }}>
      <div className="container app-layout">
        <div className="app-text">
          <div className="pill-badge-outline app-badge-pill">
            <span className="pill-dot" style={{ background: "#34D399" }}></span> GET THE APP
          </div>
          <h2 className="app-heading">Your Problems<br />Sorted, <span className="app-heading-accent">Right<br />from your pocket</span></h2>
          <p className="app-subtitle">Book services, track professionals, and manage payments &mdash; all in one place. Available on iOS and Android.</p>

          <div className="app-badges">
            <a href="#" className="app-badge">
              <svg width="24" height="24" viewBox="0 0 384 512" fill="white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div>
                <div className="app-badge-label">Download on the</div>
                <div className="app-badge-store">App Store</div>
              </div>
            </a>
            <a href="#" className="app-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.414l2.474 1.432c.357.207.578.567.578.982s-.221.775-.578.982l-2.474 1.432-2.547-2.547 2.547-2.281zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              <div>
                <div className="app-badge-label">Get it on</div>
                <div className="app-badge-store">Google Play</div>
              </div>
            </a>
          </div>

          <div className="app-rating-block">
            <div className="app-rating-left">
              <div className="app-rating-number">4.8</div>
              <div className="app-rating-stars">★★★★★</div>
              <div className="app-rating-count">Based on 12k+ reviews</div>
            </div>
            <div className="app-rating-bars">
              <div className="app-bar-row"><span>5</span>
                <div className="app-bar">
                  <div className="app-bar-fill" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="app-bar-row"><span>4</span>
                <div className="app-bar">
                  <div className="app-bar-fill" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div className="app-bar-row"><span>3</span>
                <div className="app-bar">
                  <div className="app-bar-fill" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="app-bar-row"><span>2</span>
                <div className="app-bar">
                  <div className="app-bar-fill" style={{ width: "12%" }}></div>
                </div>
              </div>
              <div className="app-bar-row"><span>1</span>
                <div className="app-bar">
                  <div className="app-bar-fill" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-phones-wrap">
          <div className="phone-shadow phone-shadow-left"></div>
          <div className="phone-shadow phone-shadow-right"></div>

          <div className="phone-device">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="ps-status-bar">
                <span>9:41</span>
                <div className="ps-status-icons">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                  </svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                    <rect x="17" y="4" width="4" height="16" rx="1" />
                    <rect x="11" y="8" width="4" height="12" rx="1" />
                    <rect x="5" y="12" width="4" height="8" rx="1" />
                  </svg>
                  <div className="ps-battery">
                    <div className="ps-battery-fill"></div>
                  </div>
                </div>
              </div>

              <div className="ps-profile">
                <div className="ps-avatar-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <div className="ps-welcome">Welcome back,</div>
                  <div className="ps-username">Alex Johnson</div>
                </div>
                <div className="ps-bell">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <div className="ps-bell-dot"></div>
                </div>
              </div>

              <div className="ps-search">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span>Find a service...</span>
              </div>

              <div className="ps-premium">
                <div className="ps-prem-label">PREMIUM PLAN</div>
                <div className="ps-prem-title">Get 20% off your<br />first cleaning</div>
                <div className="ps-prem-btn">Claim Offer</div>
              </div>

              <div className="ps-services">
                <div className="ps-svc">
                  <div className="ps-svc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.8">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <span>Clean</span>
                </div>
                <div className="ps-svc">
                  <div className="ps-svc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <span>Plumber</span>
                </div>
                <div className="ps-svc">
                  <div className="ps-svc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span>Electric</span>
                </div>
                <div className="ps-svc">
                  <div className="ps-svc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <span>More</span>
                </div>
              </div>

              <div className="ps-active-jobs">
                <div className="ps-jobs-title">Active Jobs</div>
                <div className="ps-job-card">
                  <div className="ps-job-name">House Cleaning</div>
                </div>
              </div>

              <div className="ps-bottom-nav">
                <div className="ps-nav-item active">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  <span>Home</span>
                </div>
                <div className="ps-nav-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Bookings</span>
                </div>
                <div className="ps-nav-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Chat</span>
                </div>
                <div className="ps-nav-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app-trust-strip">
        <div className="app-trust-item">
          <span>Secured Payments</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#34D399" />
            <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="app-trust-divider"></div>
        <div className="app-trust-item">
          <span>Verified Professionals</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#34D399" />
            <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="app-trust-divider"></div>
        <div className="app-trust-item">
          <span>Affordable Cost</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#34D399" />
            <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
