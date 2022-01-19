import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// // calculator 
// // using class and state

class Calculator extends React.Component{
  constructor(){
    super();
    this.a=parseInt(5.5);
    this.b=parseInt(2);
  }
  render()
  {
  return <>
    <h1> Add= {this.a+this.b} </h1>
  <h1> sub= {this.a-this.b} </h1>
  <h1> multi= {this.a*this.b} </h1>
  <h1> div= {this.a/this.b} </h1>
  </>
  }
}
ReactDOM.render
(  
    <Calculator/> ,
  document.getElementById('root')
);
