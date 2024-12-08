import React from 'react';
import './App.css';
import NavBar from './components/nav';
import Hero from './components/hero';
import WorkCard from './components/my-work/card-work';
import About from './components/about/About.js';
import WorkMedia from './components/my-work/ProjectMedia';
import Title from './components/Title';
import Section from './components/Section';
import Main from './components/main';
import workCardsData from './components/my-work/WorkCardData';
import WorkCarousel from './components/my-work/WorkCarousel.js';
import References from './components/WorkExperience/References.js';
import InvestCloudExperience from './components/WorkExperience/ExperienceCard.js';
import WorkContainter from './components/WorkExperience/WorkExperienceContaiener.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/footer/footer.js';
import AboutMe from './components/tech/AboutMe.js';
import Divider from './components/divider/Divider.js';
// import Divider from './components/divider/Divider.js';

import "animate.css";

function App() {
    return (
        <Main className="main">
            <NavBar />
            <Hero />
            <div className="my-divider">
                <Divider />
            </div>
            <div id="about-me">
            <AboutMe />
            </div>
            {/* <About /> */}

            
            <div id="my-work">
                <Section id="my-work" title="My Work" className="my-work">

                    <WorkCarousel />
                </Section>
            </div>
            <div id="my-experience">
                <Section title="My Experience" className="my-work">
                    <WorkContainter />
                </Section>
            </div>
            {/* <div id="my-contact">
                <Section title="Contact" className="my-work">
                    <Contact />
                </Section>
            </div> */}
            <Footer />


        </Main>
    );
}

export default App;
