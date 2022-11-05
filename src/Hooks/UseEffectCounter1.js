import React, { useEffect, useState } from 'react'

function UseEffectCounter1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('updatng....');
    document.title = `cliked ${count}`;
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicks {count}</button>
      <p>
        <input name='text' value={name} onChange={(ev) => setName(ev.target.value)} />
      </p>
    </div>
  )
}

export default UseEffectCounter1;
