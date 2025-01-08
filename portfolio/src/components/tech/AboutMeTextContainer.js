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
        Hey there! My name is Joshua and I have been building fintech web and mobile applications for 3+ years as a software engineer at InvestCloud.
        I've led fullstack development on three different SaaS Trading applications utilizing React, MongoDB, Typescript, PHP, and AWS.
        Listed below are some of the languages and technologies that I have experience using.
      </h1>
      <TechCarousel />

    </div>
  )
}

export default AboutMeTextContainer