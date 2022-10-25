import React from "react";
import FocusInput from "./components/FocusInput";
import ForwardRefParent from "./components/ForwardRefParent";

import RefsDemo from "./components/RefsDemo";

const App = () => {

  return (
    <div className="App">
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      <ForwardRefParent />
    </div>
  );
}

export default App;