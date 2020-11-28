import React from 'react';
import './Footer.css';
import logo from './../images/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <img className="logo" src={logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="footer__icons">
                <a><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
                
            </div>
            <hr />
            <div className="footer__copyright">
                <span>Copyright © 2020 Musician</span>
                <span>Powered by Musician</span>
            </div>
        </div>
    )
}

export default Footer;
