import React, { useState, useEffect, useRef } from 'react';
import "./header.css"
import MyResume from "../../assets/Resume - Ezekial Collins.pdf"

const Header = () => {
    const logoContent = '<Z/>';

    const [isNavVisible, setIsNavVisible] = useState(true); 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [Toggle, setShowMobileMenu] = useState(false);
    const [ActiveNavItem, setActiveNavItem] = useState("#home")

    const mobileMenuRef = useRef(null);
    const blurredDropRef = useRef(null);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY; 

        setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 50);
        setPrevScrollPos(currentScrollPos);
    };

    const updateScrollListener = () => {
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
            setShowMobileMenu(false);
        } else {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = Toggle ? 'hidden' : 'auto';
            setIsNavVisible(true);

        }
    };

    const handleMobileMenuToggle = () => {
        setShowMobileMenu(prevToggle => !prevToggle);
        
        const updatedToggleState = !Toggle; 
        document.body.style.overflow = updatedToggleState ? 'hidden' : 'auto';
        blurredDropRef.current.style.display = updatedToggleState ? 'block' : 'none';
    };

    const handleMobileMenuItemClick = () => {
        setShowMobileMenu(false); 
        document.body.style.overflow = 'auto'; 
        blurredDropRef.current.style.display = 'none';
    };

    const handleClickOutsideMobileMenu = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setShowMobileMenu(false);
            document.body.style.overflow = 'auto';
            blurredDropRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        updateScrollListener();
        window.addEventListener('resize', updateScrollListener);
        document.addEventListener('mousedown', handleClickOutsideMobileMenu);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateScrollListener);
            document.removeEventListener('mousedown', handleClickOutsideMobileMenu);
        
        };
    }, [Toggle, prevScrollPos]);

    return (
        <div className={`header-container ${!isNavVisible ? 'header-hidden' : ''}`}>
            <header className="header">
                <nav className="desk-nav nav container">
                    <a href="index.html" className="nav__logo">
                        {logoContent}
                    </a>

                    <div className="desk-nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className={`nav__link ${ActiveNavItem === "#home" ? "active-link" : ""}`} onClick={() => setActiveNavItem("#home")}>
                                    <i className="bx bx-home nav__icon"></i> Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className={`nav__link ${ActiveNavItem === "#about" ? "active-link" : ""}`} onClick={() => setActiveNavItem("#about")}>
                                    <i className="bx bx-user nav__icon"></i> About
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#experience" className={`nav__link ${ActiveNavItem === "#experience" ? "active-link" : ""}`} onClick={() => setActiveNavItem("#experience")}>
                                    <i className="bx bx-briefcase-alt-2 nav__icon"></i> Experience
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#projects" className={`nav__link ${ActiveNavItem === "#projects" ? "active-link" : ""}`} onClick={() => setActiveNavItem("#projects")}>
                                    <i className="bx bx-code-curly nav__icon"></i> Portfolio
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className={`nav__link ${ActiveNavItem === "#contact" ? "active-link" : ""}`} onClick={() => setActiveNavItem("#contact")}>
                                    <i className="bx bx-send nav__icon"></i> Contact Me
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href={MyResume} className="nav__link" target="_blank">
                                    <i className="bx bx-file nav__icon"></i> Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className={`blurred-drop ${Toggle ? 'animate-blur' : 'animate-unblur'}`} ref={blurredDropRef}></div>
            <nav className={`mobile-nav nav container ${Toggle ? "show-menu" : ""}`} ref={mobileMenuRef}>
                <div className="front-layer">
                    <a href="index.html" className="nav__logo">
                        {logoContent}
                    </a>

                    <div className={Toggle ? "nav__toggle is-active" : "nav__toggle"} onClick={() => handleMobileMenuToggle(Toggle)}>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="mobile-nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a 
                                href="#home" 
                                className={`nav__link ${ActiveNavItem === "#home" ? "active-link" : ""}`} 
                                onClick={(e) => {
                                    setActiveNavItem("#home"); 
                                    handleMobileMenuItemClick(e);
                                    }
                                }
                            >
                                <i className="bx bx-home nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#about" 
                                className={`nav__link ${ActiveNavItem === "#about" ? "active-link" : ""}`} 
                                onClick={(e) => {
                                    setActiveNavItem("#about"); 
                                    handleMobileMenuItemClick(e);
                                    }
                                }
                            >
                                <i className="bx bx-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#experience" 
                                className={`nav__link ${ActiveNavItem === "#experience" ? "active-link" : ""}`} 
                                onClick={(e) => {
                                    setActiveNavItem("#experience"); 
                                    handleMobileMenuItemClick(e);
                                    }
                                }
                            >
                                <i className="bx bx-briefcase-alt-2 nav__icon"></i> Experience
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#projects" 
                                className={`nav__link ${ActiveNavItem === "#projects" ? "active-link" : ""}`} 
                                onClick={(e) => {
                                    setActiveNavItem("#projects"); 
                                    handleMobileMenuItemClick(e);
                                    }
                                }
                            >
                                <i className="bx bx-code-curly nav__icon"></i> Portfolio
                            </a>
                        </li>
                    
                        <li className="nav__item">
                            <a 
                                href="#contact" 
                                className={`nav__link ${ActiveNavItem === "#contact" ? "active-link" : ""}`} 
                                onClick={(e) => {
                                    setActiveNavItem("#contact"); 
                                    handleMobileMenuItemClick(e);
                                    }
                                }
                            >
                                <i className="bx bx-send nav__icon"></i> Contact Me
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href={MyResume} className="nav__link" onClick={handleMobileMenuItemClick} target="_blank">
                                <i className="bx bx-file nav__icon"></i> Resume
                            </a>
                        </li>
                    </ul>

                    <div className="mobile-nav__social">
                        <a href="https://www.linkedin.com/in/ezekialcollinsii/" className="mobile-nav__social-link" target="_blank" rel="noreferrer">
                            <i className="bx bxl-linkedin"></i>
                        </a>

                        <a href="https://github.com/zeekcollins" className="mobile-nav__social-link" target="_blank" rel="noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>

                        <a href="https://twitter.com/justzeek" className="mobile-nav__social-link" target="_blank" rel="noreferrer">
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header