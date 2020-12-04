import React, { Component, useState, useEffect } from "react";
import "./Slider.scss";
import ImgComp from "../ImgComp/ImgComp";
import i1 from "../../img/i1.jpg";
import i2 from "../../img/i2.jpg";
import i3 from "../../img/i3.jpg";
import i4 from "../../img/i4.jpg";
import i5 from "../../img/i5.png";

const Slider = () => {
  const [x, setX] = useState(0);

  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
  ];

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  const dotClick = (value) => {
    setX(value);
  };


  useEffect(() => {
    
    
    let circles = document.querySelectorAll(".fa-circle");
    const clearOpac=()=>{
      circles.forEach(element=>element.style.opacity=0.6)
    }
    switch (x) {
      case 0:
        clearOpac()
        circles[0].style.opacity = 1;
        break;
      case -100:
        clearOpac()
        circles[1].style.opacity = 1;
        break;
      case -200:
        clearOpac()
        circles[2].style.opacity = 1;
        break;
      case -300:
        clearOpac()
        circles[3].style.opacity = 1;
        break;
      case -400:
        clearOpac()
        circles[4].style.opacity = 1;
        break;
    }
  }, [x]);

  return (
    <div className="container">
      <div className="main">
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
        <div className="circles">
          <i onClick={() => dotClick(0)} className="fas fa-circle"></i>
          <i onClick={() => dotClick(-100)} className="fas fa-circle"></i>
          <i onClick={() => dotClick(-200)} className="fas fa-circle"></i>
          <i onClick={() => dotClick(-300)} className="fas fa-circle"></i>
          <i onClick={() => dotClick(-400)} className="fas fa-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
