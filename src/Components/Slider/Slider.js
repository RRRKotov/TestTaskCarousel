import React, { Component, useState, useEffect } from "react";
import "./Slider.css";
import ImgComp from "../ImgComp/ImgComp";
import i1 from "../../img/i1.jpg";
import i2 from "../../img/i2.jpg";
import i3 from "../../img/i3.jpg";
import i4 from "../../img/i4.jpg";
import i5 from "../../img/i5.png";

import left from "../../img/left.png"

import right from "../../img/right.png"


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
    
    
    let circles = document.querySelectorAll(".dot");
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
          <button class="button left" onClick={goLeft}>
            <img src={left} className="arrow"/>
          </button>
          <button class="button right" onClick={goRight}>
          <img src={right} className="arrow"/>
          </button>
        </div>
        <div className="circles">
          <div onClick={() => dotClick(0)} className="dot"></div>
          <div onClick={() => dotClick(-100)} className="dot"></div>
          <div onClick={() => dotClick(-200)} className="dot"></div>
          <div onClick={() => dotClick(-300)} className="dot"></div>
          <div onClick={() => dotClick(-400)} className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
