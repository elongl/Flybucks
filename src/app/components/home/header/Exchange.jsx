import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import ExchangeField from './exchange/ExchangeField'
import { withRouter } from 'react-router-dom'
import { digitsAfterDot } from '../../../pureFunctions'

export default withRouter(props => {
  const depositValueChanged = event => {
    const { value } = event.target
    const validator = /^\d*\.?\d*$/
    if (validator.test(value) && value !== '.')
      props.changeValue(value, digitsAfterDot(value / props.state.rate, 6))
  }
  const currencyChanged = (currencyObject, currencyType) =>
    props.changeCurrency(currencyType, currencyObject)
  const gotoExchanging = () => props.history.push('/exchange')
  return (
    <div
      style={{
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <ExchangeField
        type="deposit"
        style={props.style}
        value={props.state.deposit.value}
        chosenCurrency={props.state.deposit.currency}
        currencies={props.state.currencyList.deposit}
        onChangeValue={depositValueChanged}
        onChangeCurrency={currencyChanged}
      />

      <Icon
        name="exchange"
        size="big"
        color="yellow"
        style={{ margin: '0rem 1rem', marginBottom: '0.5rem' }}
      />

      <ExchangeField
        type="receive"
        style={props.style}
        value={props.state.receive.value}
        chosenCurrency={props.state.receive.currency}
        currencies={props.state.currencyList.receive}
        onChangeCurrency={currencyChanged}
      />
      {!props.loadedFromExchanging && (
        <Button
          labelPosition="right"
          content="Exchange"
          icon="right arrow"
          size="huge"
          style={{
            padding: '0.9em 0',
            margin: '1.5rem',
            color: 'white',
            backgroundColor: '#faa61a'
          }}
          onClick={gotoExchanging}
        />
      )}
    </div>
  )
})
