
import React, { useState, useRef } from 'react';
import { TESTIMONIALS, tileDefs } from '../../data/constants';

const Testimonials = () => {
  const [testiCur, setTestiCur] = useState(0);
  const [testiAnimClass, setTestiAnimClass] = useState('');
  const [deckClass, setDeckClass] = useState('');
  const testiAnimRef = useRef(false);

  const testiFlipTo = (dir, idx) => {
    if (testiAnimRef.current) return;
    testiAnimRef.current = true;
    setDeckClass('flipping');
    setTestiAnimClass(dir === 'next' ? 'testi-slide-out-next' : 'testi-slide-out-prev');
    setTimeout(() => {
      setTestiCur(idx);
      setTestiAnimClass('testi-slide-in');
    }, 350);
    setTimeout(() => {
      setTestiAnimClass('');
      setDeckClass('');
      testiAnimRef.current = false;
    }, 850);
  };

  const handleNext = () => {
    if (testiAnimRef.current) return;
    const next = (testiCur + 1) % TESTIMONIALS.length;
    testiFlipTo('next', next);
  };
  const handlePrev = () => {
    if (testiAnimRef.current) return;
    const prev = (testiCur - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    testiFlipTo('prev', prev);
  };
  const handleDotClick = (i) => {
    if (i === testiCur || testiAnimRef.current) return;
    testiFlipTo(i > testiCur ? 'next' : 'prev', i);
  };

  return (
    <section className="testi-section" id="testimonials">
      <div className="testi-mosaic" id="testiMosaic">
        <div className="testi-tile-grid" id="tileGrid">
          {tileDefs.map((t, i) => (
            <div 
              key={i} 
              className={`testi-tile ${t.cl}`} 
              style={{
                gridColumn: t.c, 
                gridRow: t.r, 
                animation: `tileFloat ${3.6 + (i % 5) * 0.2}s ease-in-out ${(i * 0.12).toFixed(1)}s infinite alternate`
              }}
            ></div>
          ))}
        </div>
        <div className="testi-mosaic-fade"></div>
      </div>

      <div className="testi-content">
        <div className="pill-badge-outline solution-badge">
          <span className="pill-dot blue-dot"></span> OUR GOSSIPS
        </div>
        <h2 className="testi-headline">Trusted by homeowners, <span className="text-brand-blue">Loved<br />by professionals</span></h2>
        <p className="testi-subtitle">Real experiences from the people who matter most &mdash; our users and our pros.</p>

        <div className={`testi-deck-stage ${deckClass}`} id="testiDeckStage">
          <div className="testi-depth-card td3"></div>
          <div className="testi-depth-card td2"></div>
          <div className="testi-depth-card td1"></div>
          <div className={`testi-flip-wrapper ${testiAnimClass}`} id="testiFlipWrapper">
            <div className={`testi-card-face ${TESTIMONIALS[testiCur].type === 'user' ? 'testi-user-card' : 'testi-pro-card'}`} id="testiCardFace">
              <div className="testi-card-top">
                <div>
                  <div className="testi-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`testi-star ${i < TESTIMONIALS[testiCur].rating ? 'on' : 'off'}`}>&#9733;</span>
                    ))}
                  </div>
                  <div className="testi-rating-text">{TESTIMONIALS[testiCur].rating}.0 Ratings</div>
                </div>
                <div className={`testi-badge ${TESTIMONIALS[testiCur].type === 'user' ? 'homeowner' : 'professional'}`}>
                  {TESTIMONIALS[testiCur].type === 'user' ? 'HOMEOWNER' : 'PROFESSIONAL'}
                </div>
              </div>
              <div className="testi-quote" dangerouslySetInnerHTML={{ __html: TESTIMONIALS[testiCur].quote }}></div>
              <div>
                <div className="testi-card-divider"></div>
                <div className="testi-author-row">
                  <div className="testi-avatar">{TESTIMONIALS[testiCur].ini}</div>
                  <div>
                    <div className="testi-author-name">{TESTIMONIALS[testiCur].name}</div>
                    <div className="testi-author-loc">{TESTIMONIALS[testiCur].loc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testi-dots" id="testiDots">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testi-dot ${i === testiCur ? 'active' : ''} ${t.type === 'pro' ? 'pro-dot' : ''}`} onClick={() => handleDotClick(i)}></div>
          ))}
        </div>

        <div className="testi-indicator">
          <div className="testi-type-legend">
            <div className="testi-legend-swatch" style={{ background: '#fff', border: '1px solid #e2e8f0' }}></div>
            <span>Homeowner</span>
          </div>
          <div className="testi-type-legend">
            <div className="testi-legend-swatch" style={{ background: 'var(--navy2)' }}></div>
            <span>Professional</span>
          </div>
        </div>

        <div className="testi-btn-row">
          <button className="testi-btn" id="testiPrevBtn" onClick={() => handlePrev()}>
            <span className="testi-btn-icon">&#8592;</span>PREV
          </button>
          <button className="testi-btn" id="testiNextBtn" onClick={() => handleNext()}>
            NEXT<span className="testi-btn-icon">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
