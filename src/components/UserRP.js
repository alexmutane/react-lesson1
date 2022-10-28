import React, { Component } from 'react'

class UserRP extends Component {
  render() {
    return (
      <div>
        {this.props.render(false)}
      </div>
    )
  }
}

export default UserRP
