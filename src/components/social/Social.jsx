import React from "react";
import "./social.css"

const Social = () => {
    return (
        <div className="social-menu">
            <a href="https://www.linkedin.com/in/ezekialcollinsii/" className="social__link" target="_blank" rel="noreferrer">
                <i className="bx bxl-linkedin-square social__icon"></i>
            </a>

            <a href="https://github.com/zeekcollins" className="social__link" target="_blank" rel="noreferrer">
                <i className="bx bxl-github social__icon"></i>
            </a>

            <a href="https://twitter.com/justzeek" className="social__link" target="_blank" rel="noreferrer">
                <i className="bx bxl-twitter social__icon"></i>
            </a>
        </div>
    )
}

export default Social