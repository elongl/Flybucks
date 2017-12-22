import React, { Component } from 'react'
import * as exchangeRates from '../ExchangeRates'
import { Segment } from 'semantic-ui-react'
import Loader from '../Components/Loader'
import Currency from '../CryptoRates/Currency'

export default class extends Component {
  state = {
    rates: undefined,
    visible: true
  }
  componentDidMount = async () => {
    this.setState({ rates: await exchangeRates.getRates() })
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
    const currencies = this.state.rates ? (
      this.state.rates
        .slice(0, 6)
        .map(rate => (
          <Currency key={rate.name} rate={rate} visible={this.state.visible} />
        ))
    ) : (
      <Loader />
    )
    return (
      <Segment
        vertical
        inverted
        style={{
          minHeight: '12rem',
          backgroundColor: '#0d141d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        {currencies}
      </Segment>
    )
  }
}
