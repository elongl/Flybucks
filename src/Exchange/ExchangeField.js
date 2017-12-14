import React from 'react'
import { Input, Label } from 'semantic-ui-react'

// Props:
// placeholder
// value
// onChange
// content
// icon
// style
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
  const { charCode } = event
  const { value } = event.target
  if (
    !(
      (charCode >= 48 && charCode <= 57) ||
      (charCode === 46 && value.includes('.') === false)
    )
  )
    event.preventDefault()
}
