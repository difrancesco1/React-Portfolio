import React from 'react'
import "./AboutMe.css"
import TechCarousel from './TechCarousel'

const AboutMeTextContainer = () => {
  return (
    <div className='about-me-text-container'>
      <h1 className='about-me-header'>About Me
        <div className='about-me-divider'></div>
      </h1>
      <h1 className='about-me-paragraph'>
      Hey there! My name is Joshua and I have been building different types of web and mobile applications for 3+ years. 
      After working on different SaaS Trading applications, I became more interested in developing responsive web designs with React. 
      Listed below are some of the languages and technologies that I have experience using.
      </h1>
      <TechCarousel />

    </div>
  )
}

export default AboutMeTextContainer