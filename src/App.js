import React from "react";
import * as Mix from './components/Functional';

const App = () => {
  return (
    <div className="App">
      <Mix.default />
      <Mix.Named />
    </div>
  );
}

export default App;