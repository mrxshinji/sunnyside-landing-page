import React, { useState } from 'react';
import logo from '../assets/images/logo.svg'
import downArrow from '../assets/images/icon-arrow-down.svg'

export default function Header(props) {

    // sidebar toggle
    const [sidebar, setSidebar] = useState(false)
    
    function toggleSidebar() {
        setSidebar(prev => !prev)
    }

    return (
        <header>
            <img src={logo} alt='Sunnyside logo'/>
            <div className='nav-list'>
                <ul className='navbar'>
                    <li className='nav-item'><a href='#'>About</a></li>
                    <li className='nav-item'><a href='#'>Services</a></li>
                    <li className='nav-item'><a href='#'>Projects</a></li>
                    <li id='nav-contact' className='nav-item'><a href='#'>CONTACT</a></li>
                </ul>
                <button onClick={toggleSidebar}>Menu</button>
            </div>
            { sidebar && (
            <div className='sidebar-box'>
                <nav className='sidebar'>
                    <ul className='side-menu'>
                        <li className='side-item'><a href='#'>About</a></li>
                        <li className='side-item'><a href='#'>Services</a></li>
                        <li className='side-item'><a href='#'>Projects</a></li>
                        <li id='side-contact' className='side-item'><a href='#'>CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            )}
            { props.state && (
            <div id='header-text' > 
                <h1>WE ARE CREATIVES</h1>
                <img src={downArrow} alt='down arrow' />
            </div>
            )}
        </header>
    )
}