import React, { useState } from 'react'
import "./projects.css";
import GithubPic from "../../assets/github.svg";
import WebPic from "../../assets/world-wide-web.svg";
import PhonePic from "../../assets/smartphone-call.svg";

const ProjectCardItems = ({item}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleLinkClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div 
            className={`project-item ${isHovered ? 'hovered' : ''}`}
            key={item.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={0}
        >
            <div className={`project-item__img-bx ${item.alt ? item.alt : ""}`}>
                <img src={item.image} alt="Project Logo" className={`project-item__img ${item.alt ? item.alt : ""}`}/>
                <div className="project-item__info">
                    <div className="project-item__links">
                        <a href={item.link.github} target="_blank"><img src={GithubPic} alt="GitHub"/></a>
                        <a href={item.link.web} target="_blank"><img src={item.alt === "seensay" ? PhonePic : WebPic} alt="Web"/></a>
                    </div>
                    <span className="project-item__description">{item.description}</span>
                </div>
            </div>
            <h3 className="project-item__title">{item.title}</h3>
        </div>
    );
};

export default ProjectCardItems;