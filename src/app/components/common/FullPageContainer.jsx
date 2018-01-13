import React from 'react'
export default ({ children }) => (
  <div
    style={{
      backgroundImage: `url(https://cdn.dribbble.com/users/13449/screenshots/1828176/attachments/304147/Lakeside_Sunset_1920x1080.jpg)`,
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
