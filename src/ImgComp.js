import React from "react";


const ImgComp=({src})=>{
  let imgStyles = {
    width: 80 + "%",
    height: "auto"
  };
  return <img src={src} alt="slide-img" style={imgStyles} />
}
export default ImgComp
