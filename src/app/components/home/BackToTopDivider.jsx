import React from 'react'
import { Divider } from 'semantic-ui-react'
export default ({ text }) => (
  <Divider
    as="h4"
    horizontal
    section
    style={{
      width: '60%',
      textTransform: 'uppercase',
      height: 0
    }}
  >
    <a
      style={{ color: '#faa61a', cursor: 'pointer' }}
      onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
    >
      {text}
    </a>
  </Divider>
)
