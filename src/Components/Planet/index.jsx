import React from 'react';
import './Planet.scss';

const Planet = ({img, text}) => {
    return (
        <div className="planet" style={{background: `linear-gradient(180deg, rgba(183, 183, 183, 0) 74.48%, #000000 86.46%), url("${img}")`}}>
            <p className="text">{text}</p>
        </div>
    )
}

export default Planet;
