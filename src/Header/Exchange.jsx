import React, { Component } from 'react'
import * as exchangeRates from '../ExchangeRates'
import { Container, Button, Icon } from 'semantic-ui-react'
import ExchangeField from '../Exchange/ExchangeField'
import Alert from 'sweetalert2'

const digitsAfterDot = (numString, digitsAfterDot) =>
  numString
    .toString()
    .substring(0, numString.toString().indexOf('.') + digitsAfterDot + 1)

export default class extends Component {
  state = {
    depositValue: '...',
    depositCurrency: undefined,
    depositCurrencies: undefined,
    receiveValue: '...',
    receiveCurrency: undefined,
    receiveCurrencies: undefined,
    rate: undefined
  }

  componentDidMount = async () => {
    await this.setOptions()
    await this.updateRate()
  }

  depositValueChanged = event => {
    this.setState({
      depositValue: event.target.value,
      receiveValue: digitsAfterDot(event.target.value / this.state.rate, 5)
    })
  }

  currencyChanged = (currencyObject, type) => {
    this.setState({ receiveValue: '...' })
    this.setState({ [`${type}Currency`]: currencyObject }, () =>
      this.updateRate().then(() =>
        this.setState({
          receiveValue: digitsAfterDot(
            this.state.depositValue / this.state.rate,
            5
          )
        })
      )
    )
  }

  updateRate = async () => {
    const { receiveCurrency, depositCurrency } = this.state
    const rate = await exchangeRates.getRate(
      receiveCurrency.value,
      depositCurrency.key
    )
    this.setState({ rate: rate[`price_${depositCurrency.key.toLowerCase()}`] })
  }

  setOptions = async () => {
    const currencies = [{ key: 'ILS', text: 'ILS', value: 'shekel' }]
    const rates = await exchangeRates.getRates()
    rates.map(rate =>
      currencies.push({
        key: rate.symbol,
        text: rate.symbol,
        value: rate.id
      })
    )
    const depositCurrencies = currencies.slice(0)
    const receiveCurrencies = currencies.slice(1)
    this.setState({
      depositValue: '',
      depositCurrency: currencies[0],
      depositCurrencies,
      receiveValue: '',
      receiveCurrency: currencies[1],
      receiveCurrencies
    })
  }

  render() {
    return (
      <Container
        style={{
          marginTop: '1.5rem',
          width: '100%'
        }}
      >
        <ExchangeField
          type="deposit"
          placeholder="have"
          value={this.state.depositValue}
          chosenCurrency={this.state.depositCurrency}
          currencies={this.state.depositCurrencies}
          onChangeValue={this.depositValueChanged}
          onChangeCurrency={this.currencyChanged}
        />

        <Icon
          name="exchange"
          size="big"
          color="yellow"
          style={{ margin: '0 1rem', marginBottom: '0.6rem' }}
        />

        <ExchangeField
          type="receive"
          placeholder="get"
          value={this.state.receiveValue}
          chosenCurrency={this.state.receiveCurrency}
          currencies={this.state.receiveCurrencies}
          onChangeCurrency={this.currencyChanged}
        />

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
          onClick={() =>
            this.props.authenticated
              ? Alert('Elon has not built an exchange function yet')
              : Alert(
                  'Who are you?',
                  'Please make sure you are logged in before exchanging.',
                  'question'
                )
          }
        />
      </Container>
    )
  }
}
