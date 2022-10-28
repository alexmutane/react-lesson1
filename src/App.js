import React from "react";
import ContextCompA from "./components/ContextCompA";
import UserContext from "./components/userContext";

const App = () => {

  return (
    <div className="App">
      <UserContext.Provider value="Alex's">
        <ContextCompA />
      </UserContext.Provider>
    </div>
  );
}

export default App;