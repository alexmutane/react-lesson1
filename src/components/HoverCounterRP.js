import React, { Component } from 'react'

class HoverCounterRP extends Component {

  render() {
    const { count, clickIncrementor } = this.props;
    return (
      <div>
        <h4 onMouseOver={clickIncrementor}>{count} hovers.</h4>
      </div>
    )
  }
}

export default HoverCounterRP
