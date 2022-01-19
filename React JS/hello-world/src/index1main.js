// import React from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function LoginValidationHook(){
  const[name,setName] = useState(" ");
  const[password,setPassword]=useState(" ");
  const handler = (e) =>{
    if(e.target.name ==="name"){
      setName(e.target.value);
    }else{
      setPassword(e.target.value);
    } 
  }
  const submitHandler =()=>{
    if(name!=="B@gmail.com" && password!=="123"){
      alert("Your Username and Password is incorrect");
    }else{
      alert("login Successfull");
    }
  }
  return(
   <>   
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" >
    <a
      class="nav-link active"
      id="tab-register"
      data-mdb-toggle="pill"
      role="tab"
      aria-controls="pills-register"
      aria-selected="true"
      >Registration Page</a>
  </li>
</ul>
<div class="tab-content">
  <div
    class="tab-pane fade show active"
    id="pills-login"
    role="tabpanel"
    aria-labelledby="tab-login" 
  >
    <form>
      <div class="form-outline mb-4">
        <label class="form-label" for="First name">Email ID</label>
        <input type="text" name="name" value={name} class="form-control" onChange={handler} placeholder='Enter Email Id' />
      </div>
      <div class="form-outline mb-4">
      <label class="form-label" for="password">Password</label>
        <input type="password" name="password" value={password} onChange={handler} class="form-control" placeholder='password' />
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4" onClick={submitHandler}>Login</button>
    </form>
  </div>
</div>
     </>
  );
}
ReactDOM.render( <LoginValidationHook  /> , document.getElementById('root'));






// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// // ................Calculator with Hooks.................Done.
// function CalHook(props){
//   const[first,setFirst] = useState(props.a);
//   const[second,setSecond] = useState(props.b);
//   const[Add,setAdd] = useState();
//   const[Sub,setSub] = useState();
//   const[Mul,setMul] = useState();
//   const[Div,setDiv] = useState();
//   const handleAddition = () =>{ setAdd(parseInt(first)+parseInt(second)); }
//   const handleSubstraction = () =>{ setSub(parseInt(first)-parseInt(second)); }
//   const handleMultiplication = () =>{ setMul(parseInt(first)*parseInt(second)); }
//   const handleDivision = () =>{ setDiv(parseInt(first)/parseInt(second)); }
//   return(
//     <div>
//       <h1>Calculate by given 2 numbers. </h1>
//       <input type="text" value={first} onChange={e => setFirst(+e.target.value)} /> <br/> <br/>
//       <input type="text"  value={second} onChange={e => setSecond(+e.target.value)}  /> <br/> <br/>
//       <button onClick={handleAddition}>Addition</button> <br/> <br/>
//       <p>After Giving numbers {first} and {second} Addition is : {Add} </p>
//       <button onClick={handleSubstraction}>Substraction</button> <br/> <br/>
//       <p>After Giving numbers {first} and {second} Substraction is : {Sub} </p>
//       <button onClick={handleMultiplication}>Multiplication</button> <br/> <br/>
//       <p>After Giving numbers {first} and {second}  Multiplication is : {Mul} </p>
//       <button onClick={handleDivision}>Division</button> <br/> <br/>
//       <p>After Giving numbers {first} and {second} Division is : {Div}</p>
//     </div>
//   );
// }
// ReactDOM.render( <CalHook  /> , document.getElementById('root'));







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// // The Student Login Page...............................................Done..........

