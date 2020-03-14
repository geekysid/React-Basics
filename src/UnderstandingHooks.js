/* 
Hooks are used to have class like state in functional components. We can't use Hooks inside a class.
We use hooks for follwoing reason -
    a) It avoids all confussion with 'this' keyword
    b) We need to bind event handlers in the class components
    b) It allows us to reuse stateful login between different component
    c) Hooks organisez login inside a component into reuseable isolated units

Hooks are only called at the Top-Level and not inside loops, conditionals or nested functions

useState(): This is a Hook methofd that allows us to add react state in the functional components. This method is called inside function to add local state to the functional component. This method returns 2 obhect, current state and the function that let's us to update the state. This state is preserved between re-render. We can use useState() as manytime as we want to create as many state as we need.
    import React, {useState} from "react";
    const nameStateVariable = useState("Siddhant");
    const stateVariable = nameStateVariable[0];
    const stateFunction= nameStateVariable[1];
    OR
    import React, {useState} from "react";
    const [stateVariable, stateFunction] = useState("Siddhant");

Accessing State: Unlike class component, in functioanl component we can directly call or use state variable using its name without using 'this.state'. 
    import React, {useState} from "react";
    function App(){
         cont [name, setName] = useState("Siddhant")
           return(
           <h1>My name is {name}<h1>
         )
    }
Updating State: setStateVariable("NewValue")
    setName("Siddhant Shah")

useEffectHooks(function, array): We use this function to performs side-effects actions like Data fetching, API Call, setting up a subscription, manuallu changing DOM in react component etc. This fucntion is basically combination of componentDidMount(), componentDidUpdate() and componentWillUnmount() in lifecycle method. We can use this method as many time as we want. useEffect run after every render, 1st render and all subsequent update
The 1st argument passed in the useEffect is the function which is called once component is rendered.
The 2nd argument is optional and is the array of values on which the effect depends on.
    import React, {useEffect} from "react"
    function App(){
        return (
            <h1></h1>
        )
    }

*/

import React, {useState, useEffect} from "react";

function HookExample(){
    console.log("------------------------------")
    console.log("HookExample Called")
    
    // creating couple of states
    const [name, setName] = useState("Siddhant");
    const [marks, setMarks] = useState(65);
    // object state
    const [fullName, setFullName] = useState({fname: "Siddhant", lname: "Shah"})
    // array state
    const [numbers, setNumbers] = useState([])

    // event handler to change value of name state
    const btnClick_changeName = () => {
        console.log("btnClick_changeName Called")
        setName("Manish")
    }

    // event handler to change value of marks state
    const btnClick_changeMarks = () => {
        console.log("btnClick_changeMarks Called")
        setMarks(marks+1)
    }

    // understaing how to use prevState of a hook
    const incrementFive = () => {
        console.log("incrementFive Called")
        for(let i=0; i<2; i++){
            console.log(marks, i)
            
            // // for every iteration, this statement uses on value of state marks (65) and so  we get 66 after 5 iteration instead of 70.
            // setMarks(marks+1)

            // To overcome this we use an arrow function which takes previous value of the state and returns previous state value+1 for every iteration.
            setMarks((preMarks) => {
                console.log(preMarks);
                return preMarks+1});
        }
    }

    // We use spread operator in order to change state of an object. This is because functional state dosen't automatically merge and update the objects. So when we change fname, lname property is removed from the object and when we update lname property, fname is removed from object. This is where spread operator becomes handy.
    const fnameChange = (e) =>{
        setFullName({...fullName, fname: e.target.value});  // need to use spread operator for object.
        setName(e.target.value)     // no need ot use spread operator nor non-object state.
    }

    // We use spread operator in order to change state of an object. This is because functional state dosen't automatically merge and update the objects. So when we change fname, lname property is removed from the object and when we update lname property, fname is removed from object. This is where spread operator becomes handy.
    const lnameChange = e => {
        setFullName({...fullName, lname:e.target.value})    // need to use spread operator for object.
    }

    // Using spread operator to change value of an array state
    const addNumber = () => {
        setNumbers([
            ...numbers,
            {
                id: numbers.length,
                value: Math.floor(Math.random()*10) + 1
            }
        ])
        console.log(numbers[numbers.length-1])
    }

    // useEffect() used to change title and calling useEffect only when there is change in state of name or marks
    useEffect( () => {
        console.log("This useEffect Called after initial render and whenere there is chnage is state of 'name' and 'marks'")
        document.title = `${name} got ${marks}`
    }, [marks, name])

    // When we pass an empty array as 2nd parameter then the useEffect functions doesn't depend on any state and is executed only once after initial render
    useEffect(() => {
        console.log("This Effect Method is called only once")
    }, [])

    return (
        <>
            <h3>useState()</h3>
            <p>
                Name: {name}<br />
                Marks: {marks}<br />
                Numbers: 
                <ul>
                    {numbers.map(number => (
                        <li key={number.id}>{number.value}</li>
                    ))}
                </ul>
                <br />
                Full Name: {fullName.fname} {fullName.lname}
                <form>
                    Change Name:&emsp;
                    <input type="text" onChange={fnameChange} value={fullName.fname} />&emsp;
                    <input text="text" onChange={lnameChange} value={fullName.lname} />
                </form> 
                <br />
                <button onClick={btnClick_changeName}>Change Name</button>&emsp;
                <button onClick={btnClick_changeMarks}>{marks} + 1</button><br />
                <button onClick={incrementFive}>Increament By 5</button>&emsp;
                <button onClick={addNumber}>Add {numbers.length+1}th Number</button>
            </p>
        </>
    );
}

export default HookExample