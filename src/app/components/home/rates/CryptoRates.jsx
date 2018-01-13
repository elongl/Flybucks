import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import * as exchangeRates from '../../../api/exchangeRates'
import Loader from '../common/Loader'
import Currency from './Currency'

export default class extends Component {
  state = {
    rates: undefined,
    visible: true
  }
  componentDidMount = async () => {
    this.setState({ rates: await exchangeRates.getRatesLimit(18) })
    this.rotateRatesInterval()
  }
  componentWillUnmount = () => clearInterval(this.ticker)
  rotateRatesInterval = () => {
    this.ticker = setInterval(() => {
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
    const { state } = this
    const currencies = state.rates ? (
      state.rates
        .slice(0, 6)
        .map(rate => (
          <Currency key={rate.name} rate={rate} visible={state.visible} />
        ))
    ) : (
      <Loader />
    )
    return (
      <Segment
        vertical
        inverted
        style={{
          zIndex: -1,
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
