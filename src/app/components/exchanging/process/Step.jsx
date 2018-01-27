import React from 'react'
import { Icon, Step } from 'semantic-ui-react'
export default props => (
  <Step
    link
    active={props.active}
    disabled={props.disabled}
    onClick={() => props.gotoStage(props.stage)}
  >
    <Icon name={props.icon} />
    <Step.Content>
      <Step.Title style={{ color: props.active && '#EE7600' }}>
        {props.title}
      </Step.Title>
      <Step.Description>{props.description}</Step.Description>
    </Step.Content>
  </Step>
)
