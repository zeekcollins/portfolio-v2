import React from 'react';
import "./googlelogo.css"

const GoogleLogo = ({ text, style }) => {
    const coloredText = text.split('').map((char, index) => {
        const colorClass = `${char.toLowerCase()}${index}`;
        return (
            <span key={index} className={`google-logo ${colorClass}`} style={style}>
                {char}
            </span>
        );
    });

    return <span>{coloredText}</span>;
};

export default GoogleLogo;