import React, { useState } from 'react';
import './header.css';
import '../../styles/base.css';

import { Link } from 'react-router-dom';

import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Contact from '../../routes/Contact/Contact'

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
                    <li><a href="#"><Link to={''}>Home</Link></a></li>
                    <li><a href="#"><Link to={'/about'}>About</Link></a></li>
                    <li><a href="#"><Link to={'/contact'}>Contact</Link></a></li>
                </ul>
                <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggle}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </>
    );
}

export default Header;