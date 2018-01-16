import React from 'react'
import { Icon, Step } from 'semantic-ui-react'
export default ({ icon, title, description, active, disabled }) => (
  <Step active={active} disabled={disabled}>
    <Icon name={icon} />
    <Step.Content>
      <Step.Title>{title}</Step.Title>
      <Step.Description>{description}</Step.Description>
    </Step.Content>
  </Step>
)
