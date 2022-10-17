import React from 'react';
import ChildComp from './components/ChildComp';


class ParentComp extends React.Component {
  constructor() {
    super()
    this.state = {
      parentName: 'Parent'
    }
  }

  greetParent = (childName) => {
    console.log(childName)
    alert(`Ola meu parent: ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <ChildComp saudarHanlder={this.greetParent} />
    )
  }
}

export default ParentComp