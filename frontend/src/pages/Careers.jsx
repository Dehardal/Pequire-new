import React from 'react';
import './Careers.css';
import CareerHero from '../components/career_hero';
import Opportunities from '../components/Opportunities';
import JoinProfessional from '../components/JoinProfessional';
import Footer from '../components/Footer';

const Careers = () => {
    return (
        <div className="careers-page">
            <CareerHero />
            <Opportunities />
            <JoinProfessional />
            <Footer />
        </div>
    );
};

export default Careers;
