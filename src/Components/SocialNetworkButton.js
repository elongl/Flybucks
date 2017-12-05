import React from 'react'
import { Button } from 'semantic-ui-react'
export default props => (
  <Button
    style={{ ...props.style, marginBottom: 15, width: 265 }}
    size="big"
    content={`Sign up with ${props.name}`}
    icon={props.icon}
    color={props.color}
  />
)