// class StudentLoginForm extends React.Component{
//   constructor(){
//     super();
//     this.state={fname:"",lname:"",email:"",password:""};
//     this.handler=this.handler.bind(this);
//     this.submitHandler=this.submitHandler.bind(this);
//   }
//   handler(event){
//     const value =event.target.value;
//     const name =event.target.name;
//     this.setState({[name]:value}) 
//   }
//   submitHandler(){
//     const st=this.state;
//     var string=("fname = "+st.fname+" lname= "+st.lname+" email =  "+st.email+" password = "+st.password);
//     alert(string);
//   }
//   render()
//   {
//     return(
//     <>  
// <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
//   <li class="nav-item" >
//     <a
//       class="nav-link active"
//       id="tab-register"
//       data-mdb-toggle="pill"
//       role="tab"
//       aria-controls="pills-register"
//       aria-selected="true"
//       >Student Registration Page</a>
//   </li>
// </ul>
// <div class="tab-content">
//   <div
//     class="tab-pane fade show active"
//     id="pills-login"
//     role="tabpanel"
//     aria-labelledby="tab-login"
//   >
//     <form>
//       <div class="form-outline mb-4">
//         <label class="form-label" for="First name">First Name</label>
//         <input type="text" name="fname" value={this.state.fname} class="form-control" onChange={this.handler} placeholder='First name' />
//       </div>
//       <div class="form-outline mb-4">
//         <label class="form-label" for="Last name">Last Name</label>
//         <input type="text" name="lname" class="form-control" value={this.state.lname} onChange={this.handler}  placeholder='Last name' />
//       <div class="form-outline mb-4">
//         <label class="form-label" for="email">Email ID</label>
//         <input type="email" name="email" class="form-control" onChange={this.handler} value={this.state.email} placeholder='email' />
//       </div>
//       </div>
//       <div class="form-outline mb-4">
//       <label class="form-label" for="password">Password</label>
//         <input type="password" name="password" value={this.state.password} onChange={this.handler} class="form-control" placeholder='password' />
//       </div>
//       <button type="button" class="btn btn-primary btn-block mb-4" onClick={this.submitHandler}>Sign Up</button>
//     </form>
//   </div>
// </div>
//      </>
//     );
//   }
// }
// ReactDOM.render(  
//     <StudentLoginForm/> ,
//   document.getElementById('root')
//   );














// //function based component and class based component difference is -->state
// //function based component are stateles
// //class based component are stateful

// //React Hooks
// // technique to use stateful behaviour in function based components
// //useState Hook
// //Returns a stateful value, and a function to update it.




















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
// // accept values and operator as props, based on operator show only the desired result
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
//  props.target.setAttribute( 'src', 'https://unsplash.com/photos/FaFZCtl1yug');
//   props.target.setAttribute('alt', 'Image');
// }
// const Image2 = (
//   <div>
//         <img src="https://unsplash.com/photos/1cqMYELA22g" alt="Image2" onClick={Image}
//   /> 
//   </div>
// );

// ReactDOM.render(
// Image2, document.getElementById('root')
// );







// // image with switch
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.switchImage = this.switchImage.bind(this);
//     this.state = {
//       currentImage: 0,
//       images: [
//         "img3.jpg",
//         "img2.jpg",
//         "img1.jpg"
//       ]
//     };
//   }
//   switchImage() {
//     if (this.state.currentImage < this.state.images.length - 1) {
//       this.setState({
//         currentImage: this.state.currentImage + 1
//       });
//     } else {
//       this.setState({
//         currentImage: 0
//       });
//     }
//     return this.currentImage;
//   }

//   componentDidMount() {
//     setInterval(this.switchImage, 1000);
//   }

//   render() {
//     return (
//       <div className="slideshow-container">
//         <img
//           src={this.state.images[this.state.currentImage]}
//           alt="cleaning images"
//         />
//       </div>
//     );
//   }
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
















// // 4. image with toggle
// class ToggleImg extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.toggleHandler = this.toggleHandler.bind(this);
//     this.a=true;
//   }
//   toggleHandler()
//   {
//     this.a=!this.a;
//     console.log(this.a)
//     if(this.a)
//     {
//       document.getElementById("image").innerHTML="<img src='/static/media/img1.jpg'></img>"
//       console.log(this.image)
//     }else{
//       document.getElementById("image").innerHTML="<img src='/static/media/img2.jpg'></img>"
//       console.log(this.image)
//     }
//   }  
//   render()
//   {
//     return(
//     <>
//    <div id="image"> </div>
//    <div>
//    <button onClick={this.toggleHandler}>button</button>
//    </div>
//     </>
//     );
//   }
// }
// ReactDOM.render(
//   <ToggleImg />,
//   document.getElementById("root")
// );













// // form........Example

// class MyForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value:''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event){
//     this.setState({value: event.target.value});
//     //alert(this.state.value);
//   }
//   handleSubmit(event){
//     alert('Are you sure? '+ this.state.value);
//     event.preventDafult();
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name: 
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }
// ReactDOM.render(  
//   <MyForm /> ,
// document.getElementById('root')
// );






// // 1...........currency convertor --> shared state

