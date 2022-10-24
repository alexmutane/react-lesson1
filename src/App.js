import React from "react";

import LifecycleMount from "./components/LifecycleMount";
import LifecycleUpdate from "./components/LifecycleUpdate";

const App = () => {

  return (
    <div className="App">
      {/* <LifecycleMount /> */}
      <LifecycleUpdate />
    </div>
  );
}

export default App;