import React from "react";
import UsingProps, { PropsClass } from './components/Props';

const App = () => {

  //when comps have children, the elements must not be self-closing. 
  // <Comp /> #comp with no-children
  // <Comp> children-comp-here </Comp>
  return (
    <div className="App">
      <UsingProps name="Del" profession="software engineer" />
      <UsingProps name="Mans" profession="proj manager" />
      <UsingProps name="Delmans" profession="develper">
        <small>This is shown just for the 3rd comp. Other don't have children.</small>
      </UsingProps>

      <PropsClass name="Flr" />
      <PropsClass name="Nyld">
        <small>Props-children with class components</small>
      </PropsClass>
    </div>
  );
}

export default App;