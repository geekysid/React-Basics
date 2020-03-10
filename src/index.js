import React from "react";
import ReactDOM from "react-dom";
// import App_JSX from "./App";
import App_React_Element from "./App";
import Student_Functional from './FunctionalComponent';
import Student_Class from "./ClassComponent";
import Student_Composite from "./CompositeComponent";
import el10 from "./Understanding_JSX";
import Patient from "./UnderstandingProps";
import Understanding_State from "./UnderstandingState";
// import EventHandler_Class from "./Understanding_EventHandler";
import EventHandler_WithArgs from "./Understanding_EventHandler";
import SetState_Class from "./SettingState";
import AppMount from "./Understanding_Mounting";

// rendering output with JSX
let element = <h3>Rendering output with JSX using ELEMENT</h3>;

// rendering output using react ELEMENT
let element2 = React.createElement("h3", null, "Rendering output using React Element");

ReactDOM.render(element, document.getElementById("JSX_Element"));
ReactDOM.render(element2, document.getElementById("React_Element"));

// ReactDOM.render(<App_JSX />, document.getElementById("JSX_Component"));
ReactDOM.render(<App_React_Element />, document.getElementById("React_Element_Component"));

// Fetching Functional Component
ReactDOM.render(<Student_Functional name="Siddhant" />, document.getElementById("student_functionalComp"));

// Fetching Class Component
ReactDOM.render(<Student_Class name="Siddhant" />, document.getElementById("student_classComp"));

// Fetching Composite Component
ReactDOM.render(<Student_Composite />, document.getElementById("student_compositeComp"));

// Rendering JSX Element
ReactDOM.render(el10, document.getElementById("UnderstandingJSX_Element"));

// Rendering Component with props
ReactDOM.render(<Patient doctor="A K Gupta" age={45} />, document.getElementById("patient"));

// Renderding Class Component state
ReactDOM.render(<Understanding_State age={34} />, document.getElementById("Understanding_State"));

ReactDOM.render(<EventHandler_WithArgs />, document.getElementById("Understanding_EventHandlers"))

ReactDOM.render(<SetState_Class name="Manish" age={32} />, document.getElementById("setState_div"))

ReactDOM.render(<AppMount name="Manish" age={32} />, document.getElementById("mount_div"))
