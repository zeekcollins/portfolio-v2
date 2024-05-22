import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bxs-briefcase about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <p className="about__subtitle">2+ Years</p>
                <p className="about__subtitle">Fullstack Development</p>
            </div>

            <div className="about__box">
                <i className='bx bxs-graduation about__icon' ></i>
                <h3 className="about__title">Education</h3>
                <p className="about__subtitle">B.Sc. Information Science</p>
                <p className="about__subtitle">B.A. Computer Science</p>
            </div>
        </div>
    );
};

export default Info;