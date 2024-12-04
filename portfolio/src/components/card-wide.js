import React from "react";
import '../App.css';
import grid from '../images/grid3.png';


function WideCard() {
    return (
        <div className="card-wide-cont">
            <div className="wide-content-cont">
                <img className="wide-img" src={grid}></img>
                <div className="wide-p-cont">
                    <p className="wide-title">My Passion for Coding</p>
                    <p className="wide-p">I love solving problems and building things through code. Programming isn't just
                         my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
                </div>
            </div>
        </div>
    );
};

export default WideCard;