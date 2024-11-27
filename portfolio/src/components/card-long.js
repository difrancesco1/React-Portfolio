import React from "react";
import '../App.css';
import grid from '../images/globe.png';

function CardLong() {
    return (
        <div className="card-cont-long">
            <div className="card-long">
                <div className="card-long-top">
                    <img src={grid} className="card-prof-img"></img>
                </div>
                <div className="card-rg-text-cont">
                    <p className="card-rg-header-text">
                    I'm very flexible with time zone communications & locations
                    </p>
                    <p className="card-rg-subtext">
                    I'm based in the U.S and open to remote work nationwide and opportunities in Washington State.
                    </p>
                    <button className="contact-me-btn-card">
                        <span className="contact-me-btn-text">
                            <span className="btn-ping"></span>
                            <span className="btn-ping_dot"></span>
                        </span>
                        
                        Contact Me
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CardLong;