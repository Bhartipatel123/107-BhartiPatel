import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//nested components (  IF / Else  )
// when i give "True" on ReactDOM_______print "MyHello"
// when i give "False" on ReactDOM_______print "YourHEllo"

function MyHello(props){
  return <h1>Hi this is MyHello.</h1>
}
function YourHello(props){
  return <h1>Hi this is YourHello.</h1>
}
function SayHello(props){
  const display = props.isTrue;
  console.log(display);

  if(display){
    return <MyHello />
  }else{
    return <YourHello />
  }
}
ReactDOM.render(  
  <SayHello isTrue={true} /> ,   // <SayHello isTrue={false} /> ,
document.getElementById('root')
);