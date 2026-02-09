import './Home.css';
import Hero from '../components/Hero';

import Features from '../components/Features';
import QualityStandard from '../components/QualityStandard';
import OfferBanner from '../components/OfferBanner';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import ProviderCollection from '../components/ProviderCollection';
import AppStats from '../components/AppStats';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Features />
            <QualityStandard />
            <OfferBanner />
            <HowItWorks />
            <Testimonials />
            <ProviderCollection />
            <AppStats />
        </div>
    );
};

export default Home;
