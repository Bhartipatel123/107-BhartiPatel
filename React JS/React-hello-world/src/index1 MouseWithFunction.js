import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// //working with style
// .........................MouseOvering..............4
function MyBorder(props){
  return(
    <div className={'MyBorder MyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}
function MouseEnter(event){
  event.target.style.background= "yellow";
}
function MouseLeave(event){
  event.target.style.background= "none";
}

function MyDialogBox(){
  return(
    <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
      <MyBorder color="green" >
        <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
        <p className='MyDialog-message'>This is content from First Dialog Box.</p>
      </MyBorder>
     
    </div>
  );
}
ReactDOM.render(  
  <MyDialogBox /> ,
document.getElementById('root')
);
