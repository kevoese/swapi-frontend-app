import React from 'react';
import './RadioButton.scss'

const Radiobutton = ({index, handleSlide}) => {
    return (
        <div className="radio">
            <input type="radio" onChange={handleSlide} defaultChecked ={index === 0} value={index * -100} name="slide" id={`radio-${index}`}/>
            <label htmlFor={`radio-${index}`}></label>
        </div>
    )
}

export default Radiobutton;
