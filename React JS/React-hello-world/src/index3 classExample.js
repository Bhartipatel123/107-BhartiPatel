import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//class based components in React
//state in class based components
//function based components do not have their state while class based components have their state

class Printname extends React.Component{
  constructor(props){
    super(props);    
    this.surname = "Patel"; //the properties which are owned by component are know as state of the component
  }

  render(){
    return <h1>Hello {this.props.name} {this.surname}</h1>;
  }
}
ReactDOM.render
  (  
      <Printname name="Bharti"/> ,
    document.getElementById('root')
  );