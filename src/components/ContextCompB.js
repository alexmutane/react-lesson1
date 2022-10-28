import React, { Component } from 'react'
import ContextCompC from './ContextCompC'
import UserContext from './userContext'

class ContextCompB extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        Comp-b. Context value: {this.context}
        <ContextCompC />
      </div>
    )
  }
}

//Another way of using context, getting context value
// ContextCompB.contextType = UserContext;
export default ContextCompB

