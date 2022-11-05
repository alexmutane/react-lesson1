import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [post, setPost] = useState('')
  const [idButton, setIdButton] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then(res => {
        console.log('one', res)
        setPost(res.data);
      })
      .catch(err => console.log(err))
  }, [idButton])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleFetchData = () => {
    setIdButton(id)
  }

  return (
    <div>
      <input type='text' value={id} onChange={ev => setId(ev.target.value)} />
      <button onClick={handleFetchData}>Fetch</button>
      {/* <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul> */}
      <div>{post.id} - {post.title}</div>
    </div>
  )
}

export default DataFetching
