import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)

    //1st way of creating a REF to explore DOM elements properties and methods
    this.inputRef = React.createRef()

    //2nd way is using callback ref
    this.callbackRef = null;
    this.callbackRef = el => {
      this.callbackRef = el;
    }
  }
  componentDidMount() {
    //using CreateRef, access properties as 'current.PROPERTY|METHOD'
    this.inputRef.current.focus();

    //using callbackRef, access it directly
    this.callbackRef.focus()
  }

  clickHandler = () => {
    console.log(`valor: ${this.inputRef.current.value}`)
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.callbackRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
