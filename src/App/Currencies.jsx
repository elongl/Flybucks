import React, { Component } from 'react'
import * as exchangeRates from '../ExchangeRates'
import { Segment, Loader, Dimmer, Icon, Transition } from 'semantic-ui-react'

export default class extends Component {
  state = {
    rates: undefined,
    visible: true
  }
  componentDidMount = async () => {
    this.setState({ rates: await exchangeRates.getTickers() })
    this.handleVisibleRates()
  }
  handleVisibleRates = () => {
    setInterval(() => {
      this.setState({ visible: false })
      setTimeout(() => {
        this.rotateRates()
        this.setState({ visible: true })
      }, 1000)
    }, 8000)
  }

  rotateRates = () => {
    const rates = this.state.rates.slice()
    for (let i = 0; i < 6; i++) {
      const current = rates.shift()
      rates.push(current)
    }
    this.setState({ rates })
  }

  render() {
    const currencies = this.state.rates ? (
      this.state.rates
        .slice(0, 6)
        .map(ticker => (
          <Currency
            key={ticker.base}
            ticker={ticker}
            visible={this.state.visible}
          />
        ))
    ) : (
      <Loading />
    )
    return (
      <Segment
        vertical
        inverted
        style={{
          backgroundColor: '#0d141d',
          minHeight: '11rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        {currencies}
      </Segment>
    )
  }
}
const Loading = () => (
  <Dimmer active>
    <Loader />
  </Dimmer>
)
const Currency = ({ ticker, visible }) => {
  const color = ticker.change > 0 ? 'green' : 'red'
  const icon = ticker.change > 0 ? 'up arrow' : 'down arrow'
  return (
    <Transition visible={visible} animation="fade down" duration={500}>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <h2 style={{ margin: 0 }}>
            {ticker.base} <Icon name={icon} color={color} />{' '}
          </h2>
          <h3 style={{ margin: 0 }}>
            {digitsAfterPoint(
              ticker.price / (ticker.price - ticker.change) * 100 - 100,
              2
            )}%
          </h3>
        </div>
        <h3 style={{ margin: 0 }}>
          {digitsAfterPoint(ticker.price, 2)} <Icon name="shekel" />
        </h3>
        <h4 style={{ margin: 0 }}>
          Volume: {digitsAfterPoint(ticker.volume || 0, 2)}
        </h4>
      </div>
    </Transition>
  )
}

const digitsAfterPoint = (number, digitsAfterPoint) =>
  number
    .toString()
    .substring(0, number.toString().indexOf('.') + digitsAfterPoint + 1)
