import '../App.css';
import React, { useState, useEffect } from 'react';

function NavBar() {
    const [isOriginal, setIsOriginal] = useState(true); // Track if colors are in original state
    const [originalBodyColor, setOriginalBodyColor] = useState(''); // Store original body background color
    const [navColor, setNavColor] = useState(null); // Default: no inline style

    useEffect(() => {
        // Store the body's initial background color
        const initialBodyColor = window.getComputedStyle(document.body).backgroundColor;
        setOriginalBodyColor(initialBodyColor);
    }, []); // Run once on component mount

    const toggleBackgroundColor = () => {
        if (isOriginal) {
            // Change to new colors
            document.body.style.backgroundColor = '#4F717D';
            setNavColor('#3C4040');
        } else {
            // Revert to original colors
            document.body.style.backgroundColor = originalBodyColor; // Use the stored original color
            setNavColor(null); // Remove inline style to respect default CSS
        }
        setIsOriginal(!isOriginal); // Toggle the state
    };

    return (
        <header
            className="header-nav"
            style={navColor ? { backgroundColor: navColor } : {}}
        >
            <div className="header-inner">
                <div className="inner-nav c-space">
                    <a href="#" className="header-name">
                        Joshua DiFrancesco
                    </a>
                    <nav className="nav-cont">
                        <ul className="nav-ul">
                            <li className="nav-li theme-li">
                                <button onClick={toggleBackgroundColor} className="theme-btn">
                                    <span className="material-symbols-outlined">
                                        {isOriginal ? 'nights_stay' : 'light_mode'} {/* Toggle icon */}
                                    </span>
                                </button>
                            </li>
                            <li className="nav-li">
                                <a className="nav-li-a" href="#">
                                    <p className="nav-li-text-p">Home</p>
                                </a>
                            </li>
                            <li className="nav-li">
                                <a className="nav-li-a" href="#about-me">
                                    <p className="nav-li-text-p">About</p>
                                </a>
                            </li>
                            <li className="nav-li">
                                <a className="nav-li-a" href="#my-work">
                                    <p className="nav-li-text-p">Work</p>
                                </a>
                            </li>
                            <li className="nav-li">
                                <a className="nav-li-a" href="#my-experience">
                                    <p className="nav-li-text-p">Experience</p>
                                </a>
                            </li>
                            <li className="nav-li">
                                <a className="nav-li-a" href="#my-contact">
                                    <p className="nav-li-text-p">Contact</p>
                                </a>
                            </li>
                            <li className="nav-li">
                                <a
                                    className="nav-li-a nav-li-resume"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="/ResumeReact.pdf"
                                >
                                    <p className="resume-text">Resume</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
