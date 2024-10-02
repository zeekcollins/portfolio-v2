import React from "react";
import GoogleLogo from "../google/GoogleLogo";
import "./home.css"
import MyResume from "../../assets/Resume - Ezekial Collins.pdf"

const Intro = () => {
    const handleContactClick = (event) => {
        const hasEmailClient = navigator.canShare && navigator.canShare({ url: 'mailto:ezekcollins@gmail.com' });

        if (!hasEmailClient) {
            event.preventDefault();

            const contactSection = document.querySelector("#contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="home__intro">
            <h3 className="home__pre-title">Hey, my name is</h3>
            <h1 className="home__title">Zeek Collins</h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">I'm an engineer
             in the Seattle Metro Area. My experience
             includes my work on the Core ML team at <GoogleLogo text="Google"/> where
             I helped develop On-Device Machine Learning tools 
             for ML Engineers and users.</p>

             <div className="intro__clickables">
                <a href="mailto:ezekcollins@gmail.com" className="button button--flex one" onClick={handleContactClick}>
                    Contact Me
                    <i className="bx bxs-send intro__icon"></i>
                </a>
                <a href={MyResume} className="button button--flex two" target="_blank" rel="noreferrer">
                    My Resume 
                    <i className="bx bx-file intro__icon"></i>
                </a>
             </div>
        </div>
    )
}

export default Intro