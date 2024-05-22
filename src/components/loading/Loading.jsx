import React, { useEffect } from 'react';
import './loading.css';

const Loading = ({ setLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoadingComplete(true); 
        }, 7000);
    
        return () => clearTimeout(timer);
      }, [setLoadingComplete]);

  return (
    <div className="loading">
        <svg className="logo-svg" width="280" height="154" viewBox="0 0 280 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.2279 110.627L35.9581 111.348H36.984H55.416H61.5269L57.1683 107.065L29.4148 79.792L57.1683 52.5191L61.5269 48.236H55.416H36.984H35.9581L35.2279 48.9567L5.78788 78.0127L3.98503 79.792L5.78788 81.5713L35.2279 110.627Z" stroke="#C7D4C4" strokeWidth="2"/>
            <path d="M140.899 113.328V110.828H138.399H101.612L140.507 49.7752L140.899 49.1607V48.432V37.04V34.54H138.399H79.775H77.275V37.04V49.712V52.212H79.775H116.442L77.6647 113.268L77.275 113.881V114.608V126V128.5H79.775H138.399H140.899V126V113.328Z" stroke="#C7D4C4" strokeWidth="2"/>
            <path d="M204.139 5.75849L204.89 2.668H201.71H187.246H185.279L184.816 4.57956L150.128 147.812L149.38 150.9H152.558H166.894H168.859L169.323 148.99L204.139 5.75849Z" stroke="#C7D4C4" strokeWidth="2"/>
            <path d="M224.836 48.236H218.725L223.084 52.5191L250.837 79.792L223.084 107.065L218.725 111.348H224.836H243.268H244.294L245.024 110.627L274.464 81.5713L276.267 79.792L274.464 78.0127L245.024 48.9567L244.294 48.236H243.268H224.836Z" stroke="#C7D4C4" strokeWidth="2"/>
        </svg>
    </div>
  );
}

export default Loading;
