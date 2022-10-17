import React from "react";

import ClickEvent, { ClickFnClass, EventBinder } from './components/Events';

const App = () => {

  return (
    <div className="App">
      <ClickEvent />
      <ClickFnClass />
      <EventBinder />
    </div>
  );
}

export default App;