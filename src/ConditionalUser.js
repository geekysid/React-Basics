import React, {useContext} from 'react';
import {nameContext} from "./Conditionals";

function User(props) {
    const name = useContext(nameContext);
    
    return (
        <div>
            <h3>Welcome {name}</h3>
            <button onClick={props.clickFunction}>Logout</button>
        </div>
    )
}

export default User
