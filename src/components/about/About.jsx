import React from 'react';
import "./about.css"
import AboutImg from "../../assets/SixSeven.jpg"
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <span className="section__subtitle">Get To Know More</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <div className="about__image-wrapper">
                    <div className="about__img-container">
                        <img src={AboutImg} alt="" className="about__img" />
                        <div className="about__image-overlay"></div>
                    </div>
                    <div className="about__image-underlay"></div>
                </div>

                <div className="about__data">
                    <Info/>
                    <p className="about__description">
                    Hey! My name is Ezekial, but everyone just calls me Zeek. 
                    I've always had a passion for creating things out of nothing, so early on 
                    I would attempt to create audio plugins for my musical hobby. From there, 
                    the transition from creating music to my love for computers was a natural 
                    process. Today, I have two Bachelor's degrees in computer-related fields 
                    and have had the privilege of working as an engineer at Google since the 
                    beginning of 2022. I'm a proud father, a devoted husband, and a lover of all things 
                    music, traveling, and health & fitness.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;