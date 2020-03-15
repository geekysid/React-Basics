// inline styling
// We can use multiple styles in same statement as spread array. The array coming last will take the priority.

import React, {useState, Component} from 'react';

export default function StyleInlineFunction() {

    // creating couple of state variables
    const [styleChanger, setStyleChanger] = useState(true)
    const [btnStyle, setBtnStyle] = useState({
        color: "red",
        backgroundColor: "black",
        fontSize: "25px"
    })
    const [btnStyle2, setBtnStyle2] = useState({
        fontSize: "20px"
    })

    // creating a click event handler
    const btnClick = () => {
        if(styleChanger){
            setBtnStyle({
                color: "black",
                backgroundColor: "red"
            })
            setBtnStyle2({fontSize: "15px"})
            setStyleChanger(false)
        } else{
            setBtnStyle({
                color: "red",
                backgroundColor: "black"
            })
            setBtnStyle2({fontSize: "20px"})
            setStyleChanger(true)
        }
    }

    return (
        <>
        <div>
            <button onClick={btnClick} style={{...btnStyle2, ...btnStyle}}>Button with Inline Style</button>
        </div>
        </>
    )
}

export class StylingInlineClass extends Component {
    state = {
        styleChanger: true
    }

    btnClick = () => {
        if(this.state.styleChanger){
            this.setState({styleChanger: false})
        }
        else{
            this.setState({styleChanger: true})
        }
    }

    render() {
        const btnStyle = {
            color: "red",
            backgroundColor: "green",
            fontSize: "15px"
        }
        if(this.state.styleChanger){
            btnStyle.color = "green";
            btnStyle.backgroundColor = "red";
            btnStyle.fontSize = "20px";
        }
        else{
            btnStyle.color = "red";
            btnStyle.backgroundColor = "green";
            btnStyle.fontSize = "15px";
        }
        return (
            <div>
                <button onClick={this.btnClick} style={btnStyle}>Ckicl me Please</button>
            </div>
        )
    }
}