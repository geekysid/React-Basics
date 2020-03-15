/*
    Many a time we might come across a point where we have imported 2 different stylesheets which might have classes same name. In such case, it quite cumbersome to handle such styles classes. To prevent such issues, we have Class Modules in React. We import the stylesheets with a proper name and then whenever we want to use the style for the imported stylesheets, then we use name.styleClass. We also need to make sure that the stylesheet is named as Name.module.css, where 'Name' can be anything and module.css is as it is.

    In our case we have imported two classes, Style1.module.css and Style2.module.css with name Style1 and Style2 repectively. Both these two classes
*/

import React from "react";
import Style1 from "./Style1.module.css";   // importing 1st stylesheet as Style1
import Style2 from "./Style2.module.css";     // importing 2nd stylesheet as Style2

export default function StyleModuleFunction() {
    console.log(Style2)
    return (
        <div>
            From StyleModuleFunction
            <h4 className={Style1.text}>This style is from Style1.module.css</h4>
            <h4 className={Style2.text}>This style is from Style2.module.css</h4>
        </div>
    )
}

export class StyleModuleClass extends React.Component{
    render(){
        console.log("Style1: ", Style1)
        console.log("Style2: ", Style2)
        return (
            <React.Fragment>
                From StyleModuleClass
                <h4 className={`${Style1.text}`}>This style is from StyleExternal.css</h4>
                <h4 className={`${Style2.text}`}>This style is from StyleModule.css</h4>
            </React.Fragment>
        )
    }
}
