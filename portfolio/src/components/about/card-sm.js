import React from "react";
import '../../App.css';
import grid from '../../images/grid4.png';


function SmallCard() {
    return (
        <div className="card-sm-cont">
            <div className="sm-content-cont">
                <img className="sm-img" src={grid}></img>
                <div className="sm-p-cont">
                    <p className="sm-title">Contact me</p>
                    <div className="contact-me-cont">
                        <img className=""></img>
                        <p className="sm-p">difrancesco.joshua1@gmail.com</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SmallCard;