import React from 'react'

function Guest(props) {
    return (
        <div>
            <h3> Welcome Guest</h3>
            <button onClick={props.clickFunction}>Login</button> &emsp;
            <button>Signup</button>
        </div>
    )
}

export default Guest
