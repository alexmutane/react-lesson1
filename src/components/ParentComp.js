import React from 'react';

import PureComp from './PureComp';
import RegularComp from './RegularComp';
class ParentComp extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      parentName: "samename"
    }
  }

  // callParentHandler = (childname) => {
  //   alert(`Hey estou aqui ${this.state.parentName}, filho ${childname}`)
  // }
  componentDidMount() {
    setInterval(() => {
      console.log('re-render parent');
      this.setState({
        parentName: 'samename'
      })
    }, 2000);
  }

  render() {
    return (
      // <ChildComp callParent={this.callParentHandler} />
      <>
        <PureComp parentName={this.state.parentName} />
        <RegularComp />
      </>
    )
  }
}

export default ParentComp