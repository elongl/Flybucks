import React, { Component } from 'react'
import * as exchangeRates from '../ExchangeRates'
import { Segment, Loader, Dimmer, Icon, Transition } from 'semantic-ui-react'

export default class extends Component {
  state = {
    rates: undefined,
    visible: true
  }
  componentDidMount = async () => {
    this.setState({ rates: await exchangeRates.getRates() })
    console.log(this.state.rates)
    this.handleVisibleRates()
  }
  handleVisibleRates = () => {
    setInterval(() => {
      this.setState({ visible: false })
      setTimeout(() => this.rotateRates(), 1000)
    }, 8000)
  }

  rotateRates = () => {
    const rates = this.state.rates.slice()
    for (let i = 0; i < 6; i++) {
      const current = rates.shift()
      rates.push(current)
    }
    this.setState({ rates }, () => this.setState({ visible: true }))
  }

  render() {
    console.log(this.state.rates)
    const currencies = this.state.rates ? (
      this.state.rates
        .slice(0, 6)
        .map(rate => (
          <Currency key={rate.name} rate={rate} visible={this.state.visible} />
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
const Currency = ({ rate, visible }) => {
  const color = rate.percent_change_24h > 0 ? 'green' : 'red'
  const icon = rate.percent_change_24h > 0 ? 'up arrow' : 'down arrow'
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
            {rate.symbol} <Icon name={icon} color={color} />{' '}
          </h2>
          <h3 style={{ margin: 0 }}>
            {digitsAfterPoint(rate.percent_change_24h, 2)}%
          </h3>
        </div>
        <h3 style={{ margin: 0 }}>{digitsAfterPoint(rate.price_ils, 2)} ILS</h3>
        <h4 style={{ margin: 0 }}>Ranking: {rate.rank}</h4>
      </div>
    </Transition>
  )
}

const digitsAfterPoint = (number, digitsAfterPoint) =>
  number.substring(0, number.indexOf('.') + digitsAfterPoint + 1)
