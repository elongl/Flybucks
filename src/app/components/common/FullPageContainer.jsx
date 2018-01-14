import React from 'react'
export default ({ children }) => (
  <div
    style={{
      backgroundImage: `url(/assets/images/background.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {children}
  </div>
)
