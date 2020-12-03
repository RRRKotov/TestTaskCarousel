import React from "react";
import "./ImgComp.scss";

function ImgComp({ src }) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
  };
  return (
    <div className="mainImg">
      <img src={src} alt="slide-img" style={imgStyles} />

      <div className="circles">
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
      </div>
    </div>
  );
}

export default ImgComp;
