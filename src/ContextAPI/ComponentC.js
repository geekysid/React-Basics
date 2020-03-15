import React from "react";
import {MyContextConsumer} from "./Context";

function ComponentC() {
    return (
        <div>
            <h4>This is from ComponentC</h4>
            <MyContextConsumer>
                {data => (
                    <div>
                    Name: {data.name}
                    <br />
                    Age: {data.age}
                    <br />
                    <button onClick={data.btnClick}> Increase age by 1</button>
                    </div>
                )}
            </MyContextConsumer>
        </div>
    )
}

export default ComponentC
