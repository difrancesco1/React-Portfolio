import React from "react";
import "../../App.css"; // Add custom styles

const CarouselArrows = ({ onPrev, onNext }) => {
  return (
    <div className="carousel-arrows">
      <button onClick={onPrev} className="carousel-arrow prev">
        &lt; {/* Left Arrow */}
      </button>
      <button onClick={onNext} className="carousel-arrow next">
        &gt; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default CarouselArrows;
