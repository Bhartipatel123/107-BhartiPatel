import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// // Create a Calculator component which will perform addition,sub,multi,div.
// // accept values and operator as props, based on operatoe show only the desired result
// // 10,20,*

function Calculation (props)
{
  let result =parseInt (props.a) / parseInt (props.b);
  let result1 =parseInt (props.a) - parseInt (props.b);
  let result2 =parseInt (props.a) / parseInt (props.b);
  let result3 =parseInt (props.a) * parseInt (props.b);

  return <h1>Calculation of {props.a} and {props.b} Add= {result} <br></br>
   sub={result1} <br></br>
    div={result2} <br></br>
     mul={result3}  </h1>
}
ReactDOM.render
(  
    <Calculation a="10" b="5"/> ,
  document.getElementById('root')
);











