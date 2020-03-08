import React, {Component} from "react";
import ReactDOM from "react-dom";

// creating React Component using React Element
class App_React_Element extends Component{
  render(){
    return (
      React.createElement("h3", "", "React Component using React Element")
    );
  };
}

// creating React Component using jsx
class App_JSX extends Component{
  render(){
    return <h3>React Component using JSX</h3>;
  };
}

// export default App_JSX;
export default App_React_Element;
