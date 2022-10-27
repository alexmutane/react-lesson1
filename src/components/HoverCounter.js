import React, { Component } from 'react'
import withCounter from './withCounter';

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h4 onMouseOver={incrementCount}>Hovered me {count} times</h4>
      </div>
    )
  }
}

export default withCounter(HoverCounter)
