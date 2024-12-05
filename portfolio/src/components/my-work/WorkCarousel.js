import React, { useState } from "react";
import WorkCard from "./card-work";
import ProjectMedia from "./ProjectMedia";
import workCardsData from "./WorkCardData";
import CarouselArrows from "./CarouselArrows";

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workCardsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === workCardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCard = workCardsData[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="carousel-card">
          <WorkCard
            image={currentCard.image}
            logo={currentCard.logo}
            description={currentCard.description}
            techLogos={currentCard.techLogos}
            liveSiteLink={currentCard.liveSiteLink}
            arrowIcon={currentCard.arrowIcon}
          />
        </div>
        <div className="carousel-media">
          <ProjectMedia media={currentCard.media} />
        </div>
      </div>
      <CarouselArrows onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default WorkCarousel;
