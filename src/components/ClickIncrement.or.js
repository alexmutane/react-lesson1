import React, { Component } from 'react'
import withCounter from './withCounter'

var innr = 0;
class ClickIncrementor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputNr: 1
    }
  }

  inputNrHandle = event => {
    this.setState({
      inputNr: event.target.value
    })
    innr = this.state.inputNr;
    console.log('innn', innr)
  }

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <input type="number" onChange={this.inputNrHandle} value={this.state.inputNr} />
        <button onClick={incrementCount}>Click to Increment</button>
        <p>Now the value is: {count}</p>
      </div>
    )
  }
}

console.log('in*', innr)
export default withCounter(ClickIncrementor, innr)