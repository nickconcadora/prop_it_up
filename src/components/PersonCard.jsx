import React, { Component } from 'react';

export default class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.person.age
        }

    }
    render(){
        return(
            <div className = "card">
                <h1>{this.props.person.lastName}, {this.props.person.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
        <button className ="bday" onClick={() => this.setState({age: this.state.age +1})}>Birthday Button for {this.props.person.firstName}</button>

                
            </div>
        );
    }
}



    // class PersonCard extends Component{
    //     constructor(props) {
    //         super(props);
    //         this.state = {age: this.age.age}
    //         };
    //     }
    //     birthDay = () => {
    //     if( this.state.age === this.state.age ) {
    //         this.setState({ age: age +1 });
    //     } else {
    //         this.setState({ age: "On" });
    //     }
    // }
    //     render(){
    //         return(
    //             <div className = "cards">
    //                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
    //                 <p>Age: {this.props.age}</p>
    //                 <p>Hair Color: {this.props.hairColor}</p>
    //                 <button onClick={ this.birthDay }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
    
    //             </div>
    
    
    
    //         );
    //     }
    // }