// Example: A hidden button or element in your footer
import React from 'react';
import Img from "../../img/easteregg.png"

const EasterEgg = () => {
    const handleEasterEggClick = () => {
        window.location.href = 'https://github.com/Viren-Kevat/Team_7.git';
    };

    return (
        <div onClick={handleEasterEggClick} style={{ position: 'fixed', bottom: 0, right: 0, cursor: 'pointer', opacity: 0.5 }}>
            {/* Example: a small, almost hidden icon */}
            <img src={Img} alt="easter egg" width="30" height="30" style={{backgroundColor:"transparent",background:"none"}}/>
        </div>
    );
};

export default EasterEgg;
