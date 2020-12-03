import React, { useState } from "react";
import "./Slider.scss";
import ImgComp from "./ImgComp";
import i1 from "./img/i1.jpg";
import i2 from "./img/i2.jpg";
import i3 from "./img/i3.jpg";
import i4 from "./img/i4.jpg";
import i5 from "./img/i5.png";


function Slider() {
  
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
  ];
  const [x, setX] = useState(0);
  console.log(x);
  console.log(this);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
            
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
      <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
      <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Slider;