import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




// 4. image with toggle
class ToggleImg extends React.Component
{
  constructor()
  {
    super();
    this.toggleHandler = this.toggleHandler.bind(this);
    this.a=true;
  }
  toggleHandler()
  {
    this.a=!this.a;
    console.log(this.a)
    if(this.a)
    {
      document.getElementById("image").innerHTML="<img src='https://images.unsplash.com/photo-1641077292901-54acf5d0cb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'></img>"
      console.log(this.image)
    }else{
      document.getElementById("image").innerHTML="<img src='/static/media/img2.jpg'></img>"
      console.log(this.image)
    }
  }  
  render()
  {
    return(
    <>
   <div id="image"> </div>
   <div>
   <button onClick={this.toggleHandler}>button</button>
   </div>
    </>
    );
  }
}
ReactDOM.render(
  <ToggleImg />,
  document.getElementById("root")
);
