import React from 'react'
import { Input, Icon } from 'semantic-ui-react'
export default ({ icon, name, ...props }) => (
  <Input iconPosition="left" style={{ marginBottom: 5, width: 250 }}>
    <Icon name={icon} />
    <input style={{ backgroundColor: '#f9f9f9' }} name={name} {...props} />
  </Input>
)
