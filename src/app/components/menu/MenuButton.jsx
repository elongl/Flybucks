import React from 'react'
import { Button } from 'semantic-ui-react'

export default props => (
  <Button
    as="a"
    inverted
    content={props.content || props.children}
    style={{ ...props.style, zIndex: 1 }}
    onClick={props.onClick}
  />
)
