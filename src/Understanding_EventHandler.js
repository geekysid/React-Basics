import React from "react"

// event handling in class component
class EventHandler_Class extends React.Component{

  constructor(){
    super()
    this.btnClick_Event = this.btnClick_Event.bind(this)
  }

  // to bind 'this' to regualr function, we need to bind it in constructor
  btnClick_Event(){
    let name = document.getElementById("nameText").value
    console.log("Button Clicked - "+{name}, this)
  }

  // arrow function
  btnClick_Event2 = () => {
    let name = document.getElementById("nameText").value
    console.log("Button Clicked - "+{name}, this)
  }

  render(){
    return (
      <div>
        <input type="textbox" id="nameText" minSize={20} value="Hello Dear" />
        <br />
        <button onClick={this.btnClick_Event}>Click Me</button>
      </div>
    );
  }
}

// event handeling in functional component
const EventHandler_Func = () => {

  function btnClick_Event(){
      console.log("Button Clicked from EventHandler_Func")
  }

  // arrow Function
  let btnClick_Event2 = () => {
      console.log("Button Clicked from EventHandler_Func (Arrow)")
  }

  return (
    <div>
      <button onClick={btnClick_Event2}>Click Me</button>
    </div>
  )
}

// passing argument to event handler
class EventHandler_WithArgs extends React.Component{
  state = {
    id:1,
    name: "Siddhant"
  }

  //event handler with simple argument
  btnClick_Event = (id, name) => {
    return console.log("Button Clicked - "+id + " - " + name)
  }
  btnClick_Event_args = () => {
    this.btnClick_Event(this.state.id, this.state.name)
  }

  //event handler with object (e) as argument
  btnClick_Object = (e, id, name) => {
    return (
      console.log("Button Clicked - "+id + " - " + name),
        console.log(e)
    )
  }
  btnClick_Object_args = (e) => {
    this.btnClick_Object(e, this.state.id, this.state.name)
  }

  render(){
    return (
      <div>
        <h3>Understanding Event Handler</h3>
        <button onClick={this.btnClick_Event_args}>Click Me</button>&emsp;
        <button onClick={this.btnClick_Object_args}>Click Me</button>
      </div>
    );
  }
}
export default EventHandler_WithArgs
