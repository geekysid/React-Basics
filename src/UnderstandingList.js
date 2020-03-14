import React, {useState} from 'react'

function ComponentList() {

    // list of objects
    const users = useState([
        {id: 101, name: "Siddhant", pass:"987httg"},
        {id: 102, name: "Sachin", pass:"987httg"},
        {id: 103, name: "Sourav", pass:"987httg"},
        {id: 104, name: "Sumit", pass:"987httg"}
    ])

    console.log("Console: ", users[0])

    return (
        <div>
            <ul>
                {users[0].map((user) => {
                        console.log("user: ", user.id)
                        return <li key={user.id}>Name: {user.name}; Pass: {user.pass}</li>
                    }
                )}
            </ul>            
        </div>
    )
}

export class ComponentList2 extends React.Component{
    state = {
        "users": [
            {id: 101, name: "Siddhant", pass:"987httg"},
            {id: 102, name: "Sachin", pass:"789jhgb"},
            {id: 103, name: "Sourav", pass:"w3223ds42"},
            {id: 104, name: "Sumit", pass:"234wef23rqw"}
        ],
        isLoggedIn: false
    }

    render(){
        return(
            <ul>
                {this.state.users.map((user) => {
                    console.log("User: ", user)
                    return <li key={user.id}>Name: {user.name}, Pass: {user.pass}</li>
                    }
                )}
            </ul>
        )
    }
}

export default ComponentList2

