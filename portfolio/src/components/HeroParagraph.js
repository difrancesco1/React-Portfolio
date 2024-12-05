import React from 'react'
import '../App.css';
import HeroTitle from "./HeroTitle";
import {HERO_P} from "../lib/Constants";


const HeroParagraph = () => {
  return (
    <h2 className="hero-p">{HERO_P}</h2>
  );
};

export default HeroParagraph