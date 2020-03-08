import React, {Component} from "react";

class Student_Class extends Component{
  render(){
    return <p>From Class Component: Hello <b>{this.props.name}</b></p>
  };
}

export default Student_Class
