import React, { useEffect, useState } from 'react'

const IntervalCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalCounter
