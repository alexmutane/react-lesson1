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

export default ClickEvent;