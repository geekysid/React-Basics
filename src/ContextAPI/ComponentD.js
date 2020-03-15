/*
    Alternate way to work without Consumer Context is by using useConetxt as it need way to many codes
*/

import React, {useContext} from 'react';
import {MyContext} from "./Context";


function ComponentD() {
    const context = useContext(MyContext)
    console.log(context)
    return (
        <>
            <h4>This is from ComponentD</h4>
            Name: {context.name}<br />
            Age: {context.age}<br />
            <button onClick={context.btnClick}>Increase Age by 1</button>
        </>
    );
}

export default ComponentD
