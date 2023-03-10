import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Welcome Home</h1>

      <div className='link'> <Link to={"/posts"}>Posts</Link></div> 
    </div>
  )
}

export default Home