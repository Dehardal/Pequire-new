
import React from 'react';

const Solution = () => {
  return (
    <section className="solution-section" id="how-it-works" style={{ padding: "100px 0" }}>
      <div className="container">
        <div className="section-head center">
          <div className="pill-badge-outline solution-badge">
            <span className="pill-dot blue-dot"></span> THE SOLUTION
          </div>
          <h2 className="solution-title">A Smarter Way to <span className="text-brand-blue">Manage Services</span></h2>
          <p className="solution-sub">Pequire digitizes the entire service workflow &mdash; from issue reporting completion and payment. Everything is recorded, transparent, and accountable.</p>
        </div>

        <div className="solution-layout">
          <div className="timeline-steps">
            <div className="timeline-line"></div>

            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div className="timeline-body">
                <div className="timeline-num">01</div>
                <h4>Upload Issue</h4>
                <p>Snap a photo or record a voice/text description of the problem. Our AI categorizes the issue instantly.</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <span style={{ fontSize: "18px", fontWeight: "500", lineHeight: "1" }}>&#8377;</span>
              </div>
              <div className="timeline-body">
                <div className="timeline-num">02</div>
                <h4>Get Instant Estimate</h4>
                <p>Receive transparent pricing from matched service professionals &mdash; no surprises, no hidden fees.</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="timeline-body">
                <div className="timeline-num">03</div>
                <h4>Confirm Booking</h4>
                <p>Select your preferred professional, time slot, and confirm the job with a single tap.</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 9c0 4.9-8 11-8 11S4 13.9 4 9a8 8 0 1 1 16 0z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
              </div>
              <div className="timeline-body">
                <div className="timeline-num">04</div>
                <h4>Track Live</h4>
                <p>Follow your technician's real-time location and receive instant updates throughout the service.</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="timeline-body">
                <div className="timeline-num">05</div>
                <h4>Secure Payment</h4>
                <p>Pay digitally after service completion with full invoice documentation and receipts.</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="timeline-body">
                <div className="timeline-num">06</div>
                <h4>Rate &amp; Review</h4>
                <p>Rate your experience to maintain quality standards and help the community.</p>
              </div>
            </div>
          </div>

          <div className="solution-visual">
            <div className="sol-app-mockup">
              <div className="sol-mockup-header">
                <div className="mockup-dots">
                  <span className="md red"></span>
                  <span className="md yellow"></span>
                  <span className="md green"></span>
                </div>
                <span className="mockup-title">Book a Service</span>
                <span></span>
              </div>
              <div className="sol-mockup-body">
                <div className="sol-upload-zone">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#025EF3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <div className="sol-upload-text">Drop photo or describe issue</div>
                  <div className="sol-upload-sub">(AI categorizes instantly)</div>
                </div>

                <div className="sol-matched-card">
                  <div className="sol-matched-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#025EF3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <div className="sol-matched-info">
                    <div className="sol-matched-title">HVAC- Cooling Issue</div>
                    <div className="sol-matched-sub">Matched: 3 verified technicians nearby</div>
                  </div>
                </div>

                <div className="sol-estimate-row">
                  <div className="sol-est-box">
                    <div className="sol-est-label">Estimated cost</div>
                    <div className="sol-est-value">&#8377;199-&#8377;399</div>
                  </div>
                  <div className="sol-est-box">
                    <div className="sol-est-label">ETA</div>
                    <div className="sol-est-value">15mins</div>
                  </div>
                </div>

                <button className="sol-confirm-btn">Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>

        <div className="solution-value-cards reveal">
          <div className="value-card">
            <div className="value-card-left"></div>
            <div className="value-card-body">
              <div className="value-card-title">Fully Digitized</div>
              <div className="value-card-sub">End-To-End Service Workflow</div>
            </div>
            <div className="value-card-check">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="value-card">
            <div className="value-card-left"></div>
            <div className="value-card-body">
              <div className="value-card-title">100% Transparent</div>
              <div className="value-card-sub">Pricing Before You Confirm</div>
            </div>
            <div className="value-card-check">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="value-card">
            <div className="value-card-left"></div>
            <div className="value-card-body">
              <div className="value-card-title">Always Accountable</div>
              <div className="value-card-sub">Documented, Tracked, Rated</div>
            </div>
            <div className="value-card-check">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
