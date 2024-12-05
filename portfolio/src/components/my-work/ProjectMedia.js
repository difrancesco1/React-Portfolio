import React from 'react'
import DecayTracker from "../../images/DecayTracker.gif"
import '../../App.css';

const ProjectMedia = () => {
  return (
    <div className='project-gif-container'>
        <img className='project-gif' src={DecayTracker} alt="DecayTrackerGif"/>
    </div>
  )
}

export default ProjectMedia