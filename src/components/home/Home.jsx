import React from "react";
import "./home.css"
import Intro from "./Intro";

const Home = () => {
    return (
        <section className="home section top-section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__img">
                        <div className="image-overlay"></div>
                    </div>
                    <Intro/> 
                    <a href="#about" className="down__pointer">
                        <i className="bx bx-chevron-down-circle home__scroll-arrow"></i>
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Home