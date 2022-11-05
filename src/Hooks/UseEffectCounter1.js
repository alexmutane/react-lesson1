import React, { useEffect, useState } from 'react'

function UseEffectCounter1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `cliked ${count}`;
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicks {count}</button>
    </div>
  )
}

export default UseEffectCounter1;
