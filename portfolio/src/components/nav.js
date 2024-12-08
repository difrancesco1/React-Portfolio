import '../App.css';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function NavBar() {
    return (
        <header className='header-nav'>
            <div className='header-inner'>
                <div className='inner-nav c-space'>
                    <a href='#' className='header-name'>
                        Joshua DiFrancesco
                    </a>
                    <nav className='nav-cont'>
                        <ul className='nav-ul'>
                            <li className='nav-li theme-li'>
                                <button className="theme-btn">
                                    <span className="material-symbols-outlined">nights_stay</span>
                                </button>
                            </li>
                            <li className='nav-li'>
                                <a className='nav-li-a' href='#'>
                                    <p className='nav-li-text-p'>Home</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a className='nav-li-a' href='#about-me'>
                                    <p className='nav-li-text-p'>About</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a className='nav-li-a' href='#'>
                                    <p className='nav-li-text-p'>Work</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a className='nav-li-a' href='/ResumeReact.pdf'>
                                    <p className='nav-li-text-p'>Contact</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a
                                    className='nav-li-a nav-li-resume'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='/ResumeReact.pdf'
                                >
                                    <p className='resume-text'>Resume</p>
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
