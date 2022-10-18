import React from 'react';

const ChildComp = (props) => {
  const childName = "Comp-Filho."
  return (
    <div>
      <button onClick={() => props.callParent(childName)}>Olá parent</button>
    </div>
  )
}

export default ChildComp