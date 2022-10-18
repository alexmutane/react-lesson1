import React from 'react'

function PersonComp({ person }) {
  return (
    <div>
      <p>I'm {person.name}, {person.age} years old, working as {person.work}</p>
    </div>
  )
}

export default PersonComp
