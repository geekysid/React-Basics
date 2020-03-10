//This phase is the last phase of the lifecycle and has only 1 method.

// componentWillUnmount(): This method is called just befroe component is unmounted and destroyed, i.e. just before component is removed from the DOM. This method is used to perform necessary cleanup, such as cenceling network request, etc.

import React, { Component } from 'react'

class UnderstandingUnmounting extends Component {

    //  Mount Phase - 1st Method called to initialse state or binding event handlers to component
    constructor(props){
        console.log("----------------------------")
        super();
        this.state = {
            name: "Siddhant"
        };
        console.log("Mount Phase - constructor()")
    }

    // Mount/Update Phase -  Called whenever there is change in state or props of component. 
    static getDerivedStateFromProps(){
        console.log("Mount/Update Phase - getDerivedStateFromProps()");
    }

    // Mount Phase -  Method called right after Render when component is loaded to the DOM
    componentDidMount(){
        console.log("Mount Phase - componentDidMount()");
    }

    // Update Phase - This method is called if there is any change to the state or props of component and returns true or false which evalutes if components needs to be re-rendered(true) or not(false).
    shouldComponentUpdate(nextProps, nextState){
        console.log("Update Phase - shouldComponentUpdate()");
        return true;
    }

    // Update Phase - this method is called just before render method to get a specific importaion of the DOM
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Update Phase - getSnapshotBeforeUpdate()");
        return null
    }

    // Update Phase - This method is called 
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Update Phase - didComponentUpdate()");
    }

    // UNMOUNT PHASE
    componentWillUnmount(){
        console.log("UNMOUNT PHASE - componentWillUnmount()")
    }

    btnClick = () => {
        this.setState({
            name: "Manish"
        })
    }

    // Mount/Update Phase - called if any change is required to be added to the DOM
    render() {
        console.log("Mount/UpdatePhase - render()");
        return (
            <>
                <button onClick={this.btnClick}>Click Me</button>
                <p> </p>
            </>
        );
    }
}

export default UnderstandingUnmounting