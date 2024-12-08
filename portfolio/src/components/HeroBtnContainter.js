import React from 'react'
import '../App.css'

const HeroBtnContainter = () => {
    return (
        <div className="hero-btn-cont">
            <button href="#" className="projects-btn">VIEW PROJECTS <span className="projects-btn-span"></span> </button>
            <a target="_blank" rel="noopener noreferrer" href='/ResumeReact.pdf' className="resume-a"><button className="resume-btn"><p className="hero-p-btn">VIEW RESUME</p><span className="hero-span"></span></button></a>
        </div>
    )
}

export default HeroBtnContainter