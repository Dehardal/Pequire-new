import React, { useEffect } from 'react';
import './Home.css';
import LandingHero from '../components/landing/LandingHero';
import ProblemSection from '../components/landing/ProblemSection';
import StatsTicker from '../components/landing/StatsTicker';
import FeaturesSection from '../components/landing/FeaturesSection';
import SolutionTimeline from '../components/landing/SolutionTimeline';
import BentoFeatures from '../components/landing/BentoFeatures';
import WhyPequire from '../components/landing/WhyPequire';
import ProfessionalsCta from '../components/landing/ProfessionalsCta';
import AppCta from '../components/landing/AppCta';

const Home = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 80);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));

        return () => {
            revealElements.forEach(el => revealObserver.unobserve(el));
        };
    }, []);

    return (
        <div className="home">
            <LandingHero />
            <ProblemSection />
            <StatsTicker />
            <FeaturesSection />
            <SolutionTimeline />
            <BentoFeatures />
            <WhyPequire />
            <ProfessionalsCta />
            <AppCta />
        </div>
    );
};

export default Home;
