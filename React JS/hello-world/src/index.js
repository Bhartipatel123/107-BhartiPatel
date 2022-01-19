import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CalHook(props){
  const[first,setFirst] = useState(props.a);
  const[second,setSecond] = useState(props.b);
  const[Add,setAdd] = useState();
  const[Sub,setSub] = useState();
  const[Mul,setMul] = useState();
  const[Div,setDiv] = useState();
  const handleAddition = () =>{ setAdd(parseInt(first)+parseInt(second)); }
  const handleSubstraction = () =>{ setSub(parseInt(first)-parseInt(second)); }
  const handleMultiplication = () =>{ setMul(parseInt(first)*parseInt(second)); }
  const handleDivision = () =>{ setDiv(parseInt(first)/parseInt(second)); }

  return(
    <div>
      <h1>Calculate by given 2 numbers. </h1>
      <input type="text" value={first} onChange={e => setFirst(+e.target.value)} placeholder="enter 1st no."/> <br/> <br/>
      <input type="text"  value={second} onChange={e => setSecond(+e.target.value)}  placeholder="enter 2nd no." /> <br/> <br/>
      <button onClick={handleAddition}>Addition</button> <br/> <br/>
      <p>After Giving numbers {first} and {second} Addition is : {Add} </p>
      <button onClick={handleSubstraction}>Substraction</button> <br/> <br/>
      <p>After Giving numbers {first} and {second} Substraction is : {Sub} </p>
      <button onClick={handleMultiplication}>Multiplication</button> <br/> <br/>
      <p>After Giving numbers {first} and {second}  Multiplication is : {Mul} </p>
      <button onClick={handleDivision}>Division</button> <br/> <br/>
      <p>After Giving numbers {first} and {second} Division is : {Div}</p>
    </div>
  );
}
ReactDOM.render(  
  <CalHook  /> ,
document.getElementById('root')
);