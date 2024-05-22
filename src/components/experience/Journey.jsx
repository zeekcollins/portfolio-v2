import { React, useState} from 'react';
import GoogleLogo from "../google/GoogleLogo";
import "./experience.css";

const Journey = () => {
    const [modalState, setModalState] = useState(0);

    const toggleModal = (index) => {
        setModalState(index)
    }

    const customeGoogleFontStyle = {
        fontSize: 'var(--h1-font-size)',
    };

    return (
        <div className="journey__container container grid">
            <div className="journey__section">
                <div className="journey__content">
                    <div className="journey__data">
                        <div className="left-side" onClick={() => toggleModal(1)}>
                            <h3 className="journey__title"><GoogleLogo text="Google"/></h3>
                            <span className="journey__subtitle">Software Engineer</span>
                            <div className="journey__calendar">
                                <i className="bx bx-calendar"></i> &nbsp; Mar 2022 - Apr 2024
                            </div>
                        </div>

                        <div>
                            <span className="journey__rounder"></span>
                            <span className="journey__line"></span>
                        </div>
                    </div>

                    <div className="journey__data">
                        <div></div>

                        <div>
                            <span className="journey__rounder"></span>
                            <span className="journey__line"></span>
                        </div>

                        <div className="right-side" onClick={() => toggleModal(2)}>
                            <h3 className="journey__title">University of Wisconsin-Milwaukee</h3>
                            <span className="journey__subtitle">B.A. Computer Science</span>
                            <div className="journey__calendar last-calendar">
                                <i className="bx bx-calendar"></i> &nbsp; 2017 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="journey__data">
                        <div className="left-side" onClick={() => toggleModal(3)}>
                            <h3 className="journey__title">University of Wisconsin-Milwaukee</h3>
                            <span className="journey__subtitle">B.Sc. Information Science & Technology</span>
                            <div className="journey__calendar">
                                <i className="bx bx-calendar"></i> &nbsp; 2017 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="journey__rounder"></span>
                        </div>
                    </div>
                </div>


                <div className={`journey__modal ${modalState === 1 ? "active-modal" : ""}`}>
                    <div className="journey__modal-content">
                        <i className='bx bx-x journey__modal-close' onClick={() => toggleModal(0)}></i>

                        <h3 className="journey__modal-title"><GoogleLogo text="Google" style={customeGoogleFontStyle}/></h3>
                        <p className="journey__modal-description">
                            I spent the first two years of my software 
                            engineering career at Google. I was fortunate
                            to work with some of the smartest, hardest working
                            people I've ever met.
                        </p>

                        <ul className="journey__modal-highlights grid">
                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Built end-to-end contextualized Help Panel</p>
                            </li>

                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Automated sections of the ML developer workflow</p>
                            </li>

                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Contributed to TensorFlow Lite open-source Telemetry</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`journey__modal ${modalState === 2 ? "active-modal" : ""}`}>
                    <div className="journey__modal-content">
                        <i className='bx bx-x journey__modal-close' onClick={() => toggleModal(0)}></i>

                        <h3 className="journey__modal-title">Bachelor of Arts in Computer Science</h3>
                        <p className="journey__modal-description">
                            I graduated from the University of Wisconsin-Milwaukee
                        </p>

                        <ul className="journey__modal-highlights grid">
                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Doubled-majored in Information Science & Computer Science</p>
                            </li>

                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Made the Dean's List a number of times</p>
                            </li>

                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Worked a full-time job while attending courses full-time</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`journey__modal ${modalState === 3 ? "active-modal" : ""}`}>
                    <div className="journey__modal-content">
                        <i className='bx bx-x journey__modal-close' onClick={() => toggleModal(0)}></i>

                        <h3 className="journey__modal-title">Bachelor of Science in Information Science & Technology</h3>
                        <p className="journey__modal-description">
                            I graduated from the University of Wisconsin-Milwaukee
                        </p>

                        <ul className="journey__modal-highlights grid">
                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Doubled-majored in Information Science & Computer Science</p>
                            </li>

                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Made the Dean's List a number of times</p>
                            </li>

                            <li className="journey__modal-highlight">
                                <i className='bx bx-check-circle journey__modal-icon'></i>
                                <p className="journey__modal-info">Worked a full-time job while attending courses full-time</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;