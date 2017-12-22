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
    depositValue: '',
    depositCurrency: undefined,
    receiveValue: '',
    receiveCurrency: undefined,
    rate: undefined,
    currencies: undefined
  }
  componentDidMount = async () => {
    await this.setOptions()
    this.setState(
      {
        depositCurrency: this.state.currencies.find(
          currency => currency.key === 'ILS'
        ),
        receiveCurrency: this.state.currencies.find(
          currency => currency.key === 'BTC'
        )
      },
      async () => await this.updateRate()
    )
  }
  depositValueChanged = event => {
    this.setState({
      depositValue: event.target.value,
      receiveValue: digitsAfterDot(event.target.value / this.state.rate, 5)
    })
  }
  depositCurrencyChanged = currencyObject => {
    this.setState({ receiveValue: '...' })
    this.setState({ depositCurrency: currencyObject }, () =>
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

  receiveCurrencyChanged = currencyObject => {
    this.setState({ receiveValue: '...' })
    this.setState({ receiveCurrency: currencyObject }, () =>
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
    const rates = await exchangeRates.getRates()
    const currencies = [{ key: 'ILS', text: 'ILS', value: 'shekel' }]
    rates.map(rate =>
      currencies.push({
        key: rate.symbol,
        text: rate.symbol,
        value: rate.id
      })
    )
    this.setState({ currencies })
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
          placeholder="have"
          value={this.state.depositValue}
          currencies={this.state.currencies}
          onChangeValue={this.depositValueChanged}
          onChangeCurrency={this.depositCurrencyChanged}
          defaultCurrency="shekel"
        />

        <Icon
          name="exchange"
          size="big"
          color="yellow"
          onClick={() => {
            this.setState({
              receiveCurrency: this.state.depositCurrency,
              depositCurrency: this.state.receiveCurrency
            })
          }}
          style={{
            margin: '0 1rem',
            marginBottom: '0.5rem',
            cursor: 'pointer'
          }}
        />
        <ExchangeField
          disabled
          placeholder="get"
          value={this.state.receiveValue}
          currencies={this.state.currencies}
          onChangeCurrency={this.receiveCurrencyChanged}
          defaultCurrency="bitcoin"
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
