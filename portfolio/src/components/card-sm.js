import React from "react";
import '../App.css';
import grid from '../images/grid3.png';


function SmallCard() {
    return (
        <div className="card-sm-cont">
            <div className="sm-content-cont">
                <img className="sm-img" src={grid}></img>
                <div className="sm-p-cont">
                    <p className="sm-title">My Passion for Coding</p>
                    <p className="sm-p">I love solving problems and building things through code. Programming isn't just
                         my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;