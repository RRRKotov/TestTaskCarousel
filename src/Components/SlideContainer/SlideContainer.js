import React from "react";
import "./SlideContainer.css"

const SlideContainer = ({ props }) => {
  
  return <div className="SliderContainer" dangerouslySetInnerHTML={{
    __html:props.html
  }} style={props.css}></div>
};
export default SlideContainer;
