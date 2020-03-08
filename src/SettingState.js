import React from "react"
import PropTypes from "prop-types"

class SetState_Class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      age: this.props.age
    }
  }

  // event handler changing value of state on button click
  btnClick_Event = () => {
    //we can even use functions inside setState
    this.setState(function(state, props){
      console.log("Props Value => Name: " + props.name + ", Age: " + props.age);
      console.log("Old State Value => Name: " + state.name + ", Age: " + state.age);
      state.name = "Siddhant";
      state.age = props.age+1;
      console.log("New State Value => Name: " + state.name + ", Age: " + state.age);
    });

    // changin state of the component
    this.setState({
      name: "Siddhant",
      age: "33"
    })
  }


  render(){
    return (
      <>
        <h3>Understanding setState for class component</h3>
        <p>
          Name: {this.state.name}
          <br />
          Age: {this.state.age}
        </p>
        <button onClick={this.btnClick_Event}>Click Me</button>
        <br />
      </>
    )
  }
}

// props tyles and if they are required
SetState_Class.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default SetState_Class
