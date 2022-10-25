import React from 'react'

const ForwardRefInput = React.forwardRef((props, ref) => {
  console.log('received, ', props, ref);
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  )
}
)


export default ForwardRefInput
