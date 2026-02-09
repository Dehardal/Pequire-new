import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon"></div>
                    <span>Company Name</span>
                </Link>

                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className={`navbar-link ${isActive('/services') ? 'active' : ''}`}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/how-to-use" className={`navbar-link ${isActive('/how-to-use') ? 'active' : ''}`}>
                            How to Use
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers" className={`navbar-link ${isActive('/careers') ? 'active' : ''}`}>
                            Careers
                        </Link>
                    </li>
                </ul>

                <Link to="/contact" className="navbar-btn">
                    Contact Us
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
