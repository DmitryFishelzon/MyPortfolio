import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ color: 'white', fontSize: '24px' }} />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ color: 'white', fontSize: '24px' }} />
            </a>
            <p>&copy; 2024 Dmitry Fishelzon</p>
        </div>
    );
};

export default Footer;