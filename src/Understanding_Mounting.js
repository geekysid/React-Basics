import React from "react";
import ChildClass from "./Mounting_ChildClass";

class AppMount extends React.Component{
    
    // CONSTRUCTOR - This is the 1st method that is called only once during Mounting 
    // phase of the component life cycle. This is a rarely used. This is used when we 
    // want to initialize state of teh component or want to binds even handler methods
    constructor(props){
        // this is always 1st statement in a contructor
        super(props);
        
        // initializing state of the component. Optional
        this.state = {  
            name: "Siddhant",
            age: this.props.age,
            number_of_click: 0
        }
        
        // priting message in console
        console.log("AppMount - Contsuctor Called");
        console.log("State: ", this.state);
        console.log("Props: ", props);
    }
    
    // getDerivedStatemFromProps - This is the 2nd method method that is called whenever
    // this is change in state of the object during Mounting phase and subsequest 
    // Updating phase of the component life cycle if specified. This is a very rarely 
    // used. This is a static method and so has no access to the instance of the class. 
    // We need to add static keyword befor this class. This method must return null or a 
    // valid object to updat ethe state of the object
    static getDerivedStateFromProps(props, state){
        console.log("AppMount - getDerivedStateFromProps Method Called");
        console.log("State: ", state);
        console.log("Props: ", props);
        // changing state and returning the changed state
        return {name: "Ram", age: state.age+1};
    }

    // componentGetMount: This method is called after render method. All external calls
    // are made in this method. Whenever this function is called, Render method is also
    // called afterwards.
    componentDidMount(){
        console.log("AppMount - componentDidMount Method Called");
        
        // As state is changed, so two method will be called, getDerivedStateFromProps()
        // and render()
        this.setState({
            name: "Sourav"
        });
    }

    // Event handler which changes state of the object and hence calls 
    // getDerivedStateFromProps() and render() again
    btnClick = () => {
        console.log("Button Clicked");
        this.setState({
            number_of_click: this.state.number_of_click+1
        });
    }

    // render method which is a required method in class component and is executed 
    // whenever there is change in the state of the object. Executed atleast once.
    render(){
        console.log("AppMount - Render Method Called")
        console.log("State: ", this.state)
        console.log("Props: ", this.props)
        return (
            <>
                <h2>Understanding Lifecycle - MOUNTING</h2>
                <p>
                    Name: {this.state.name}
                    <br />
                    Age: {this.state.age}
                    <br />
                    Clicks: {this.state.number_of_click}
                    <br />
                    <ChildClass name="DEF" age={28} number_of_click={this.state.number_of_click} />
                    <button onClick={this.btnClick}>
                        Add Number of Click
                    </button>
                </p>
            </>
        );
    }
}

export default AppMount