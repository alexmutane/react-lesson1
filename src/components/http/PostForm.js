import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => console.log('post-res', response))
      .catch(err => {
        console.log('post-error', err)
      })
  }

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name='title' value={title} onChange={this.changeHandler} />
          </div>
          <div>
            <textarea name='body' value={body} onChange={this.changeHandler}></textarea>
          </div>
          <div>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm
