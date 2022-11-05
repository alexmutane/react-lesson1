import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [post, setPost] = useState('')

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log('one', res)
        setPost(res.data);
      })
      .catch(err => console.log(err))
  }, [id])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <input type='text' value={id} onChange={ev => setId(ev.target.value)} />
      {/* <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul> */}
      <div>{post.id} - {post.title}</div>
    </div>
  )
}

export default DataFetching
