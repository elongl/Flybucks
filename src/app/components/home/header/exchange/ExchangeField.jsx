import React from 'react'
import { Input, Label } from 'semantic-ui-react'
import ExchangeDropdown from './ExchangeDropdown'
import { observer } from 'mobx-react'
import store from '../../../../../store'

export default observer(props => {
  const isReceive = props.type === 'receive'
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
          color: isReceive ? 'white' : '#faa61a',
          backgroundColor: isReceive ? 'rgba(0, 0, 0, 0.35)' : 'white',
          textTransform: 'uppercase'
        }}
      >
        {isReceive ? 'get' : 'have'}
      </Label>
      <input
        readOnly={isReceive}
        maxLength={18}
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
        <ExchangeDropdown
          type={props.type}
          currencies={store.currencyList[props.type]}
          chosenCurrency={store[props.type].currency}
          onChangeCurrency={(currencyObject, currencyType) =>
            store.changeCurrency(currencyObject, currencyType)
          }
        />
      </Label>
    </Input>
  )
})
