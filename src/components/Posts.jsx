import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
       // Fetch posts
        axios.get("https://dummyjson.com/posts")
        .then(function(response) {
            setPosts([...response.data.posts]); // set posts in the state
            console.log(posts);
        })
        .catch(function(error) {
            console.log(error);
        })
    }, [])

    const navigate = useNavigate();
    function handlePostNavigation(id) {
        navigate(`/post/${id}`)
    }

  return (
    <div>
        <h2>Posts</h2>
        {posts.map(function(post) {
            return(
                <div className='post' key={post.id}>
                    <h3>{post.title}</h3>
                    <button onClick={() => handlePostNavigation(post.id)}>Read more</button>
                </div>
            )
        })}
    </div>
  )
}

export default Posts