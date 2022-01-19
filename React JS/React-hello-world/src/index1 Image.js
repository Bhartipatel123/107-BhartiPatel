import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// take two images, based on click event change image

function Image(props) {
  props.target.setAttribute( 'src', 'img1.jpg');
   props.target.setAttribute('alt', 'Image');
 }
 const Image2 = (
   <div>
         <img src="img2.jpg" alt="Image2" onClick={Image}
   /> 
   </div>
 );
 
 ReactDOM.render(
 Image2, document.getElementById('root')
 );