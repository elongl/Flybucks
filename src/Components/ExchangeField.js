import React from 'react'
import { Input, Label } from 'semantic-ui-react'

export default props => (
  <Input
    labelPosition="right"
    placeholder={props.placeholder}
    size="huge"
    style={props.style}
    value={props.value}
    onChange={props.onChange}
    onKeyPress={checkIfNumber}
  >
    <Label basic content={props.content} />
    <input />
    <Label icon={props.icon} />
  </Input>
)
const checkIfNumber = event => {
  if (!(event.charCode >= 48 && event.charCode <= 57)) event.preventDefault()
}
