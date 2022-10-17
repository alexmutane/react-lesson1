import React from "react";

import Message from './components/States';
import Counter from './components/Counter';
import DestrcutProps from "./components/Props";
import DestrcutPropsBody from './components/Props';

const App = () => {

  return (
    <div className="App">
      {/* <Message /> */}
      {/* <Counter /> */}
      <DestrcutProps name="John" profession="Coder" />
      <DestrcutPropsBody name="Doe" profession="Engineer" />
    </div>
  );
}

export default App;