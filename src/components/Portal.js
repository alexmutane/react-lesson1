import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  });

  const myelement = <div>Portal demos</div>
  return domReady ? ReactDOM.createPortal(myelement, document.getElementById('portal-root')) : null
}

export default Portal
