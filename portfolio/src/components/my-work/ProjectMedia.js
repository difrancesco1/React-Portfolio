import React from 'react';
import '../../App.css';

const ProjectMedia = ({ media }) => {
  return (
    <div className="project-gif-container">
      {Array.isArray(media) && media.length > 0 && (
        <img
          className="project-gif"
          src={media[0].src} // Display the first media item
          alt={media[0].alt}
        />
      )}
    </div>
  );
};

export default ProjectMedia;
