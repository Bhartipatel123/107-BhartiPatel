import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




//currency converter using fields
// 1. currency convertor with text field and button.

class CurrencyConv extends React.Component{
  constructor(){
    super();
    this.handler = this.handler.bind(this);
    this.state={currentCurrency:"Ruppee", value:"",}
  }
  ToRup(){
   if(this.state.currentCurrency=="Doller"){
     this.setState(i=>(
       {currentCurrency:"Ruppee", value:parseFloat(i.value*80)}))
   }
   if(this.state.currentCurrency=="Yen")
   {this.setState(i=>({currentCurrency:"Ruppee", value:parseFloat(i.value*40)}))
   }
  }
  ToDol(){
   if(this.state.currentCurrency=="Ruppee"){
     this.setState(i=>({currentCurrency:"Doller", value:parseFloat(i.value/80)}))
   }
   if(this.state.currentCurrency=="Yen"){
     this.setState(i=>({currentCurrency:"Doller", value:parseFloat(i.value/30)}))
   }
  }
  ToYen(){
    if(this.state.currentCurrency=="Doller"){
     this.setState(i=>({currentCurrency:"Yen", value:parseFloat(i.value*30)}))
   }
   if(this.state.currentCurrency=="Ruppee"){
     this.setState(i=>({currentCurrency:"Yen",  value:parseFloat(i.value/40)}))
   }
  }
  handler(btnId){
    var val= document.getElementById("input").value;
    this.setState({value : val});
  console.log(this.state.value);
   if(btnId=="Ruppee"){
      this.ToInr();
   }else if(btnId=="Doller"){
     this.ToDol();
   }else if(btnId=="Yen"){
     this.ToYen();
   }
  }
  render(){
    return(
    <div>
   <h1>{this.state.currentCurrency}: {this.state.value}</h1>  
   <h1>{this.state.currentCurrency} To</h1>
    <input  id="input" type="text" defaultValue={this.state.value}/>
   <button id="rupee" onClick={()=>this.handler("Rupee")} onChange={this.changeHandler}>Rupee</button>
   <button id="doller" onClick={()=>this.handler("Doller")} onChange={this.changeHandler}>Doller</button>
   <button id="yen" onClick={()=>this.handler("Yen")} onChange={this.changeHandler}>Yen</button>
   </div>
    );
  }
}
ReactDOM.render(
  <CurrencyConv />,
  document.getElementById("root")
);
