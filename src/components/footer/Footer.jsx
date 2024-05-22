import React from 'react';
import "./footer.css";

const Footer = () => {
    const logoContent = '<Z/>';

    return (
        <footer className="footer">
            <div className="footer__container container">
                <a href="index.html" className="footer__title">{logoContent}</a>
                <div className="footer__links">
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>

                        <li>
                            <a href="#experience" className="footer__link">Experience</a>
                        </li>

                        <li>
                            <a href="#projects" className="footer__link">Projects</a>
                        </li>
                    </ul>

                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/ezekialcollinsii/" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className="bx bxl-linkedin"></i>
                        </a>

                        <a href="https://github.com/zeekcollins" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>

                        <a href="https://twitter.com/justzeek" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>

            <p className="footer__quote">Designed & Built by <a href="https://www.linkedin.com/in/ezekialcollinsii/" className="footer__designer" target="_blank" rel="noreferrer">Zeek Collins</a></p>
        </footer>
    );
};

export default Footer;