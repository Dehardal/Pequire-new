import React from 'react';
import './Services.css';
import ServicesHero from '../components/ServicesHero';
import OurServices from '../components/OurServices';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <div className="services-page">
            <ServicesHero />
            <OurServices />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Services;
