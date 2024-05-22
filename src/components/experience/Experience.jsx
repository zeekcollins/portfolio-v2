import React from 'react';
import Skills from './Skills';
import Journey from './Journey';
import "./experience.css"

const Experience = () => {

    return (
        <section className="experience section" id="experience">
            <span className="section__subtitle">Explore My Knowledge Base</span>
            <h2 className="section__title">Skills & Experience</h2>

            <Skills/>

            <h2>Experience</h2>
            <span className="section__subtitle swapped-order">My Journey</span>
            <Journey/>
        </section>
    );
};

export default Experience;