// function CurrencyMessage(props){
//   if(props.rupees >= 1000){
//     return <p>This is too much money.</p>
//   }
//   return <p>No This is not too much money.</p>
// }

// const unitName = {
//   r:'rupees',
//   d:'dollar'
// };

// function toRupees(dollar){
//   return (dollar*75);
// }

// function toDollar(rupees){
//   return (rupees/75);
// }

// class CurrencyInput extends React.Component{
//   constructor(props){
//     super(props);
//     //this.state = {currency:''};
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event){
//     //this.setState({currency: event.target.value});
//     this.props.onCurrencyChange(event.target.value);
//   }

//   render(){
//     //const currency = this.state.currency;
//     const currency = this.props.currency;
//     const unit = this.props.unit;

//     return(
//       <fieldset>
//         <legend>Enter Your Currency in {unitName[unit]}: </legend>
//         <input value={currency} onChange={this.handleChange}></input>
//         <CurrencyMessage rupees={currency}/>
//       </fieldset>
//     );
//   }
// }












// // form........
// class MyForm extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {value:''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//     //alert(this.state.value);
//   }

//   handleSubmit(event){
//     alert('Are you sure? '+ this.state.value);
//     event.preventDafult();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name: 
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }

// ReactDOM.render(  
//   <MyForm /> ,
// document.getElementById('root')
// );





// class Calculator extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {currency:'',unit:'r'};
//     this.handleDollarChange = this.handleDollarChange.bind(this);
//     this.handleRupeeChange = this.handleRupeeChange.bind(this);
//   }

//   handleRupeeChange(currency){
//     this.setState({unit:'r',currency});
//   }

//   handleDollarChange(currency){
//     this.setState({unit:'d',currency});
//   }

//   render(){
//     const currency = this.state.currency;
//     const unit = this.state.unit;
//     const rupees = unit === 'd' ? toRupees(currency):currency;
//     const dollar = unit === 'r' ? toDollar(currency):currency;
//     return(
//       <div>
//         <CurrencyInput unit='r' currency={rupees} onCurrencyChange = {this.handleRupeeChange}/>
//         <CurrencyInput unit='d' currency={dollar} onCurrencyChange = {this.handleDollarChange}/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(  
//   <Calculator /> ,
// document.getElementById('root')
// );



















// //.................currency convertor with text field and button................3

// class CurrencyConv extends React.Component{
//   constructor(){
//     super();
//     this.handler = this.handler.bind(this);
//     // this.changeHandler=this.changeHandler.bind(this);
//     this.state={currentCurrency:"Ruppee", value:"",}
//   }
//   ToRup(){
//    if(this.state.currentCurrency=="Doller"){
//      this.setState(i=>(
//        {currentCurrency:"Ruppee", value:parseFloat(i.value*80)}))
//    }
//    if(this.state.currentCurrency=="Yen")
//    {this.setState(i=>({currentCurrency:"Ruppee", value:parseFloat(i.value*40)}))
//    }
//   }
//   ToDol(){
//    if(this.state.currentCurrency=="Ruppee"){
//      this.setState(i=>({currentCurrency:"Doller", value:parseFloat(i.value/80)}))
//    }
//    if(this.state.currentCurrency=="Yen"){
//      this.setState(i=>({currentCurrency:"Doller", value:parseFloat(i.value/30)}))
//    }
//   }
//   ToYen(){
//     if(this.state.currentCurrency=="Doller"){
//      this.setState(i=>({currentCurrency:"Yen", value:parseFloat(i.value*30)}))
//    }
//    if(this.state.currentCurrency=="Ruppee"){
//      this.setState(i=>({currentCurrency:"Yen",  value:parseFloat(i.value/40)}))
//    }
//   }
//   handler(btnId){
//     var val= document.getElementById("input").value;
//     this.setState({value : val});
//   console.log(this.state.value);
//    if(btnId=="Ruppee"){
//       this.ToInr();
//    }else if(btnId=="Doller"){
//      this.ToDol();
//    }else if(btnId=="Yen"){
//      this.ToYen();
//    }
//   }
//   render(){
//     return(
//     <div>
//    <h1>{this.state.currentCurrency}: {this.state.value}</h1>  
//    <h1>{this.state.currentCurrency} To</h1>
//     <input  id="input" type="text" defaultValue={this.state.value}/>
//    <button id="rupee" onClick={()=>this.handler("Rupee")} onChange={this.changeHandler}>Rupee</button>
//    <button id="doller" onClick={()=>this.handler("Doller")} onChange={this.changeHandler}>Doller</button>
//    <button id="yen" onClick={()=>this.handler("Yen")} onChange={this.changeHandler}>Yen</button>
//    </div>
//     );
//   }
// }
// ReactDOM.render(
//   <CurrencyConv />,
//   document.getElementById("root")
// );













