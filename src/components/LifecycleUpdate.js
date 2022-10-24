import React from 'react'

class LifecycleUpdate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      course: 'React'
    }
  }

  static getDerivedStateFromProps() {
    console.log('derived');
    return null;
  }

  shouldComponentUpdate() {
    console.log('should.update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('snapshot', prevState)
    return null
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log('did.update', nextState, snapshot)
  }

  handleChange = () => {
    this.setState({
      course: 'ReactJS'
    })
  }

  render() {
    console.log('rendering...')
    return (
      <div>
        <p>Course: {this.state.course}</p>
        <button onClick={this.handleChange}>Trocar estado</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('did.mount');
  }

  componentWillUnmount() {
    console.log('i\'m about to leave');
  }
}

export default LifecycleUpdate
