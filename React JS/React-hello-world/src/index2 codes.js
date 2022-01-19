import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// //  Add 2 numbers


// function Addition(props)
// {
//   let result =parseInt (props.a) + parseInt (props.b);
//   return <h1>Addition of {props.a} and {props.b} is {result}</h1>
// }
// ReactDOM.render
// (  
//     <Addition a="10" b="20"/> ,
//   document.getElementById('root')
// );





// // Create a Calculator component which will perform addition,sub,multi,div.
// // accept values and operator as props, based on operatoe show only the desired result
// // 10,20,*


// function Calculation (props)
// {
//   let result =parseInt (props.a) / parseInt (props.b);
//   let result1 =parseInt (props.a) - parseInt (props.b);
//   let result2 =parseInt (props.a) / parseInt (props.b);
//   let result3 =parseInt (props.a) * parseInt (props.b);

//   return <h1>Calculation of {props.a} and {props.b} Add= {result} <br></br>
//    sub={result1} <br></br>
//     div={result2} <br></br>
//      mul={result3}  </h1>
// }
// ReactDOM.render
// (  
//     <Calculation a="10" b="5"/> ,
//   document.getElementById('root')
// );






// // Create a grading component which is accepting 3 subject marks


// function Grading(props)
// {
//   let java = parseInt(props.a);
//   let python = parseInt(props.b);
//   let linux = parseInt(props.c);
//   let linux = parseInt(props.d);
//   let result = (java + python + linux + communication)/3;
//   if (result >= 90)
//   {
//     return <h1> marks scored {props.a}, {props.b} {props.c} and  {props.d} = A grade </h1>
//   } else if (result>=80){
//   return <h1> marks scored {props.a}, {props.b} {props.c} and  {props.d} = B grade </h1>
// } else if (result>=70){
//   return <h1> marks scored {props.a}, {props.b} {props.c} and  {props.d} = c grade </h1>
// } else{ 
//   return <h1> marks scored {props.a}, {props.b} {props.c} and  {props.d} = Fail </h1> }
// }
// ReactDOM.render(
//   <Grading a="70" b="75" c="54" d="62"/>,
//   document.getElementById('root')
// );







// // Create a grading component which is accepting 3 subject marks

// function Grade(props){
//   let java = parseInt(props.a);
//   let python = parseInt(props.b);
//   let linux = parseInt(props.c);
//    let result = (java + python + linux)/3;
//   if (result>=90){
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} = A grade </h1>
// } else if (result>=80){
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} = B grade </h1>
// } else if (result>=70){
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} = c grade </h1>
// } else{ 
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} = Fail </h1> }
// }
// ReactDOM.render(
//   <Grade a="92" b="80" c="76"/>,
//   document.getElementById('root')
// );










// // Create a grading component which is accepting 3 subject marks

// function Grade(props){
//   let CN=parseInt(props.a);
//   let DB=parseInt(props.b);
//   let web=parseInt(props.c);
//   let result = (CN + DB + web)/3;
//   if(result>90 && result<=100)
//   {
//     return <h1>Obtained Grade A</h1>
//   }else if(result>80 && result<=90)
//   {
//     return <h1>Obtained Grade B</h1>
//   }else if(result>70 && result<=80)
//   {
//     return <h1>Obtained Grade C</h1>
//   }else if(result>60 && result<=70)
//   {
//     return <h1>Obtained Grade D</h1>
//   }else{
//     return <h2>Student Failed</h2>
//   }
// }
// ReactDOM.render(
//  <Grade a="80" b ="70" c="60" />,
//   document.getElementById('root')
// );








// // Grading with 3 numbers

// function Grade(props){
//   let x=parseInt(props.a);
//   let y=parseInt(props.b);
//   let z=parseInt(props.c);
//   let result = (x + y + z)/3;
//   if (result>90){
//   return <h1> A-grade </h1>
// } else if (result>80){
//   return <h1> B-grade </h1>
// } else if (result>70){
//   return <h1> C-grade </h1>
// } else{ 
//   return <h1> FAIL! </h1> }
// }
// ReactDOM.render(  
//   <Grade a="87" b="73" c="64"/>  , 
//   document.getElementById('root')
// );








// //class based components in React
// //state in class based components
// //function based components do not have their state while class based components have their state

// class Printname extends React.Component{
//   constructor(props){
//     super(props);    
//     this.surname = "Patel"; //the properties which are owned by component are know as state of the component
//   }

//   render(){
//     return <h1>Hello {this.props.name} {this.surname}</h1>;
//   }
// }
// ReactDOM.render
//   (  
//       <Printname name="Bharti"/> ,
//     document.getElementById('root')
//   );






// // Create a Calculator component which will perform addition,sub,multi,div.
// // accept values and operator as props, based on operatoe show only the desired result
// // 10,20,*
// // using class with props 

// class Calculator extends React.Component{
//   constructor(props) //states in class based components
//   {
//     super(props); //function based components doesn't have their states while class based components have their state
//     this.a=parseInt(this.props.a);
//     this.b=parseInt(this.props.b); //properties which are owned by components are known as state of components
//   }
//   render()
//   {
//   return <div>
//     <h1> Add= {this.a+this.b} </h1>
//   <h1> sub= {this.a-this.b} </h1>
//   <h1> sub= {this.a*this.b} </h1>
//   <h1> div= {this.a/this.b} </h1>
//   </div>
//   }
// }
// ReactDOM.render
// (  
//     <Calculator a="10" b="20"/> ,
//   document.getElementById('root')
// );







// // calculator 
// // using class and state

