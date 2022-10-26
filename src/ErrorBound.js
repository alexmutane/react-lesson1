import React from 'react'

function ErrorBound({ hero }) {
  if (hero === 'alex') {
    throw Error("this is not a hero")
  }
  return (
    <div>
      {hero}
    </div>
  )
}

export class Boundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return 'We got erros!'
    }
    return this.props.children
  }

}

export default ErrorBound
