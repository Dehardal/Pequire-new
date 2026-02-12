import React from 'react';
import './OurServices.css';

const OurServices = () => {
    const serviceData = [
        {
            id: '01',
            name: 'Carpenter',
            points: [
                { label: 'About', content: 'Our master carpenters bring decades of experience in high-end woodworking and structural timber.' },
                { label: 'Service Description', content: 'From intricate cabinetry to structural home framing, we provide reliable, detailed craftsmanship that stands the test of time.' },
                { label: 'Expertise', content: 'Cabinet Making, Wood Restoration, Structural Framing, Custom Furniture.' },
                { label: 'Gallery', content: 'Explore our recent woodwork projects and bespoke furniture designs.', type: 'gallery', images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400', 'https://images.unsplash.com/photo-1581092160562-40ca08e59814?q=80&w=400'] }
            ]
        },
        {
            id: '02',
            name: 'Plumber',
            points: [
                { label: 'About', content: 'Certified plumbing experts specializing in modern water systems and sustainable drainage solutions.' },
                { label: 'Service Description', content: 'We handle everything from minor leaks to complete industrial plumbing overhauls with precision and speed.' },
                { label: 'Expertise', content: 'Leak Detection, Pipe Relining, Water Heaters, Emergency Plumbing.' },
                { label: 'Gallery', content: 'View our clean installations and professional repair work.', type: 'gallery', images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400'] }
            ]
        },
        {
            id: '03',
            name: 'Electrician',
            points: [
                { label: 'About', content: 'Licensed electricians focused on safety, efficiency, and modern smart home integrations.' },
                { label: 'Service Description', content: 'Whether it is a simple outlet fix or a full commercial wiring project, we ensure everything is up to code.' },
                { label: 'Expertise', content: 'Smart Home Setup, Fault Finding, EV Charger Install, Rewiring.' },
                { label: 'Gallery', content: 'Showcasing our precision wiring and smart lighting solutions.', type: 'gallery', images: ['https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=400', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400'] }
            ]
        },
        {
            id: '04',
            name: 'Laundry',
            points: [
                { label: 'About', content: 'Premium garment care services utilizing eco-friendly techniques and quick turnarounds.' },
                { label: 'Service Description', content: 'We treat your clothes with the utmost care, ensuring they return to you fresh, crisp, and perfectly handled.' },
                { label: 'Expertise', content: 'Dry Cleaning, Silk Care, Curtain Cleaning, Bulk Laundry.' },
                { label: 'Gallery', content: 'See the results of our professional fabric care and finishing.', type: 'gallery', images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400'] }
            ]
        }
    ];

    const flatPoints = serviceData.flatMap(service =>
        service.points.map(point => ({
            ...point,
            serviceName: service.name,
            serviceId: service.id
        }))
    );

    const [activeIndex, setActiveIndex] = React.useState(0);
    const itemRefs = React.useRef([]);

    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Detect items near the top of the center
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        itemRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="our-services-section">
            <div className="services-main-container">
                <div className="services-left-side">
                    <div className="services-sticky-content">
                        <h2 className="services-main-title">{flatPoints[activeIndex].serviceName}</h2>
                        <span className="services-large-number">{flatPoints[activeIndex].serviceId}</span>
                    </div>
                </div>

                <div className="services-right-side">
                    <div className="services-list">
                        {flatPoints.map((item, index) => (
                            <div
                                key={index}
                                data-index={index}
                                ref={el => itemRefs.current[index] = el}
                                className={`service-point-item ${index === activeIndex ? 'active' : ''} ${index > 0 && index % 4 === 0 ? 'new-service-group' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                <div className="point-header">
                                    <h3 className="point-label">{item.label}</h3>
                                    <span className="point-plus">+</span>
                                </div>
                                <div className="point-content">
                                    <p className="point-text">{item.content}</p>
                                    {item.type === 'gallery' && (
                                        <div className="point-gallery">
                                            {item.images.map((img, idx) => (
                                                <img key={idx} src={img} alt="Service Gallery" />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
