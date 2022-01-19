import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// // Create a grading component which is accepting 3 subject marks

function Grade(props){
  let java = parseInt(props.a);
  let python = parseInt(props.b);
  let linux = parseInt(props.c);
   let result = (java + python + linux)/3;
  if (result>=90){
  return <h1> marks scored {props.a}, {props.b} and  {props.c} = A grade </h1>
} else if (result>=80){
  return <h1> marks scored {props.a}, {props.b} and  {props.c} = B grade </h1>
} else if (result>=70){
  return <h1> marks scored {props.a}, {props.b} and  {props.c} = c grade </h1>
} else{ 
  return <h1> marks scored {props.a}, {props.b} and  {props.c} = Fail </h1> }
}
ReactDOM.render(
  <Grade a="92" b="80" c="76"/>,
  document.getElementById('root')
);
