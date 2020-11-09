import React, { Component } from 'react';
// import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      jane :{
        firstName: "Jane",
        lastName: "Doe",
        age: 45,
        hairColor: "Black"
      },
      john :{
        firstName: "John",
        lastName: "Smith",
        age: 88,
        hairColor: "Brown"
      },
      millard :{
        firstName: "Millard",
        lastName: "Fillmore",
        age: 50,
        hairColor: "Brown"
      },
      maria :{
        firstName: "Maria",
        lastName: "Smith",
        age: 62,
        hairColor: "Brown"
      }

    

    }
  }
  render(){
    return(
      <div className="App">
        <PersonCard person ={this.state.jane}/>
        <PersonCard person ={this.state.john}/>
        <PersonCard person ={this.state.millard}/>
        <PersonCard person ={this.state.maria}/>


      </div>
    );
  }
}
  
  export default App;
  
  // <PersonCard firstName = {"Jane"} 
  // lastName = {"Doe"} 
  // age = {45} 
  // hairColor = {"Black"}/>

  // <PersonCard firstName = {"John"} 
  // lastName = {"Smith"} 
  // age = {88} 
  // hairColor = {"Brown"}/>

  // <PersonCard firstName = {"Millard"} 
  // lastName = {"Fillmore"} 
  // age = {50} 
  // hairColor = {"Brown"}/>

  // <PersonCard firstName = {"Maria"} 
  // lastName = {"Smith"} 
  // age = {62} 
  // hairColor = {"Brown"}/>