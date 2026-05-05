import React from 'react';
import './OurServices.css';

const OurServices = () => {
    const serviceData = [
    {
        id: '01',
        name: 'Plumbing',
        points: [
            { label: 'What we fix', content: 'Leak repairs, pipe installations, bathroom fittings, water heater service' },
            { label: 'Starting from', content: '₹299' },
            { label: 'Average completion time', content: '1-2 hours' }
        ]
    },
    {
        id: '02',
        name: 'Electrical',
        points: [
            { label: 'What we fix', content: 'Wiring, switch repairs, appliance installation, circuit breaker fixes' },
            { label: 'Starting from', content: '₹249' },
            { label: 'Average completion time', content: '30 mins - 2 hours' }
        ]
    },
    {
        id: '03',
        name: 'Carpentry',
        points: [
            { label: 'What we fix', content: 'Furniture assembly, door/window repairs, custom woodwork' },
            { label: 'Starting from', content: '₹399' },
            { label: 'Average completion time', content: '2-4 hours' }
        ]
    },
    {
        id: '04',
        name: 'Laundry',
        points: [
            { label: 'What we cover', content: 'Stain removal, professional ironing, dry cleaning, general wash' },
            { label: 'Starting from', content: '₹99' },
            { label: 'Average completion time', content: '24-48 hours' }
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
