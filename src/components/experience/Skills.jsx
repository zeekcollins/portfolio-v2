import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./experience.css"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 924 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 924, min: 635 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 635, min: 0 },
          items: 1
        }
    };

    return (
        <div className="skills__container container grid">
            <h2>Skills</h2>
            <p>I have experience that spans the Full Stack spectrum. 
                My portfolio highlights front-end proficiency with 
                projects  demonstrating skills in React, JavaScript, 
                HTML, etc. I am also proficient in Python, Java, 
                TypeScript, Angular, and Android development, among others.
            </p>

            <Carousel responsive={responsive} infinite={true} className='skills__slider'>
                <div className='item'>
                    <i className='bx bxl-python skills__icon' ></i>
                    <h5>Python</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-java skills__icon' ></i>
                    <h5>Java</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-javascript skills__icon' ></i>
                    <h5>Javascript</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-angular skills__icon' ></i>
                    <h5>Angular</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-typescript skills__icon' ></i>
                    <h5>Typescript</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-react skills__icon' ></i>
                    <h5>React</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-html5 skills__icon' ></i>
                    <h5>HTML</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-css3 skills__icon' ></i>
                    <h5>CSS</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-android skills__icon' ></i>
                    <h5>Android</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-git skills__icon' ></i>
                    <h5>Git</h5>
                </div>

                <div className='item'>
                    <i className='bx bxl-jquery skills__icon' ></i>
                    <h5>JQuery</h5>
                </div>
            </Carousel>
        </div>
    );
};

export default Skills;