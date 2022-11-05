import React, { useEffect, useState } from 'react'

const UseEffectMouseMove = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    console.log('use-effect runing just once');
    window.addEventListener('mousemove', logMousePosition)
  }, []);

  function logMousePosition(event) {
    console.log('mouse-movement still logging')
    setX(event.clientX)
    setY(event.clientY)
  }

  return (
    <div>
      X,Y: {x} x {y}
    </div>
  )
}

export default UseEffectMouseMove
