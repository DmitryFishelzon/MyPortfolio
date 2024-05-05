import React from 'react';
import './AboutMeSection.css';
import profilePic from '../assets/profile.jpeg';

const AboutMeSection = () => {
    return (
        <div className="about-me-section">
            <div className="profile-container">
                <img src={profilePic} alt="Dmitry Fishelzon" className="profile-pic"/>
            </div>
            <h2>About Me</h2>
            <p>I'm a new web developer working in a Bitcoin mining facility, my fascination with technology quickly evolved into a passion for coding and, subsequently, web development. This unique journey sparked my interest in how technology can be harnessed to create impactful web applications.</p>
            <p>My technical toolkit includes HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React.</p>
            <p>I am eager to expand my expertise within these frameworks and explore new technologies.</p>
        </div>
    );
};

export default AboutMeSection;
