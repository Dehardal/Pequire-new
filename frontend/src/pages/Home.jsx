import './Home.css';
import React, { useEffect } from 'react';
import Hero from '../components/landing/Hero';
import Problem from '../components/landing/Problem';
import Solution from '../components/landing/Solution';
import Features from '../components/landing/Features';
import WhyPequire from '../components/landing/WhyPequire';
import BentoGrid from '../components/landing/BentoGrid';
import Professionals from '../components/landing/Professionals';
import Testimonials from '../components/landing/Testimonials';
import AppDownload from '../components/landing/AppDownload';

const Home = () => {
  useEffect(() => {
    // Scroll reveal logic
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const smoothHandler = function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    anchors.forEach(a => a.addEventListener('click', smoothHandler));

    return () => {
      anchors.forEach(a => a.removeEventListener('click', smoothHandler));
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <WhyPequire />
      <BentoGrid />
      <Professionals />
      <Testimonials />
      <AppDownload />
    </>
  );
};

export default Home;

