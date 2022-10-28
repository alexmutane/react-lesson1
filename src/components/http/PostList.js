import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      error: ''
    }
  }

  componentDidMount() {
    //this is the best place to make the REQUEST
    //data is get after the comp mounted, it's executed ONLY ONCE during comp's lifetime
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log('res', res);
        this.setState({
          posts: res.data
        })
      })
      .catch(error => {
        console.log('err', error);
        this.setState({
          errorMsg: 'Error Getting data.'
        })
      })
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2>List of Posts</h2>
        {
          posts.length ? posts.map(post => <p key={post.id}>{post.title}</p>) : null
        }
        {
          errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}

export default PostList
