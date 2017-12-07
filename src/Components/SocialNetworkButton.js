import React from 'react'
import { Button } from 'semantic-ui-react'
export default props => (
  <Button
    icon={props.name.toLowerCase()}
    color={
      props.name.toLowerCase() !== 'google'
        ? props.name.toLowerCase()
        : 'google plus'
    }
    style={{ ...props.style, marginBottom: 15, width: 265 }}
    size="big"
    content={
      props.type === 'signup' ? `Sign up with ${props.name}` : props.name
    }
  />
)
