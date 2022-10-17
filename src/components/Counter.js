import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      prev: 0
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    },
      () => {
        //whenever I need to execute some instructions right after changing the state,
        //i've to put the code in the set-state callback.
        console.log(this.state.count);
      }
    )
  }

  handleIncrementPrev = () => {
    //when I need to update the state based on the last value, I pass the value of
    //the previous state as parameter
    this.setState(prevState => ({
      prev: prevState.prev + 5
    })
    )
  }

  render() {
    return (
      <div>
        <p>count - {this.state.count}</p>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <br />
        <p>Prev - {this.state.prev}</p>
        <button onClick={() => this.handleIncrementPrev()}>Increment-Prev</button>
      </div>
    )
  }
}

export default Counter
