import React from "react";
import "./AboutMe.css";
import TechCard from "./TechCard";
import { useInView } from "react-intersection-observer";

const TechCarousel = () => {
    const [ref, inView] = useInView({
        threshold: 0.75, // Require 75% visibility
        rootMargin: "0px 0px -50% 0px", // Start detection slightly earlier
        triggerOnce: true,
      });
    
  return (
    <div
      ref={ref}
      className={`tech-carousel-holder ${
        inView ? "animate__animated animate__fadeInUp" : ""
      }`}
      name="tech-carousel"
    >
      <div className="tech-carousel-inner">
        <TechCard />
      </div>
    </div>
  );
};

export default TechCarousel;
