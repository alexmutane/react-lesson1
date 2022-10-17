import React from 'react';

const ChildComp = (props) => {
  const childName = "Filho";
  return (
    <div>
      <button onClick={props.saudarHanlder}>Saudar parent.</button>
      <button onClick={() => props.saudarHanlder(childName)}>Saudar parent c/ Param</button>
    </div>
  )
}

export default ChildComp