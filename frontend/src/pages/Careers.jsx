import React from 'react';
import './Careers.css';
import CareerHero from '../components/career_hero';
import Opportunities from '../components/Opportunities';
import JoinProfessional from '../components/JoinProfessional';
const Careers = () => {
    return (
        <div className="careers-page">
            <CareerHero />
            <Opportunities />
            <JoinProfessional />
        </div>
    );
};


export default Careers;
