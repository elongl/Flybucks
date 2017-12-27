import React from 'react'
import { Input, Label } from 'semantic-ui-react'
import SearchDropdown from './ExchangeDropdown'

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
        style={{
          fontSize: 17,
          display: 'flex',
          alignItems: 'center',
          color: isReceive ? 'white' : '#faa61a',
          backgroundColor: isReceive ? 'rgba(0, 0, 0, 0.35)' : 'white',
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
      <Label style={{ color: 'black' }}>
        <SearchDropdown
          currencies={props.currencies}
          chosenCurrency={props.chosenCurrency}
          onChangeCurrency={props.onChangeCurrency}
          type={props.type}
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
