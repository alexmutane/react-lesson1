import React, { Component } from 'react'

class ClickCounterRP extends Component {

  render() {
    const { count, clickIncrementor } = this.props;
    return (
      <div>
        <button onClick={clickIncrementor}>{count} clicks.</button>
      </div>
    )
  }
}

export default ClickCounterRP
