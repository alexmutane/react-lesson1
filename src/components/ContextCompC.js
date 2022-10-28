import React, { Component } from 'react'
import UserContext, { UserConsumer } from './userContext'

class ContextCompC extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(username) => {
          return <p>Hi {username}</p>
        }}
      </UserContext.Consumer>
    )
  }
}

export default ContextCompC
