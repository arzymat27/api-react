import React, { useState, useEffect } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPosts(data))
    })
        return (
            <div>
                <ul>
                   {posts.map((elem) => {
                       return(
                           <div>
                               <img  src={elem.url}/>
                              
                           </div>
                       )
                   })}
                </ul>
            </div>
        )
    }

export default DataFetching