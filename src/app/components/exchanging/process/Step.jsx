import React from 'react'
import { Icon, Step } from 'semantic-ui-react'
export default ({ icon, title, description, active, disabled }) => (
  <Step active={active} disabled={disabled}>
    <Icon name={icon} />
    <Step.Content>
      <Step.Title style={{ color: active && '#EE7600' }}>{title}</Step.Title>
      <Step.Description>{description}</Step.Description>
    </Step.Content>
  </Step>
)
