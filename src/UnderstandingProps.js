import React from "react";
import PropTypes from "prop-types"

// Props in functional Components. We use props.AttributeKey
const Patient_func = (props) => {
  return <p>Functional Component Props<br />Name: {props.name}<br />Doctor:
    {props.doctor}<br />Age: {props.age}< /p>
}

// Props in Class Components. We use this.props.AttributeKey
class Patient extends React.Component{
  render(){
    return (
      <p>Class Component Props<br />Name: {this.props.name}<br />Doctor:
        {this.props.doctor}<br />Age: {this.props.age}< /p>
    );
  }
}

// using props type t make sure we get desired type of data else we get a warning
Patient.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  doctor: PropTypes.string.isRequired
};

// using default values to the required props
Patient.defaultProps = {
    age: 50,
    name: "Sashi",
    doctor: "Ganguly"
};


export default Patient;