// // ...........GRADE..................2
// class Grade extends React.Component{
//   constructor(){
//     super();
//     this.handler = this.handler.bind(this);
//     this.state={a:"",b:"",c:"",grade:"",}
//   }
//   handler(){
//     var grade;
//     var a= document.getElementById("a").value;
//     var b=document.getElementById("b").value;
//     var c=document.getElementById("c").value;
//     a=parseInt(a);
//     b=parseInt(b);
//     c=parseInt(c);
//     var result=((a+b+c)/3);
//    if(result>=90 && result<=100)
//    {
//      grade="A";
//    }else if(result>=80 && result<90)
//    {
//      grade = "B";
//    }else if(result>=70 && result<80)
//    {
//      grade="c"
//    }else {
//      grade="Fail"
//    }
//    this.setState(({
//       a:a,
//       b:b,
//       grade:grade,
//    }));
//    console.log(grade);
//    console.log(result);
//   }  

//   render(){
//     return(
//     <div>
//      <tr>
//    <h1>The Student Grade Result is {this.state.grade} </h1>
//    </tr>
//    <tr> <input  id="a" type="text" defaultValue={this.state.a}/></tr>
//    <tr> <input  id="b" type="text" defaultValue={this.state.b}/></tr>
//    <tr> <input  id="c" type="text" defaultValue={this.state.c}/></tr>
  
//    <button id="calculate" onClick={this.handler}>GradeCalculate</button>
//    </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Grade />,
//   document.getElementById("root")
// );








// // // //...................calculator with inputText.............................1

// class Calculator extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={ num1: ' ', num2: ' ', result: '' };
//     this.AddHandler = this.AddHandler.bind(this);
//     this.SubHandler = this.SubHandler.bind(this);
//     this.MultiHandler = this.MultiHandler.bind(this);
//     this.DivHandler = this.DivHandler.bind(this);
//     this.handleChange = this.handleChange.bind(this);
    
//   }
// AddHandler(){

//   this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
// }
// SubHandler(){
//   this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) })
// }
// MultiHandler(){
//   this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) })
// }
// DivHandler(){
//   this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) })
// }
// handleChange()
// {
//   var number1=document.getElementById("input1").value;
//   var number2=document.getElementById("input2").value;
//   this.setState({
//     num1:number1,
//     num2:number2
//   })
// }
// render() {
//   return(
//     <div>
//       <h1>Calculte of 2 numbers is : {this.state.result}</h1>
       
//       <input id="input1" type ="text"  num1={this.state.num1} onChange = {this.handleChange} />
//       <input id="input2" type ="text"  num2={this.state.num2} onChange = {this.handleChange} /><br/><br/>
    
//       <button onClick={()=>{this.AddHandler()}} >Add</button>
//       <br/><br/>

//       <button onClick={()=>{this.SubHandler()}} >Sub</button>
//       <br/><br/>
      
//       <button onClick={()=>{this.MultiHandler()}} >Multi</button>
//       <br/><br/>
      
//       <button onClick={()=>{this.DivHandler()}} >Div</button>
//       <br/><br/>
//     </div>
//   );
// }
// }
// ReactDOM.render
// (  
//   <Calculator/> ,
// document.getElementById('root')
// );













// // ..................MouseHovering with function.........3Box..............4
// function MyBorder(props){
//   return(
//     <div className={'MyBorder MyBorder-'+ props.color}>
//       {props.children}
//     </div>
//   );
// }
// function MouseOver(event) {
//   event.target.style.background = 'yellow';
// }
// function MouseOut(event){
//   event.target.style.background="";
// }

// function MyDialogBox(){
//   return(
//     <div  onMouseOver={MouseOver} onMouseOut={MouseOut}>
     
