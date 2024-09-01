import React, { useState } from 'react';
import './header.css';
import '../../styles/styles.css';

import { NavLink } from 'react-router-dom';

function Header(props) {
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
                    <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                </ul>
                <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggle}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </>
    );
}

export default Header;