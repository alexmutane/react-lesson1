import React from "react";

import ClickCounterRP from "./components/ClickCounterRP";
import CounterRP from "./components/CounterRP";
import HoverCounterRP from "./components/HoverCounterRP";
// import UserRP from "./components/UserRP";

const App = () => {

  return (
    <div className="App">
      <CounterRP render={(count, clickIncrementor) => (
        <ClickCounterRP count={count} clickIncrementor={clickIncrementor} />
      )} />
      <CounterRP render={(count, clickIncrementor) => (
        <HoverCounterRP count={count} clickIncrementor={clickIncrementor} />
      )} />
    </div>
  );
}

export default App;