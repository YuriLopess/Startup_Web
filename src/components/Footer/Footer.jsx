import React from 'react';
import './footer.css';
import '../../styles/base.css';

function Footer(props) {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Projects</h4>
                        <ul>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Privacy</h4>
                        <ul>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Privacy</h4>
                        <ul>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                            <li>exemplo</li>
                        </ul>
                    </div>
                </div>
                
                <h5 className="copyright">
                    <i className="fa-regular fa-copyright"></i>
                    2024 all rights reserved
                </h5>
            </footer>
        </>
    );
}

export default Footer;