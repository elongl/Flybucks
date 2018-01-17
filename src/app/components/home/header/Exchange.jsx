import React, { Component } from 'react'
import { Icon, Button } from 'semantic-ui-react'
import Alert from 'sweetalert2'
import * as exchangeRates from '../../../../api/exchangeRates'
import ExchangeField from './exchange/ExchangeField'
import { withRouter } from 'react-router-dom'
import Transition from 'semantic-ui-react/dist/commonjs/modules/Transition/Transition'

const digitsAfterDot = (numString, digitsAfterDot) =>
  !numString.toString().includes('.')
    ? numString
    : numString
        .toString()
        .substring(0, numString.toString().indexOf('.') + digitsAfterDot + 1)

export default withRouter(
  class extends Component {
    constructor(props) {
      super(props)
      if (props.loadedFromExchanging) this.state = props.state
      else
        this.state = {
          depositValue: '...',
          depositCurrency: undefined,
          depositCurrencies: undefined,
          receiveValue: '...',
          receiveCurrency: undefined,
          receiveCurrencies: undefined,
          rate: undefined,
          animVisible: true
        }
    }

    componentDidMount = async () => {
      if (this.props.location.pathname === '/') {
        await this.setOptions()
        await this.updateRate()
      }
    }
    depositValueChanged = event => {
      const { value } = event.target
      const validator = /^\d*\.?\d*$/
      if (validator.test(value) && value !== '.')
        this.setState({
          depositValue: value,
          receiveValue: digitsAfterDot(value / this.state.rate, 6)
        })
    }
    currencyChanged = (currencyObject, type) => {
      this.setState({ receiveValue: '...' })
      this.setState({ [`${type}Currency`]: currencyObject }, () =>
        this.updateRate().then(() =>
          this.setState({
            receiveValue: digitsAfterDot(
              this.state.depositValue / this.state.rate,
              6
            )
          })
        )
      )
    }

    updateRate = async () => {
      try {
        const { receiveCurrency, depositCurrency } = this.state
        const rate = await exchangeRates.getRate(
          receiveCurrency.value,
          depositCurrency.key
        )
        this.setState({
          rate: rate[`price_${depositCurrency.key.toLowerCase()}`]
        })
      } catch (err) {
        Alert(err.message)
      }
      if (this.props.loadedFromExchanging)
        this.props.updateRate(this.state.rate)
    }

    setOptions = async () => {
      const currencies = [{ key: 'ILS', text: 'ILS', value: 'shekel' }]
      const rates = await exchangeRates.getRatesLimit(16)
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

    gotoExchanging = () => {
      this.setState({ animVisible: false }, () =>
        setTimeout(
          () =>
            this.props.history.push('/exchange', {
              ...this.state,
              animVisible: undefined
            }),
          500
        )
      )
    }

    render() {
      return (
        <Transition
          visible={this.state.animVisible}
          animation="fly left"
          duration={800}
        >
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
              style={this.props.style}
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
              style={{ margin: '0rem 1rem', marginBottom: '0.5rem' }}
            />

            <ExchangeField
              type="receive"
              style={this.props.style}
              value={this.state.receiveValue}
              chosenCurrency={this.state.receiveCurrency}
              currencies={this.state.receiveCurrencies}
              onChangeCurrency={this.currencyChanged}
            />
            {!this.props.loadedFromExchanging && (
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
                onClick={this.gotoExchanging}
              />
            )}
          </div>
        </Transition>
      )
    }
  }
)
