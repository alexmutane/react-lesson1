import React, { Component } from 'react'
import InputClass from './InputClass'

class FocusInput extends Component {
  constructor(props) {
    super(props)

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    console.log(this.componentRef.current);
    this.componentRef.current.focusInput();
  }

  render() {
    return (
      <div>
        <InputClass ref={this.componentRef} />
        <button onClick={this.clickHandler}>Set Focus</button>
      </div>
    )
  }
}

export default FocusInput
