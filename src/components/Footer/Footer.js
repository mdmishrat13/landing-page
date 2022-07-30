import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css'
import { faDiscord } from '@fortawesome/fontawesome-free-brands';
import logo from './../../images/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-items">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="copyright">
                    <p>All Right Reserved</p>
                </div>
                <div className="social-logo">
                    <p>connect with us</p>
                    <FontAwesomeIcon icon={faDiscord} />
                </div>
            </div>
            
        </div>
    );
};

export default Footer;