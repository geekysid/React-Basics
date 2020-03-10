//  Updating is a proces of changing state or props of component and updating it to the nodes alreadting
// available in DOM. It is caused by change of state or props .
// Sequence of method called:

//  static getDerivedStateFromPops(props, state): Already discussed in Mounting

//  shouldComponentUpdate(nextProps, nextState): This method is used to let react know if there is any change in the component due to change of props or state, i.e., should component re-render or skip rendering. It is executed just before render method after receiving new props or states. Returns true by default.

//  render(): Discussed allot of times.

//  getSnapshotBeforeUpdate(): This method is called during UPDATING PHASES after render method() and right before virtual DOM updates the DOM with new values. It allows our component to capture some values or specific information from the DOM before DOM is updated. Any value (true or false mostly) returned from this method is passed as 3rd parameter to the ComponentDidUpdate() method. If there is no change to the DOM then this method is not called.

//  componentDidMount(): This method is called right after updating occurs and is not called on initial render. We use this method to trigger 3rd parties libraries used to make sure ther are updated and reloaded. This method is not called if shouldComponentUpdate() returns false. 


import React, { Component } from 'react'

class Understanding_Update extends Component {
    // Method executed only in the Mounting phase of the component. It is used to initialize state of the component and also to bind the event handler to the components
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            marks: this.props.marks
        };
        console.log("MOUNT - Contructor()");
        console.log("Props: ", props);
        console.log("State: ", this.state);
    }

    // This is a static method and is always called before render() and returns state of object. It is also called in every subsequent updateing phase whenever this is a change in props or state of the component.
    static getDerivedStateFromProps(props, state){
        console.log("MOUNT/UPDATE - getDerivedStateFromProps()");
        console.log("Props: ", props);
        console.log("State: ", state);
    }

    // This method is called just before render() whenever there is any change to the state or props to evaluate if render method will should be executed ot not
    shouldComponentUpdate(nextProps, nextState){
        console.log("UPDATE - shouldComponentUpdate()");
        console.log("Next Props: ", nextProps);
        console.log("Next State: ", nextState);
        console.log("Prev State: ", this.state);
        // will return true and execute render(), getSnapshotBeforeUpdate() and componentDidUpdate() methof during updating phase
        if(this.state.marks !== nextState.marks){
            console.log("State (marks) updated - TRUE")
            return true;
        }
        else if (this.state.name !== nextState.name){
            console.log("State (name) updated - False");
            return false
            // false will stop execution of render(), getSnapshotBeforeUpdate() and componentDidUpdate() methof during updating phase
        }
        // will return false and render will stop execution of render(), getSnapshotBeforeUpdate() and componentDidUpdate() methof during updating phase
        else{
            return false;
        }
    }

    // Called during Updating Phase after render method()
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("UPDATE - getSnapshotBeforeUpdate()")
        console.log("Prev State: ", prevState);
        console.log("Prev Props: ", prevProps);
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("UPDATE - componentDidUpdate()")
        console.log("Prev State: ", prevState);
        console.log("Prev Props: ", prevProps);
        console.log("Snapshot: ", snapShot);
    }

    // Mount Phase Method. Called right after render method when component is loaded to the DOM.
    componentDidMount(){
        console.log("MOUNT - componentDidMount()")
    }
    
    // function called that changes state (marks) whenever button is clicked
    clickHandler = () => {
        console.log("Button Clicked");
        this.setState({
            marks: this.state.marks+1
        })
    }

    // function called that changes state (name) whenever button is clicked
    clickHandler2 = () => {
        console.log("Button Clicked");
        this.setState({
            name: "Siddhant"
        })
    }

    // function called does nothing whenever button is clicked
    clickHandler3 = () => {
        console.log("Button Clicked which does nothing")
    }

    // render method()
    render() {
        console.log("UPDATE - render()");
        return (
            <div>
                <h3>UPDATE LifeCycle</h3>
                <p>
                    Name: {this.state.name}<br />
                    Marks: {this.state.marks}<br /><br />
                    <button onClick={this.clickHandler}>Add 1 mark and shouldComponentUpdate returns True</button>&emsp;
                    <button onClick={this.clickHandler2}>Changes Name but shouldComponentUpdate returns False</button>&emsp;
                    <button onClick={this.clickHandler3}>No Change</button>
                </p>
                <br />
            </div>
        );
    }
}

export default Understanding_Update