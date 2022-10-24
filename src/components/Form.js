import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleComments = (event) => {
    this.setState({
      comments: event.target.value
    })
  }
  handleTopic = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  //when the function has only 1-argument, I can take off the ()
  handleSubmit = event => {
    alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`);
    event.preventDefault();

    //reset the form after submittion
    this.setState({
      username: '',
      comments: '',
      topic: 'react'
    })
  }

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={this.handleUsername} />
        </div>
        <div>
          <label>Coments</label>
          <textarea value={comments} onChange={this.handleComments}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopic}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    )
  }
}

export default Form;
