import React from 'react';

//PROPS are attributes and values a function receives from the parent component.
// the 'name' and 'profession' to be used in this components are passed by the parent component, the App
const UsingProps = (props) => {
  return (
    <div style={{ border: '1px solid #222', padding: '3px', marginTop: '4px' }}>
      <div style={fewStyle.name}>{props.name}</div>
      <div style={fewStyle.profession}>{props.profession}</div>
      {props.children}
    </div>
  )
}

//PROPS.CHILDREN is only rendered where comps has children
export class PropsClass extends React.Component {
  render() {
    //or use Destructing, like below
    // const { name, profession } = this.props;
    //then in JSX call variables directly, without "this.props"
    return (
      <div style={{ border: '1px solid #ccc', padding: '3px', marginTop: '4px' }}>
        <h3>Props using class. {this.props.name}</h3>
        <p>{this.props.children}</p>
      </div>
    )
    //it's the same to STATE
    //const {state1, state2} = this.state
  }
}

//destruct props to use access them directly, without object.
export const DestrcutProps = ({ name, profession }) => {
  return <h5>Name: {name}, Profession: {profession}</h5>
}

export const DestrcutPropsBody = props => {
  const { name, profession } = props;
  return <h5>Worker: {name}. He is: {profession}</h5>
}

const fewStyle = {
  name: {
    fontWeight: '600',
    color: 'gray'
  },
  profession: {
    color: 'brown'
  }
}

export default UsingProps;