import React from 'react';
import './Services.css';
import ServicesHero from '../components/ServicesHero';
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <div className="services-page">
            <ServicesHero />
            <OurServices />
            <Footer />
        </div>
    );
};

export default Services;
