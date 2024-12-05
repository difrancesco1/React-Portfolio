import React from "react";
import '../App.css';
import pfp from '../images/pfp.jpg';
import { HERO_TITLE, HERO_P } from "../lib/Constants";
import HeroComponentLeft from "./HeroComponentLeft";
import HeroComponentRight from "./HeroComponentRight";

function Hero() {
    return (
        <div className="hero-cont">
            <HeroComponentLeft />
            <HeroComponentRight />
        </div>

    );
};

export default Hero;