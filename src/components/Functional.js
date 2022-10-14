import React from "react";

// const Functional = () => {
//   return <h1>Hello, Alex. Starting React.</h1>
// }

const Functional = () => (
  <div>
    <p>Default export component</p>
  </div>
);

//this is a NAMED EXPORT. To call it use: import { Mixed } from ...
export const Named = () => <p>Named export component</p>

//this is a DEFAULT EXPORT. To call it use:
// 1. import Funcional from... 
// or
// 2. import AnotherName from... -> I can call it as another name as I want
export default Functional;

//To call both use: import * as AnyName from ....