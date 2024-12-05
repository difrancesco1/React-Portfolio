import React from "react";
import '../../App.css';
import grid from '../../images/grid1.png';
import AboutCardDetails from "./AboutCardDetails";

function CardReg() {
    return (
        <div className="card-cont-rg">
            <AboutCardDetails 
                cardType = "card-rg"
                imageStyle = "card-prof-img"
                imagePath = {grid}
                cardTextContainer = "card-rg-text-cont"
                cardHeaderText = "card-rg-header-text"
                cardParagraphText = "card-rg-subtext"

            />
            {/* <div className="card-rg">
                <img src={grid} className="card-prof-img"></img>
                <div className="card-rg-text-cont">
                    <p className="card-rg-header-text">
                        Hi, My name is Joshua DiFrancesco
                    </p>
                    <p className="card-rg-subtext">
                        A developer with a passion for web, programs and mobile applications. 
                        I like building clean, user-friendly and responsive websites.
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default CardReg;