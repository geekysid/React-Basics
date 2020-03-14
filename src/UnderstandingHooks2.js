/*
    In this example we will learn how to use useEffect for fething datat from API
    For this we will use a module called AXIOS and install it using npm (npm i axios)

*/

import React, {useState, useEffect} from 'react';
import axios from "axios";

function FetchData() {
    const [posts, setPosts] = useState([])  // all posts
    const [post, setPost] = useState({title:"null"})  // individual Posts
    const [nextPostID, setNextPostID] = useState(1)     // ID of next post to be fetched

    // useEffect that fetches all posts during 1st render
    useEffect( () => {
        console.log("useEffect() Called")
        axios.get('http://jsonplaceholder.typicode.com/posts/')  // making API call
            // this calls returns success then : 
            .then(response => 
                {
                    console.log(response)   // priniting data to the console
                    setPosts(response.data) // setting state
                })
            .catch(err => console.log(err)) // if API call returns an errro
        
    }, []) // passing empty array to make sure that this useEffect is executed only once

    // useEffect that fetches 1 post at a time depending on post Id
    useEffect( () => {
        console.log("Second useEffect(0 Called")
        axios.get(`http://jsonplaceholder.typicode.com/posts/${nextPostID}`)
            .then(response => {
                setPost(response.data)
                console.log(response)
            })
            .catch(err => console.log(err))
    }, [nextPostID])
    
    const clickHandler = () => {
        setNextPostID(nextPostID+1)
    }

    return (
        <>
            <div>
                <button onClick={clickHandler}>Ftech Next Post</button>
                <p>
                    {post.title}
                </p>
            </div>
            {/* <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
        </>
    )
}

export default FetchData
