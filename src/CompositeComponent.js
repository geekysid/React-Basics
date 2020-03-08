import React, {Component} from "react";
import Student_Class from "./ClassComponent";

class Student_Composite extends Component{
  render(){
    return(
      <>
      <hr />
      <p> From Composite Component
        <li><Student_Class name="Siddhant" /></li>
        <li><Student_Class name="Sanath" /></li>
        <li><Student_Class name="Sachin" /></li>
        <li><Student_Class name="Sourav" /></li>
      </p>
      <hr />
      </>
    );
  };
}

export default Student_Composite
