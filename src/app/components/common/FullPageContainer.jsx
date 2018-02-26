import React from 'react'
export default ({ children, style, ...props }) => (
  <div
    style={{
      backgroundImage: `url(/assets/images/background.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem',
      ...style
    }}
    {...props}
  >
    {children}
  </div>
)
