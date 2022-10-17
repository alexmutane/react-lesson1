import React from 'react';

const ClickEvent = () => {
  function clickHandler() {
    console.log('cliked.')
  }
  return <p><button onClick={clickHandler}>Clicar</button></p>
}

//on ClassComponent the only thing that changes is that,
//we use THIS to access the function
export class ClickFnClass extends React.Component {

  clickHandlerClss() {
    console.log('hey. clicked')
  }
  render() {
    return <button onClick={this.clickHandlerClss}>click - class</button>
  }
}

export class EventBinder extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "Hello",
    }
    //binding will make possible to use THIS inside the function
    this.changeTextHandler = this.changeTextHandler.bind(this);
  }

  changeTextHandler() {
    console.log(this);
    this.setState({
      text: 'Text changed. Goodbye!'
    })
  }

  changeTextHandler2 = () => {
    this.setState({
      text: 'Arrow func is better! Cheers!🥂'
    })
  }

  render() {
    return (
      <div>
        {this.state.text}
        <p><button onClick={this.changeTextHandler}>Change Text | .bind</button></p>
        <p><button onClick={this.changeTextHandler2}>Change Text | =></button></p>
      </div>
    )
  }
}

export default ClickEvent;