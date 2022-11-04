import React, { useState } from 'react'

//USE-STATE WITH PREVIOUS VALUE
function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count}
      <p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+1</button>
        <button onClick={() => setCount(initialCount)}>0</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-1</button>
      </p>
    </div>
  )
}

export default HookCounterTwo