// class Calculator extends React.Component{
//   constructor(){
//     super();
//     this.a=parseInt(5.5);
//     this.b=parseInt(2);
//   }
//   render()
//   {
//   return <>
//     <h1> Add= {this.a+this.b} </h1>
//   <h1> sub= {this.a-this.b} </h1>
//   <h1> multi= {this.a*this.b} </h1>
//   <h1> div= {this.a/this.b} </h1>
//   </>
//   }
// }
// ReactDOM.render
// (  
//     <Calculator/> ,
//   document.getElementById('root')
// );









// //class based components in React
// //working with handlers

// class MySwitch extends React.Component{
//   constructor(props){
//     super(props);  
//     this.state = {isOn : true};    
//     this.myHandler = this.myHandler.bind(this);
//   }
//   myHandler(){
//     //how do we change the state
//     //this.state.isOn = false;
//     this.setState( i => (
//       {isOn: !i.isOn}
//     ));
//   }
//   render(){
//     return (
//       <button onClick={this.myHandler}>{this.state.isOn ? 'ON':'OFF'}</button>
//     );
//   }
// }
// ReactDOM.render
// (  
//     <MySwitch/> ,
//   document.getElementById('root')
// );





// // calculator 
// // using class and state

// class Calculator extends React.Component{
//   constructor(){
//     super();
//     this.a=parseInt(5.5);
//     this.b=parseInt(2);
//   }
//   render()
//   {
//   return <>
//     <h1> Add= {this.a+this.b} </h1>
//   <h1> sub= {this.a-this.b} </h1>
//   <h1> multi= {this.a*this.b} </h1>
//   <h1> div= {this.a/this.b} </h1>
//   </>
//   }
// }
// ReactDOM.render
// (  
//     <Calculator/> ,
//   document.getElementById('root')
// );










// // calculator with Button and state

// class Calculator extends React.Component{
//     constructor(props){
//       super(props);
//       this.state={ num1: '20', num2: '5', result: '' };
//       this.AddHandler = this.AddHandler.bind(this);
//       this.SubHandler = this.SubHandler.bind(this);
//       this.MultiHandler = this.MultiHandler.bind(this);
//       this.DivHandler = this.DivHandler.bind(this);
//     }
//   AddHandler(){
//     this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
//   }
//   SubHandler(){
//     this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
//   }
//   MultiHandler(){
//     this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
//   }
//   DivHandler(){
//     this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
//   }
//   render() {
//     return(
//       <div>
//         <h1>Calculte of 2 numbers is : {this.state.result}</h1>

//         <button onClick={()=>{this.AddHandler()}} >Addition</button>
//         <br/><br/>

//         <button onClick={()=>{this.SubHandler()}} >Substraction</button>
//         <br/><br/>
        
//         <button onClick={()=>{this.MultiHandler()}} >Multiplication</button>
//         <br/><br/>
        
//         <button onClick={()=>{this.DivHandler()}} >Division</button>
//         <br/><br/>
//       </div>
//     );
//   }
// }
// ReactDOM.render
// (  
//     <Calculator/> ,
//   document.getElementById('root')
// );












// // Another one____calculator

// class Calculator extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       a : parseInt(props.a),
//       b : parseInt(props.b),
//       result:0
//     };
//     this.AddHandler = this.AddHandler.bind(this);
//     this.SubHandler = this.SubHandler.bind(this);
//     this.MulHandler = this.MulHandler.bind(this);
//     this.divHandler = this.divHandler.bind(this);
//   }
//   AddHandler()
//   {

//     this.setState(i =>(
//       {result:i.a+i.b}
//     ));
//   }
//   SubHandler()
//   {
//     this.setState(i =>(
//       {result : i.a-i.b}
//     )); 
//   }
//   MulHandler()
//   {
//     this.setState(i=>(
//       {result : i.a*i.b}
//     ));
//     }
//   divHandler()
//   {
//     this.setState(i=>(
//       {result : i.a/i.b}
//     ));
//   }
//   render()
//   {
//     return(<>
//      <h1>{this.state.result}</h1>
//       <button onClick={this.AddHandler}>Add</button>
//     <button onClick={this.SubHandler}>Subtract</button> 
//    <button onClick={this.MulHandler}>Multiply</button>
//     <button onClick={this.divHandler}>Division</button>
//     </>
//     );
//   }
// }
// ReactDOM.render(
//   <Calculator a="20" b="10"/>,
//   document.getElementById("root")
// );












// //nested components (  IF / Else  )
// // when i give "True" on ReactDOM_______print "MyHello"
// // when i give "False" on ReactDOM_______print "YourHEllo"

// function MyHello(props){
//   return <h1>Hi this is MyHello.</h1>
// }
// function YourHello(props){
//   return <h1>Hi this is YourHello.</h1>
// }
// function SayHello(props){
//   const display = props.isTrue;
//   console.log(display);

//   if(display){
//     return <MyHello />
//   }else{
//     return <YourHello />
//   }
// }
// ReactDOM.render(  
//   <SayHello isTrue={true} /> ,   // <SayHello isTrue={false} /> ,
// document.getElementById('root')
// );










// // take two images, based on click event change image

// function Image(props) {
//   props.target.setAttribute( 'src', 'https://unsplash.com/photos/FaFZCtl1yug');
//    props.target.setAttribute('alt', 'Image');
//  }
//  const Image2 = (
//    <div>
//          <img src="https://unsplash.com/photos/1cqMYELA22g" alt="Image2" onClick={Image}
//    /> 
//    </div>
//  );
 
//  ReactDOM.render(
//  Image2, document.getElementById('root')
//  );