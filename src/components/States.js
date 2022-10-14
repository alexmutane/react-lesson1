import React from 'react';

//while Props are passed to comps, STATE is managed within the component
//while Props are immutable, STATE can be changed

//in Func-comps state uses *useState
//in Class-comps state uses *this.state

class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome visitor'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Subscribed!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;