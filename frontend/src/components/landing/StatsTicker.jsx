import React from 'react';
import './StatsTicker.css';

const stats = [
    '100+ Professional Service Providers',
    '40,000 Jobs Completed',
    'Skilled Professionals',
    'Verified Professionals',
    '4.6+ Average Rating'
];

const StatsTicker = () => {
    return (
        <div className="stats-bar-inline">
            <div className="marquee-wrapper">
                <div className="stats-ticker">
                    {stats.map((s, i) => (
                        <React.Fragment key={i}>
                            <span>{s}</span>
                            <span className="dot">&middot;</span>
                        </React.Fragment>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {stats.map((s, i) => (
                        <React.Fragment key={i + stats.length}>
                            <span>{s}</span>
                            <span className="dot">&middot;</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default StatsTicker;
