import React, { useState } from 'react';
import './footer.css';
import '../../styles/base.css';

function Footer(props) {
    const [active, setActive] = useState('nav-menu');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggle = () => {
        setActive(active === 'nav-menu' ? 'nav-menu nav-active' : 'nav-menu');
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="nav">
                <ul className={active}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggle}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </>
    );
}

export default Footer;
