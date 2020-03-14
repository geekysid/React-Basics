/* 
    In Hooks, Context provides a way to pass props through a component tree without having to pass the props down manually at every level. Here we use Reacr.createContext() to create a context in parent component and then use React.useContext() in the chilpd component to use the context generated in parent component.
*/
import React from 'react'

// cretaing 2 Context state variables and exporting them
export const playerContext = React.createContext("Siddhant")
export const scoreContext = React.createContext(98)

function UnderstandingHooksContext() {

    return (
        <div>
            
        </div>
    )
}

export default UnderstandingHooksContext
