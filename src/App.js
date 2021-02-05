import React from 'react';
import Slider from './Components/Slider/Slider';

class App extends React.Component {
//    componentDidMount(){
//     const track = document.querySelector('.Slider__slider');
//     let initialPosition = null;
//     let moving = false;
//     let transform = 0;
    
//     const gestureStart = (e) => {
//       initialPosition = e.pageX;
//       console.log(initialPosition);
//       moving = true;
//       const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
//       if (transformMatrix !== 'none') {
//         transform = parseInt(transformMatrix.split(',')[4].trim());
//       }
//     }
    
//     const gestureMove = (e) => {
//       if (moving) {
//         const currentPosition = e.pageX;
//         const diff = currentPosition - initialPosition;
//         track.style.transform = `translateX(${transform + diff}px)`;  
//       }
//     };
    
//     const gestureEnd = (e) => {
//       moving = false;
//     }
    
//     if (window.PointerEvent) {
//       window.addEventListener('mousedown', gestureStart);
    
//       window.addEventListener('mousemove', gestureMove);
    
//       window.addEventListener('mouseup', gestureEnd);  
//     } 
//    }

    render() {
       return <div >
            <Slider/>
        </div>
    };
}
export default App;