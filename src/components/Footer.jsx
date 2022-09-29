import React from 'react';
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
    return (
        <footer>
            <Logo id='logo' />
            <div className='footer-list'>
                <ul className='footerbar'>
                    <li className='footer-item'><a href='#'>About</a></li>
                    <li className='footer-item'><a href='#'>Services</a></li>
                    <li className='footer-item'><a href='#'>Projects</a></li>
                </ul>
            </div>
            <div className='sns'>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <PinterestIcon />
            </div>
        </footer>
    )
}