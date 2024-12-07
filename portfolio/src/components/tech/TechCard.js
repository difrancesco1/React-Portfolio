import React from 'react';
import './AboutMe.css';


const technologiesArr = [
  "JavaScript",
  "React",
  "Angular",
  "HTML",
  "CSS",
  "Python",
  "Next.js",
  "JQuery",
  "PostSQL",
  "MongoDB",
  "Tailwind",
  "Material UI",
  "Axios",
  "GraphQL",
  "Git",
];

const TechCard = () => {
  return (
    <div className="tech-cards-container">
      {technologiesArr.map((tech, index) => (
        <div key={index} className="tech-card">
          <h1 className="tech-card-text">{tech}</h1>
        </div>
      ))}
    </div>
  );
};

export default TechCard;
