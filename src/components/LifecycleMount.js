import React from 'react'

class LifecycleMount extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'delton'
    }
    console.log('constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('ger-derived');
    return null
  }

  render() {
    console.log('render')
    return (
      <div>
        <Child />
        LifecycleMount
      </div>
    )
  }

  componentDidMount() {
    console.log('did-mount')
  }
}

export class Child extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    console.log('child constr')
  }

  static getDerivedStateFromProps() {
    console.log('derived-child');
    return null;
  }

  render() {
    console.log('render-child')
    return <p>LifecycleMount - child</p>
  }

  componentDidMount() {
    console.log('child mounted');
  }

}

export default LifecycleMount
