import React from 'react'
import { Input, Dropdown, Icon, Label } from 'semantic-ui-react'

export default props => {
  const isReceive = props.type === 'receive'
  return (
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
          color: isReceive && '#FFF',
          backgroundColor: isReceive && 'rgba(0, 0, 0, 0.35)',
          textTransform: 'uppercase'
        }}
      >
        {props.placeholder}
      </Label>
      <input
        readOnly={isReceive}
        style={{
          width: '18rem',
          backgroundColor: isReceive && 'rgba(0, 0, 0, 0.35)',
          textAlign: 'right',
          fontWeight: 700,
          color: isReceive && 'white',
          border: 'none',
          cursor: isReceive ? 'default' : 'auto'
        }}
      />
      <Label>
        <Dropdown
          value={props.chosenCurrency && props.chosenCurrency.value}
          options={props.currencies}
          scrolling
          onChange={(event, data) => {
            props.onChangeCurrency(
              props.currencies.find(rate => rate.value === data.value),
              props.type
            )
          }}
          icon={
            <Icon
              style={{ marginLeft: '0.5rem', color: '#faa61a' }}
              name="angle down"
            />
          }
        />
      </Label>
    </Input>
  )
}

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
