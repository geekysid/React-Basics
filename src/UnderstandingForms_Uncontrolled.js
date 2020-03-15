import React, {useState} from "react"

export function UnderstandingFormsControlled() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState()
    
    // entering username and converting to uppercase
    const txtUsername_change = (e) => {
        setUsername(e.target.value.toUpperCase().substring(0,10));
        // console.log(username);
    };

    const txtPassword_change = e => {
        setPassword(e.target.value)
    }

    // entering mobile and restring to only numerical inputs with a max length of 10
    const txtMobile_change = (e) => {
        let number = e.target.value
        if(isNaN(number)){
            alert("Only Numbers Allowed")
            e.target.value = mobile
        } else {
            if(number.length > 10){
                alert("Mobile number cant be more then 10 digits")
                e.target.value = mobile
            } else {
                setMobile(number)
            }
        }
    };

    const txtAddress_change = e =>{
        setAddress(e.target.value)
        // console.log(e.target.value)
    }

    // using one handler for multiple events
    const multiple_change = e => {
        let event = e.target.name
        // console.log(event)

        event === "txtAddress" ? setAddress(e.target.value.toUpperCase()) :setPassword(e.target.value)
    }

    const formSubmitHandler = e => {
        e.preventDefault();
        console.log(e.target[0].name, ": ", e.target[0].value)
        console.log(e.target[1].name, ": ", e.target[1].value)
        console.log(e.target[2].name, ": ", e.target[2].value)
        console.log(e.target[3].name, ": ", e.target[3].value)
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label>
                    Username <input type="text" name="txtUsername" value={username} 
                                onChange={txtUsername_change} />
                </label>
                <br /><br />
                <label>
                    Password <input type="password" name="txtPassword" value={password} 
                                onChange={multiple_change} />
                </label>
                <br /><br />
                <label>
                    Mobile <input type="text" name="txtMobile" value={mobile} 
                                onChange={txtMobile_change} />
                </label>
                <br /><br />
                <label>Address <textarea name="txtAddress" value={address} onChange={multiple_change} />
                </label>
                <br /><br />
                <input type="submit" name="txtAddress" value="SUBMIT"/>
                <br /><br />
            </form>
        </div>
    )
}

export default function UnderstandingFormsUncontrolled(){
    return (
        <form>
            <label>
                Username: <input type="text" />
            </label>
            <br /><br />
            <label>
                Password: <input type="password" />
            </label>
            <br /><br />
            <input type="submit" value="SUBMIT" />
            <br /><br />
        </form>
    )
}
