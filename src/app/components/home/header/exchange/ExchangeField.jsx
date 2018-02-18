import React from 'react'
import { Input, Label } from 'semantic-ui-react'
import ExchangeDropdown from './ExchangeDropdown'
import { observer } from 'mobx-react'
import store from '../../../../../store'

export default observer(props => {
  const isToField = props.type === 'to'
  return (
    <Input
      style={props.style}
      size="huge"
      labelPosition="right"
      disabled={store.rate === undefined}
      value={store[props.type].value}
      onChange={e => {
        const { value } = e.target
        const validator = /^\d*\.?\d*$/
        if (validator.test(value) && value !== '.') store.changeValue(value)
      }}
    >
      <Label
        style={{
          fontSize: 17,
          display: 'flex',
          alignItems: 'center',
          color: isToField ? 'white' : '#faa61a',
          backgroundColor: isToField ? 'rgba(0, 0, 0, 0.35)' : 'white',
          textTransform: 'uppercase'
        }}
      >
        {isToField ? 'get' : 'have'}
      </Label>
      <input
        readOnly={isToField}
        maxLength={18}
        style={{
          width: '18rem',
          backgroundColor: isToField && 'rgba(0, 0, 0, 0.35)',
          textAlign: 'right',
          fontWeight: 700,
          color: isToField && 'white',
          border: 'none',
          cursor: isToField ? 'default' : 'auto'
        }}
      />
      <Label style={{ color: 'black' }}>
        <ExchangeDropdown
          type={props.type}
          currencyList={store.currencyList}
          chosenCurrency={store[props.type].currency}
          onChangeCurrency={(currencyObject, currencyType) =>
            store.changeCurrency(currencyObject, currencyType)
          }
        />
      </Label>
    </Input>
  )
})
