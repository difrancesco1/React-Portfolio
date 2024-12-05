import React from "react";
import '../App.css';
import spotlight from '../images/spotlight3.png';
import logo from '../images/rweq.png';
import react from '../images/react-logo.png';
import tailwind from '../images/tailwindcss.png';
import ts from '../images/typescript.png';
import mern from '../images/framer.png';
import arrowup from '../images/arrow-up.png';
import axios from '../images/axios.png';




function WorkCard() {
    return (
        <div className="work-card-container">
            <div className="work-card-img-cont">
                <img src={spotlight} className="work-card-img"></img>
            </div>
            <div className="word-card-icon-cont">
                <img src={logo} className="work-card-icon"></img>
            </div>
            <div className="work-card-text-cont">
                <p className="work-card-title">Decay Tracker - League of Legends Account Management Application</p>
                <p className="work-card-para"> Feature-rich application for tracking multiple League of Legends accounts. It simplifies the tracking of decay games, securely stores 
                    user-credentials, and allows for user to see rank, past games, and account statistics.</p>
                <p className="work-card-para">With a focus on efficiency, used RESTful API design principles and managed query
                    parameters to filter relevant data. Applied error handling with Axios interceptors and fallback mechanisms for failed API requests.  
                </p>
            </div>
            <div className="work-card-footer-cont">
                <div className="work-card-lang-cont">
                    <div className="tech-logo">
                        <img src={react} className="tech-img"></img>
                    </div>
                    <div className="tech-logo">
                        <img src={tailwind} className="tech-img"></img>
                    </div>
                    <div className="tech-logo">
                        <img src={axios} className="tech-img"></img>
                    </div>
                    <div className="tech-logo">
                        <img src={mern} className="tech-img"></img>
                    </div>
                </div>
                <a className="live-site-work">
                    <p className="work-a">Check Live Site</p>
                    <img className="arrow-icon" src={arrowup}></img>
                </a>
            </div>
        </div>
            
    );
};

export default WorkCard;