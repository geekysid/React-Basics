import React from 'react';

class ChildClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "ABC",
            age: props.age,
            number_of_click: props.number_of_click
        };
        console.log("Child Class - Constructor")
        console.log("State: ", this.state)
        console.log("Props: ", props)
    };

    static getDerivedStateFromProps(props, state){
        console.log("Child Class - getDerivedStateFromProps")
        return {
            age: state.age+1,
            number_of_click: state.number_of_click+10
        } 
    }

    render (){
        console.log("Child Class - Render")
        console.log("State: ", this.state)
        return (
            <p>
                Child Class - Render<br />
                Child Name: {this.state.name}<br />
                Child Age: {this.state.age}<br />
                Child Clicks: {this.state.number_of_click}<br />
            </p>
        )
    };
}

export default ChildClass;