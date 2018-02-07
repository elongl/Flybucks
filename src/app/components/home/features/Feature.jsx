import React from 'react'
import { Image } from 'semantic-ui-react'
export default ({ image, children, header }) => (
  <div
    style={{
      padding: '0 1.5rem',
      width: '25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Image src={image} height={120} />
    <h3 style={{ paddingTop: '0.5rem', fontSize: '2rem' }}>{header}</h3>
    <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{children}</p>
  </div>
)
