import React from 'react'
import '../App.css';
import pfp from '../images/pfp.jpg';


const HeroImg = () => {
    return (
        <div className="hero-img">
            <img src={pfp} className="img-hero" />
            <div className="hero-grid-img" />
        </div>
    );
};

export default HeroImg