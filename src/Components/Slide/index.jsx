import React, { useRef } from "react";
import Radiobutton from "./Radiobutton";
import "./Slide.scss";

const Slide = ({ children }) => {
  const sliderRef = useRef();
  const set = children.length / 3;
  const width = set * 100;
  const handleSlide = e => {
    sliderRef.current.style.transform = `translateX(${e.target.value / set}%)`;
  };

  const generateRadio = number => {
    const RadioList = [];
    for (let i = 0; i < number; i++) {
      RadioList.push(
        <Radiobutton handleSlide={handleSlide} key={i} index={i} />
      );
    }
    return RadioList;
  };

  const RadioList = generateRadio(set);
  return (
    <div className="slide-container">
      <div style={{ width: `${width}%` }} className="slide" ref={sliderRef}>
       {children}
      </div>
      <div className="radiowrap">{RadioList}</div>
    </div>
  );
};

export default Slide;
