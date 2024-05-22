import { useEffect } from 'react';

const useIntersectionObserver = (setRef, options) => {
  useEffect(() => {
    if (!setRef.current) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = Array.isArray(setRef.current) ? setRef.current : [setRef.current];

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [setRef, options]);
};

export default useIntersectionObserver;
