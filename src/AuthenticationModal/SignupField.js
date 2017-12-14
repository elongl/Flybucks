import React from 'react'
import { Input, Icon } from 'semantic-ui-react'

// Props:
// placeholder
// type
// onChange
// icon
export default props => (
  <Input
    iconPosition="left"
    placeholder={props.placeholder}
    type={props.type}
    style={{ marginBottom: 5, width: 250 }}
    onChange={props.onChange}
  >
    <Icon name={props.icon} />
    <input style={{ backgroundColor: '#f9f9f9' }} />
  </Input>
)
