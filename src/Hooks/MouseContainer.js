import React, { useState } from 'react'
import UseEffectMouseMove from './UseEffectMouseMove'

const MouseContainer = () => {
  const [display, setDisplay] = useState(true)


  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toogle display</button>
      {display && <UseEffectMouseMove />}
    </div>
  )
}

export default MouseContainer
