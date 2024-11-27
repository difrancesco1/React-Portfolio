import '../App.css';
import React from 'react';

function NavBar() {
    return(
        <header className='header-nav'>
            <div className='header-inner'>
                <div className='inner-nav c-space'>
                    <a href='#' className='header-name'>
                        Joshua DiFrancesco
                    </a>
                    <nav className='nav-cont'>
                        <ul className='nav-ul'>
                            <li className='nav-li'><a className='nav-li-a' href='#'>Home</a></li>
                            <li className='nav-li'><a className='nav-li-a' href='#'>About</a></li>
                            <li className='nav-li'><a className='nav-li-a' href='#'>Work</a></li>
                            <li className='nav-li'><a className='nav-li-a' href='#'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;