/*
    Conditional statement in Reacts works same way as in javascript. The only difference being we can't use conditional in JSX.

    Having said that, we can still use one conditional operatoe as below:
        condition && component
    Here
        condition: something that evaluates to trur or false
        &&: operator
        component: somthing taht will display only if condition is true.
*/

import React, {useState} from 'react';
import User from "./ConditionalUser";
import Guest from "./ConditionalGuest";

export const nameContext= React.createContext("Siddhant");

export function Conditionals(props) {
    console.log("FROM FUNCTIONS")
    // setting state of functional component using Hooks
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

    // function that toggles isLoggedIn value between true and false when button is clicked
    const clickHandler = () => {
        if(isLoggedIn){
            setIsLoggedIn(false);
            console.log("Logout Button Clicked")
        } else{
            console.log("Login Button Clicked")
            setIsLoggedIn(true);
        }
    }
    
    /* One way ot using conditionals
    if(isLoggedIn){
        return <User clickFunction={clickHandler} />
    } else{
        return <Guest clickFunction={clickHandler} />
    }
    */

    /* Ternary Operator Option 
    return (
        isLoggedIn ? <User clickFunction={clickHandler} /> : <Guest clickFunction={clickHandler} />
    )
    */
    
    /* Another Option */
    return (
        <div>
            {isLoggedIn && <User clickFunction={clickHandler} />}
            {!isLoggedIn && <Guest clickFunction={clickHandler} />}
        </div>
    );
}

export default class ConditonalsClass extends React.Component{
    // setting state of class component
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            isLoggedIn: props.isLoggedIn,
            name:"Siddhant"
        }
        console.log("State: ", this.state.isLoggedIn)
    }

    // function that toggles isLoggedIn value between true and false when button is clicked
    clickHandler = () => {
        console.log(this.state.isLoggedIn)
        if(this.state.isLoggedIn){
            this.setState({isLoggedIn: false});
            console.log("Login Button Clicked")
        } else{
            this.setState({isLoggedIn: true});
            console.log("Logout Button Clicked")
        }
    }

    render () {
        var status = this.state.isLoggedIn
        console.log("Logged In: ", status)
        if(status){
            return (
                <>
                    Logged In: {status}
                    <User clickFunction={this.clickHandler} />
                </>
            )
        } else {
            return (
                <>
                    Logged In: {this.state.isLoggedIn}
                    <Guest clickFunction={this.clickHandler} />
                </>
            )
        }

        // // using ternary operator
        // return this.state.isLoggedIn ? <User clickFunction={this.clickHandler} /> : <Guest clickFunction={this.clickHandler} />

        // using && operator
        // return (
        //     <React.Fragment>
        //         {this.state.isLoggedIn && <User clickFunction={this.clickHandler} />}
        //         {!this.state.isLoggedIn && <Guest clickFunction={this.clickHandler} />}
        //     </React.Fragment>
        // )
    }
}


