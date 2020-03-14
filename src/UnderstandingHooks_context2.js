import React, {useContext} from "react";
import {playerContext, scoreContext} from "./UnderstandingHooks_context";

function UnderstandingHooksContext2() {
    const user = useContext(playerContext)
    const score = useContext(scoreContext)

    return (
        <div>
            Player: {user}<br />
            Score: {score}
        </div>
    )
}

export default UnderstandingHooksContext2
