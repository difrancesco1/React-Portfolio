import React from "react";
import '../App.css';
import pfp from '../images/pfp.jpg';


function Hero() {
    return (
        <div className="hero">
            <div className="hero-cont">
                <div className="hero-left-section">
                    <div className="hero-left-container">
                        <h1 className="hero-title">The place where your business expands</h1>
                        <h2 className="hero-p">Hey there! Call me Josh. I enjoy creating kickass websites and Fullstack apps, 
                            ones that suit your desires and needs using latest technologies and cleanest design patterns.</h2>
                        <div className="hero-btn-cont">
                            <button href="#" className="projects-btn">VIEW PROJECTS <span className="projects-btn-span"></span> </button>
                            <a href="google.com" className="resume-a"><button className="resume-btn"><p className="hero-p-btn">VIEW RESUME</p><span className="hero-span"></span></button></a>
                        </div>
                    </div>
                </div>
                <div className="hero-right-container">
                    <div className="hero-img-cont">
                        <div className="hero-img">
                            <span className="hero-img-folder">
                                <img src={pfp}  className="img-hero" ></img>
                            </span>
                            <div className="hero-grid-img"></div>
                            <div className="hero-quote-box">
                                <p className="quote-text" ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;