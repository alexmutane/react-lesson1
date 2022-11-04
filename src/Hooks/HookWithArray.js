import React, { useState } from 'react'

function HookWithArray() {
  const [items, setItems] = useState([])

  const addItem = () => {
    //setItems - the state Updater function
    //...items - to copy all existing data before adding the new one
    //{id: X, value: Y} - appending new value to the existing
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ])
  }
  return (
    <div>
      <button onClick={addItem}>add+</button>
      <ul>
        {items.map(item =>
          <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  )
}

export default HookWithArray
