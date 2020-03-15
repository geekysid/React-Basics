/*
    We have seen how to use useContext and createContext to transfer value from 1 compoenent to other without using props. There is another more optimum method to do so.

    1) Create a context object using React.createContext() inside parent component and export it like:  
        export MyContext = React.createContext()
    2) Now we will create a provider for this context object inside parent component (ComponentA in our case) and pass the values that we need to share with nth child compoenent. We need to make sure that the child component that imports nth chind must be inside the provider creating tag like:
        <MyContext.Provider value={name}>
            <child />
        </MyContext.Provider>
    3) Now in the component (ComponentC in our case) where we need this value, we wil import the context object and use Consumer Attribute to acess the data from the component in which the conetxt object was created. Inside consumer attribute we need to create a arrow function with parameters being the calues passed and then we can use JSX to use the values like:
        <MyContext.Consumer>
            data => (
                <h1>{data}</h1>
            )
        </MyContext.Consumer >

    We can also create the context objects, its Provider and Consumer in a separate file and then import it in the component as I have done. 

    Alternate way to work without Consumer Context by using contextType but that is only possible by in class with state


    Another lternate way to work without Consumer Context by using useContext and is only possible by in functional Compoent. this is displayed in ComponentD
*/

import React, { useState } from "react";
import {MyContextProvider} from "./Context";
import ComponentB from "./ComponentB";

function ComponentA(props) {
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age)

    const btnClickHandler = () => {
        setAge(age+1)
    }
    
    return (
        <div>
            <h4>This is from ComponentA</h4>
            Name: {name}<br />Age: {age}
            <MyContextProvider value={ { name:name, age:age, btnClick: btnClickHandler } }>
                <ComponentB />
            </MyContextProvider>
        </div>
    )
}

export default ComponentA
