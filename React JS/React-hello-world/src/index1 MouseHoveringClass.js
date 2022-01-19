import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// MouseHovering with class........................4
function MyBorder(props){
  return(
    <div id={props.id}  className={'MyBorder MyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}
class Border extends React.Component
{
  constructor()
  {
    super();
    this.hoverEnter=this.hoverEnter.bind(this);
    this.hoverLeave=this.hoverLeave.bind(this);
  }
  hoverEnter(id)
  {
      document.getElementById(id).style.background=id;
  }
  hoverLeave(id)
  {
      document.getElementById(id).style.background="none";
  }  
  render()
  {
    return(
    <>
        <div onMouseEnter={()=>this.hoverEnter("yellow")} onMouseLeave={()=>this.hoverLeave("yellow")}>
      <MyBorder color="green" id="yellow" >
       <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
       </MyBorder>
       </div>
        <div  onMouseEnter={()=>this.hoverEnter("orange")} onMouseLeave={()=>this.hoverLeave("orange")}>
       <MyBorder color="red" id="orange">
         <h1 className='MyDialog-title'>Welcome to Second Dialog Box.</h1>
        <p className='MyDialog-message'>This is content from First Dialog Box.</p>
       </MyBorder>
       </div>
        <div  onMouseEnter={()=>this.hoverEnter("pink")} onMouseLeave={()=>this.hoverLeave("pink")} >
       <MyBorder color="blue" id="pink">
         <h1 className='MyDialog-title'>Welcome to Third Dialog Box.</h1>
         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
       </MyBorder>
     </div>
     </>
    );
  }
}
ReactDOM.render(  
  <Border /> ,
document.getElementById('root')
);