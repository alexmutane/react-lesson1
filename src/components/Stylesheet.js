import React from 'react'
import './myStyle.css';

function Stylesheet(props) {
  let primaryStyle = props.primary ? 'primary' : '';
  return (
    <div>
      <p className={`${primaryStyle} font-xl`}>Styless</p>

    </div>
  )
}

const myCss = {
  fontSize: '30px',
  fontWeight: '600',
  color: '#e3e3e3'
}

export default Stylesheet
