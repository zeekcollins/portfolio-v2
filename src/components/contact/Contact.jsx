import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <span className="section__subtitle">If you're looking to reach out</span>
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container container grid">
                <div className="contact__info">
                    <i className='bx bx-envelope contact__icon' ></i>
                    <p><a href="mailto:collezek@gmail.com">Collezek@gmail.com</a></p>
                </div>
                <div className="contact__info">
                    <i className="bx bxl-linkedin-square contact__icon"></i>
                    <p><a href="https://www.linkedin.com/in/ezekialcollinsii/" target='_blank'>LinkedIn</a></p>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;