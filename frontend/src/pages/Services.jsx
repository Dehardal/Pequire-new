import React from 'react';
import './Services.css';
import ServicesHero from '../components/ServicesHero';
import OurServices from '../components/OurServices';
import FAQ from '../components/FAQ';
const Services = () => {
    return (
        <div className="services-page">
            <ServicesHero />
            <OurServices />
            <FAQ />
        </div>
    );
};


export default Services;
