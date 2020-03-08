import React from "react";

// state in Class Components
class Understanding_State extends React.Component{
  // // Simply adding state value to the component
  // state = {
  //   name: "Siddhant",
  //   age: 33
  // }

  // // adding state using props
  // state = {
  //   name: "Siddhantt",
  //   age: this.props.age
  // }

  // // Using constructor to initialize state of component
  // constructor(){
  //   // defining constructor of super class
  //   super()
  //   // initiallizing state
  //   this.state = {
  //     name: "Siddhant",
  //     age: 34
  //   };
  // }

  // using props to initiallize state in constrcutor
  constructor(props){
    // calling super class constructor
    super(props);
    // initiallizing state
    this.state = {
      name: "Manish",
      age: this.props.age
    };
  };

  //
  render(){
    return (
      //using React.Fragment to have multiple tags
      <React.Fragment>
        <h2>Understanding Class State</h2>
        <p>
          States belong only to class components and not to function component.
          States can be considered simillar to props but states can be modified
          where as props can not be modified.
        </p>
        <p>
          Name: {this.state.name}<br />
          Age: {this.state.age}
        </p>
      </React.Fragment>
    );
  }
}

export default Understanding_State;
