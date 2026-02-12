import React from 'react';
import './Careers.css';
import CareerHero from '../components/career_hero';
import Opportunities from '../components/Opportunities';
import Footer from '../components/Footer';

const Careers = () => {
    return (
        <div className="careers-page">
            <CareerHero />
            <Opportunities />

            <Footer />
        </div>
    );
};

export default Careers;
