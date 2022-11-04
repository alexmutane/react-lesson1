import React, { useState } from 'react'

//USE STATE WITH PREVIOUS VALUE
function HookWithObject() {
  const [name, setName] = useState({
    firstname: '',
    lastname: ''
  });
  return (
    <div>
      <form>
        <input type="text" value={name.firstname} onChange={event => setName({ ...name, firstname: event.target.value })} />
        <input type="text" value={name.lastname} onChange={event => setName({ ...name, lastname: event.target.value })} />
        <p>Firstname: {name.firstname}, LastName: {name.lastname}</p>
      </form>
    </div>
  )
}
//the State doesn't merge automatically. This is why we have to use spread operator {...existing-value, new-value}

export default HookWithObject
