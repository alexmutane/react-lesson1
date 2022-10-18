import React from 'react';

import ChildComp from './components/ChildComp'
class ParentComp extends React.Component {
  constructor() {
    super()
    this.state = {
      parentName: "Comp-Pai"
    }
  }

  callParentHandler = (childname) => {
    alert(`Hey estou aqui ${this.state.parentName}, filho ${childname}`)
  }

  render() {
    return (
      <ChildComp callParent={this.callParentHandler} />
    )
  }
}

export default ParentComp