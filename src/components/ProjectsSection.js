import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const projects = [
        { name: "Nyan Cat",
          description: "This project revitalizes the classic meme through an engaging game, where I've enhanced the core experience by refining the collision mechanics. Additionally, I've introduced new features such as a lives system, enriching the gameplay and adding depth to the player's strategy.",
          github: "https://github.com/DmitryFishelzon/project-js-nyan-cat.git",
          demo: "https://project-js-nyan-cat-three.vercel.app/"
        },
    ];

    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <div className="projects-list">
            {projects.map((project, index) => (
        <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>Live Demo</a>
        </div>
       ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
