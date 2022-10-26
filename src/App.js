import React from "react";

import ErrorBound, { Boundary } from "./ErrorBound";

const App = () => {

  return (
    <div className="App">
      <Boundary>
        <ErrorBound hero='manys' />
      </Boundary>
      <Boundary>
        <ErrorBound hero="alex" />
      </Boundary>
      <Boundary>
        <ErrorBound hero='nyld' />
      </Boundary>
    </div>
  );
}

export default App;