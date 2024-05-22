import React from 'react';
import "./projects.css";
import { projectsData } from './Data';
import ProjectCardItems from './ProjectCardItems';

const ProjectCard = ({item}) => {
    return (
        <div className="project-card__container container grid">
            {projectsData.map((item) => {
                return <ProjectCardItems item={item} key={item.id}/>
            })}
        </div>
    );
};

export default ProjectCard;