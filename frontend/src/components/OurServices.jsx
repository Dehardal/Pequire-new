import React from 'react';
import './OurServices.css';

const OurServices = () => {
    const serviceData = [
    {
        id: '01',
        name: 'Plumbing',
        points: [
            { label: 'Advanced Leak Detection', content: 'Our master plumbers utilize precision diagnostics to identify and resolve hidden leaks, preventing structural damage and reducing water waste instantly.' },
            { label: 'Sanitary & Bathware Installation', content: 'Expert fitting of modern bathroom fixtures, from high-pressure showers and designer washbasins to complex toilet assemblies and bathtub installations.' },
            { label: 'Hydraulic & Storage Solutions', content: 'Complete maintenance and repair of water storage systems, motor pumps, and solar water heaters, ensuring consistent water pressure and quality.' },
            { label: 'Pequire Verified Quality', content: 'Every plumber on our platform is vetted for 100+ skill markers and background-checked, providing you with a true industry professional you can trust.' }
        ]
    },
    {
        id: '02',
        name: 'Electrical',
        points: [
            { label: 'Certified Electrical Overhauls', content: 'From resolving dangerous short circuits and faulty wiring to complete switchboard upgrades, we ensure your home power system is safe, stable, and efficient.' },
            { label: 'Complex Appliance Integration', content: 'Seamless installation and maintenance of high-draw appliances including heavy-duty ACs, modern refrigerators, and advanced washing machine systems.' },
            { label: 'Safety & Surge Protection', content: 'Strategic placement of circuit breakers and surge protection systems to safeguard your expensive electronics from unpredictable power fluctuations.' },
            { label: 'Expert-Only Dispatch', content: 'Pequire matches your specific electrical issue with specialists who have a proven track record in handling that exact type of equipment or wiring.' }
        ]
    },
    {
        id: '03',
        name: 'Carpentry',
        points: [
            { label: 'Bespoke Furniture Repair', content: 'Restoring the beauty and function of your valued furniture through expert joinery, polishing, and structural reinforcement by skilled woodworkers.' },
            { label: 'Modular & Kitchen Fittings', content: 'Precision assembly of modular kitchen cabinets, custom wardrobes, and designer beds, ensuring perfect alignment and durable hardware installation.' },
            { label: 'Security & Door Hardware', content: 'Advanced installation of secure door locks, window latches, and custom framing solutions to enhance the safety and aesthetics of your living space.' },
            { label: 'Craftsmanship Audit', content: 'We only partner with carpenters who demonstrate mastery in diverse wood types and finishing techniques, ensuring every job meets our high premium standards.' }
        ]
    },
    {
        id: '04',
        name: 'Laundry',
        points: [
            { label: 'Professional Fabric Care', content: 'Advanced dry cleaning and gentle wash techniques tailored to specific fabric requirements, ensuring your garments maintain their texture, color, and longevity.' },
            { label: 'Designer Wear Specialization', content: 'Specialized handling of delicate ethnic wear, formal suits, and designer labels using fabric-safe chemicals and expert stain-removal technology.' },
            { label: 'Express Steam Pressing', content: 'High-quality steam ironing that removes even the most stubborn wrinkles, giving your clothes a crisp, professional finish every single time.' },
            { label: 'Smart Logistics & Delivery', content: 'Track your garments from pickup to delivery with real-time updates. Enjoy a 24-48 hour turnaround time managed entirely through the Pequire ecosystem.' }
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
