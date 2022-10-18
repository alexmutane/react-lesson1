import React from "react";

class ConditionalRender extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    //1. WE CAN USE IF-ELSE
    // if (this.state.isLoggedIn) {
    //   return <p>Welcome Alex</p>
    // }
    // else {
    //   return <p>Welcome Guest!</p>
    // }

    //2. PREDEFINING BLOCKS IN THE IF-ELSE
    // let message;
    // if (!this.state.isLoggedIn) {
    //   message = <p>Welcome Alex</p>
    // }
    // else {
    //   message = <p>Welcome Guest!</p>
    // }
    // return <div>{message}</div>

    //3. RENDER USING TERNARY CONDITION
    // return !this.state.isLoggedIn ? <p>Welcome Alex</p> : <p>Welcome Guest!</p>;

    //4. TO RENDER SOMETHING OR NOTHING
    //used when I want to show nothing when the condition is false
    return this.state.isLoggedIn && <p>Welcome Alex</p>
  }
}

export default ConditionalRender