import React from "react";
import ClickCounter from "./ClickCounter";
import ClickIncrementOr from "./components/ClickIncrement.or";
import HoverCounter from "./components/HoverCounter";



const App = () => {

  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <ClickIncrementOr />
    </div>
  );
}

export default App;