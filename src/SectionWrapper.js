import React, { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './App.css';

const SectionWrapper = ({ children, className }) => {
  const sectionRef = useRef(null);

  useIntersectionObserver(sectionRef, {
    threshold: 0.33,
    rootMargin: '0px 0px 0px 0px'
  });

  return (
    <div ref={sectionRef} className={`fade-in-section ${className || ''}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
