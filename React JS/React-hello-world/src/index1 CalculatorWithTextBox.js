import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// // calculator with inputText.............................1

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state={ num1: ' ', num2: ' ', result: '' };
    this.AddHandler = this.AddHandler.bind(this);
    this.SubHandler = this.SubHandler.bind(this);
    this.MultiHandler = this.MultiHandler.bind(this);
    this.DivHandler = this.DivHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }
AddHandler(){

  this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
}
SubHandler(){
  this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
}
MultiHandler(){
  this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
}
DivHandler(){
  this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
}
handleChange()
{
  var number1=document.getElementById("input1").value;
  var number2=document.getElementById("input2").value;
  this.setState({
    num1:number1,
    num2:number2
  })
}
render() {
  return(
    <div>
      <h1>Calculte of 2 numbers is : {this.state.result}</h1>
       
      <input id="input1" type ="text"  num1={this.state.num1} onChange = {this.handleChange} />
      <input id="input2" type ="text"  num2={this.state.num2} onChange = {this.handleChange} /><br/><br/>
    
      <button onClick={()=>{this.AddHandler()}} >Add</button>
      <br/><br/>

      <button onClick={()=>{this.SubHandler()}} >Sub</button>
      <br/><br/>
      
      <button onClick={()=>{this.MultiHandler()}} >Multi</button>
      <br/><br/>
      
      <button onClick={()=>{this.DivHandler()}} >Div</button>
      <br/><br/>
    </div>
  );
}
}
ReactDOM.render
(  
  <Calculator/> ,
document.getElementById('root')
);