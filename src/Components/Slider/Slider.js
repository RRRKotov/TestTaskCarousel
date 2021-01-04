import React, { useState, useEffect } from "react";
import "./Slider.css";
import ImgComp from "../ImgComp/ImgComp";
import i1 from "../../img/i1.jpg";
import i2 from "../../img/i2.jpg";
import i3 from "../../img/i3.jpg";
import i4 from "../../img/i4.jpg";
import i5 from "../../img/i5.png";
import left from "../../img/left.png";
import right from "../../img/right.png";
import styles from "./Slider.css";

const Slider = () => {
  const [x, setX] = useState(0);

  const images = [i1, i2, i3, i4, i5];

  const NUMBER_OF_SLIDES = 5;

  let sliderArr = [];

  images.forEach((item, index) => {
    if (index < NUMBER_OF_SLIDES) {
      sliderArr.push(<ImgComp src={item} />);
    }
  });

  const SLIDERS_NUMBER = 100;

  const goLeft = () => {
    x === 0
      ? setX(-SLIDERS_NUMBER * (sliderArr.length - 1))
      : setX(x + SLIDERS_NUMBER);
  };

  const goRight = () => {
    x === -SLIDERS_NUMBER * (sliderArr.length - 1)
      ? setX(0)
      : setX(x - SLIDERS_NUMBER);
  };

  const dotClick = (value) => {
    setX(value);
  };

  useEffect(() => {
    let circles = document.querySelectorAll(".Slider__dot");
    const clearOpac = () => {
      circles.forEach((element) => (element.style.opacity = 0.6));
    };
    clearOpac();
    let index = -x / SLIDERS_NUMBER;
    circles[index].style.opacity = 1;
  }, [x]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.slider}>
          {sliderArr.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.slide}
                style={{ transform: `translateX(${x}%)` }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className={styles.circles}>
          {sliderArr.map((item, index) => {
            const newIndex = -index * SLIDERS_NUMBER;
            return (
              <div
                key={index}
                className={styles.dot}
                onClick={() => dotClick(newIndex)}
              ></div>
            );
          })}
        </div>
        <button className={styles.button + " " + styles.left} onClick={goLeft}>
          <img src={left} className={styles.arrow} />
        </button>
        <button
          className={styles.button + " " + styles.right}
          onClick={goRight}
        >
          <img src={right} className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
