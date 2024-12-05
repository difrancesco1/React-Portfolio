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
        <div className='footer-icon-container'>
          <img src={linkedin} className='footer-icon'></img>
        </div>
        <div className='footer-icon-container'>
          <img src={github} className='footer-icon'></img>
        </div>
      </div>
      <p className='footer-right'>© 2024 Joshua DiFrancesco</p>
    </div>
  )
}

export default Footer