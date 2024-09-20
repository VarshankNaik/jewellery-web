import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const handleWhatsAppClick = (e) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Mobile device detection (iOS or Android)
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isMobile = isAndroid || isIOS;

    // Detect if on WhatsApp Desktop App
    const isWhatsAppDesktop = /WhatsApp/i.test(userAgent);

    if (isMobile) {
      // Mobile redirect to WhatsApp app
      e.preventDefault();
      window.location.href = "whatsapp://send?phone=9096219091";
    } else if (isWhatsAppDesktop) {
      // Redirect for WhatsApp Desktop App
      e.preventDefault();
      window.location.href = "whatsapp://send?phone=9096219091";
    } else {
      // Default to WhatsApp Web for desktop browsers
      window.open("https://web.whatsapp.com/send?phone=9096219091", "_blank");
    }
  };

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} alt="" />
          <p>Visit our socials</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=9096219091"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              <img src={assets.whatsapp_icon} alt="WhatsApp" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>SHOP</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+1234567890</li>
            <li>email@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyrights reserved</p>
    </div>
  );
};

export default Footer;
