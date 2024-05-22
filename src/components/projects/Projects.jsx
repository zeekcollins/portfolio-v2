import React from 'react';
import "./projects.css"
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <span className="section__subtitle">Let's get technical</span>
            <h2 className="section__title">Projects</h2>
            <p>Check out a few projects I've done over the years. 
                Click the Github icon to view the source code or 
                experience the live version of each app 
                (if available) by clicking the Web icon. 
                Let me know what you think.
            </p>

            <ProjectCard/>
        </section>
    );
};

export default Projects;