import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({title: "", body: ""});

    useEffect(() => {
      axios.get(`https://dummyjson.com/posts/${id}`)
        .then(function(response){
            setPost(response.data)
            console.log(response);
        }) 
        .catch(function(error) {
            console.log(error);
        })
    }, [])
    

  return (
    <div className='post'>
        <Link to={"/"}>Home</Link> <span>&gt;&gt;</span><Link to={"/posts"}>Posts</Link>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

export default Post