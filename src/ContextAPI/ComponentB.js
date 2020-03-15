import React from "react";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD"

function ComponentB() {
    return (
        <div>
            <h4>This is from ComponentB</h4>
            <ComponentC />
            <ComponentD />
        </div>
    )
}

export default ComponentB
