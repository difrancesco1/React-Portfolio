import React from "react";
import '../App.css';
import HeroTitle from "./HeroTitle";
import HeroParagraph from "./HeroParagraph";
import HeroBtnContainter from "./HeroBtnContainter";

const HeroComponentLeft = () => {
    return (
        <div className="hero-left-container">
            <HeroTitle />
            <HeroParagraph />
            <HeroBtnContainter />
        </div>
    );
};

export default HeroComponentLeft