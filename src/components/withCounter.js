import React, { Component } from 'react'

//the HOC concept is: a pattern to allow creation of new comps based on old ones passed as args
// EnhancedComponent = higherOrderComponent(OriginalComponent)

//Wrappedcomp is the original/old comp to be passed as argument for the new one creation
const withCounter = (WrappedComp, incrementNr) => {
  //WithCounter (capital-case) is the new-comp to be created

  class WithCounter extends Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    incrementCount = () => {
      console.log('in', incrementNr)
      this.setState((prevState) => {
        return {
          count: incrementNr ? incrementNr : prevState.count + 1
        }
      })
    }
    render() {
      return <WrappedComp count={this.state.count} incrementCount={this.incrementCount} />
    }
  }
  return WithCounter
}

export default withCounter