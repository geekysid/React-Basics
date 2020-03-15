import React, {useState} from 'react';
import "./StyleExternal.css";
import StyleExternalChild from "./Style_External_Child";

function StyleExternalFunction() {
    const [toggle, setToggle] = useState(true)
    const [style, setStyle] = useState("text")
    const [style2, setStyle2] = useState("text2")

    const styleToggle = () =>{
        if(toggle){
            setToggle(false)
            setStyle("text2 textSize")
            setStyle2("text textSize2")
        }else{
            setToggle(true)
            setStyle("text textSize2")
            setStyle2("text2 textSize")
        }
    }

    return (
        <div>
            {/* <StyleExternalChild name={toggle ? "text2 textSize2" : "text textSize"} />
            <h3 className={toggle ? "text textSize" : "text2 textSize2"}>Hello in Red</h3> */}
            <StyleExternalChild name={style2} />
            <h3 className={style}>Hello in Red</h3>
            <button onClick={styleToggle}>Toggle colour of Text</button>
        </div>
    )
}

export default StyleExternalFunction
