import React from 'react';
import '../../App.css';
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <p className='footer-text'>Terms & Conditions</p>
        <p className='footer-text'>|</p>
        <p className='footer-text'>Privacy Policy</p>
      </div>
      <div className='footer-middle'>
        {/* LinkedIn Hyperlink */}
        <div className='footer-icon-container'>
          <a
            className='a-footer'
            href="https://www.linkedin.com/in/joshua-difrancesco-a28265183"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className='footer-icon' alt="LinkedIn" />
          </a>
        </div>
        {/* GitHub Hyperlink */}
        <div className='footer-icon-container'>
          <a
            className='a-footer'
            href="https://github.com/difrancesco1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className='footer-icon' alt="GitHub" />
          </a>
        </div>
      </div>
      <p className='footer-right'>© 2024 Joshua DiFrancesco</p>
    </div>
  );
};

export default Footer;
