import React from 'react'
import { Input, Dropdown, Icon, Label } from 'semantic-ui-react'
export default props => (
  <Input
    size="huge"
    labelPosition="right"
    value={props.value}
    onChange={props.onChangeValue}
    onKeyPress={checkIfNumber}
  >
    <Label
      basic
      style={{
        color: props.disabled && '#FFF',
        backgroundColor: props.disabled && 'rgba(0, 0, 0, 0.35)',
        textTransform: 'uppercase'
      }}
    >
      {props.placeholder}
    </Label>
    <input
      readOnly={props.disabled}
      style={{
        width: '18rem',
        backgroundColor: props.disabled && 'rgba(0, 0, 0, 0.35)',
        textAlign: 'right',
        fontWeight: 700,
        color: props.disabled && 'white',
        border: 'none',
        cursor: props.disabled ? 'default' : 'auto'
      }}
    />
    <Label>
      <Dropdown
        defaultValue={props.defaultCurrency}
        options={props.currencies}
        scrolling
        onChange={(event, data) => {
          props.onChangeCurrency(
            props.currencies.find(rate => rate.value === data.value)
          )
        }}
        icon={
          <Icon
            style={{ marginLeft: '0.5rem', color: '#faa61a' }}
            name="chevron down"
          />
        }
      />
    </Label>
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