//       <MyBorder color="green">
//         <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
//         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
//       </MyBorder>
      
//       <MyBorder color="red">
      
//         <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
//         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
        
//       </MyBorder>
//       <MyBorder color="blue">
      
//         <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
//         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
        
//       </MyBorder>
//     </div>
//   );
// }
// ReactDOM.render(  
//   <MyDialogBox /> ,
// document.getElementById('root')
// );








// // .........................MouseOvering with function..............4
// function MyBorder(props){
//   return(
//     <div className={'MyBorder MyBorder-'+ props.color}>
//       {props.children}
//     </div>
//   );
// }
// function MouseEnter(event){
//   event.target.style.background= "yellow";
// }
// function MouseLeave(event){
//   event.target.style.background= "none";
// }

// function MyDialogBox(){
//   return(
//     <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
//       <MyBorder color="green" >
//         <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
//         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
//       </MyBorder>
//     </div>
//   );
// }
// ReactDOM.render(  
//   <MyDialogBox /> ,
// document.getElementById('root')
// );

















// // mousehovering.............................Done...............................4
// function MyBorder(props){
//   return(
//     <div id={props.id}  className={'MyBorder MyBorder-'+ props.color}>
//       {props.children}
//     </div>
//   );
// }
// class Border extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.hoverEnter=this.hoverEnter.bind(this);
//     this.hoverLeave=this.hoverLeave.bind(this);
//   }
//   hoverEnter(id)
//   {
//       document.getElementById(id).style.background=id;
//   }
//   hoverLeave(id)
//   {
//       document.getElementById(id).style.background="none";
//   }  
//   render()
//   {
//     return(
//     <>
//         <div onMouseEnter={()=>this.hoverEnter("yellow")} onMouseLeave={()=>this.hoverLeave("yellow")}>
//       <MyBorder color="green" id="yellow" >
//        <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
//          <p className='MyDialog-message'>This is content from First Dialog Box.</p>
//        </MyBorder>
//        </div>
//         <div  onMouseEnter={()=>this.hoverEnter("orange")} onMouseLeave={()=>this.hoverLeave("orange")}>
//        <MyBorder color="red" id="orange">
//          <h1 className='MyDialog-title'>Welcome to Second Dialog Box.</h1>
//         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
//        </MyBorder>
//        </div>
//         <div  onMouseEnter={()=>this.hoverEnter("pink")} onMouseLeave={()=>this.hoverLeave("pink")} >
//        <MyBorder color="blue" id="pink">
//          <h1 className='MyDialog-title'>Welcome to Third Dialog Box.</h1>
//          <p className='MyDialog-message'>This is content from First Dialog Box.</p>
//        </MyBorder>
//      </div>
//      </>
//     );
//   }
// }
// ReactDOM.render(  
//   <Border /> ,
// document.getElementById('root')
// );












// //working with forms and DropDown Options.................class exmp.......

// class CountryForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value:'India'};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     alert('Are you sure you want to submit your country? '+this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Please select your country: 
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value='USA'>USA</option>
//             <option value='INDIA'>INDIA</option>
//             <option value='UK'>UK</option>
//             <option value='BALI'>BALI</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }

// }

// ReactDOM.render(  
//   <CountryForm /> ,
// document.getElementById('root')
// );












// //Login Forms with firstName and LastName.................class example

// class LoginForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {stname:' ',lname:' ',email:' ',password:' '};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     const target = event.target;
//     const value = target.name === "login" ? target.checked: target.value;
//     const name = target.name;

//     console.log(name +" "+ value);
//     this.setState({[name]:value});
//   }
//   handleSubmit(event){
//     alert('your form is successfully submit '+this.state.stname+" "+ this.state.lname+" "+this.state.email);
//     event.preventDefault();
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           First Name: 
//           <input name="stname" type="text" value={this.state.stname} onChange={this.handleChange}/>
//         </label> <br></br>
//         <label>
//           Last Name: 
//           <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange}/>
//         </label> <br></br>
//         <label>
//           Email Id
//           <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/> 
//         </label> <br></br>
//         <label>
//           Password
//           <input name="password" type="text" checked={this.state.password} onChange={this.handleChange}/> 
//         </label> <br></br>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(  
//   <LoginForm /> ,
// document.getElementById('root')
// );





























