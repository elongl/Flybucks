import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from '../api/firebase'
import Menu from './pages/Menu'
import Footer from './pages/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Exchanging from './pages/Exchanging'
import Authenticate from './pages/Authenticate'
import * as exchangeRates from '../api/exchangeRates'
import { digitsAfterDot } from './pureFunctions'
import '../injectGlobal'

firebase.initializeApp()
export default class extends Component {
  state = {
    authenticated: undefined,
    rate: undefined,
    currencyList: {
      deposit: undefined,
      receive: undefined
    },
    deposit: {
      value: '...',
      currency: undefined
    },
    receive: {
      value: '...',
      currency: undefined
    }
  }
  componentDidMount = async () => {
    firebase.authenticationState(
      () => this.setState({ authenticated: true }),
      () => this.setState({ authenticated: false })
    )
    await this.setCurrencies()
    await this.updateRate()
  }

  changeValue = (depositValue, receiveValue) => {
    if (depositValue)
      this.setState({ deposit: { ...this.state.deposit, value: depositValue } })
    if (receiveValue)
      this.setState({ receive: { ...this.state.receive, value: receiveValue } })
  }

  changeCurrency = (currencyType, currencyObject) => {
    this.setState(
      {
        receive: { ...this.state.receive, value: '...' },
        [currencyType]: {
          ...this.state[currencyType],
          currency: currencyObject
        }
      },
      async () => {
        await this.updateRate()
        this.setState({
          receive: {
            ...this.state.receive,
            value: digitsAfterDot(this.state.deposit.value / this.state.rate, 6)
          }
        })
      }
    )
  }

  updateRate = async () => {
    const depositCurrency = this.state.deposit.currency
    const receiveCurrency = this.state.receive.currency
    const rate = await exchangeRates.getRate(
      receiveCurrency.value,
      depositCurrency.key
    )
    this.setState({ rate: rate[`price_${depositCurrency.key.toLowerCase()}`] })
  }

  setCurrencies = async () => {
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
      currencyList: {
        deposit: depositCurrencies,
        receive: receiveCurrencies
      },
      deposit: { value: '', currency: depositCurrencies[0] },
      receive: { value: '', currency: receiveCurrencies[0] }
    })
  }

  render() {
    const { authenticated } = this.state
    console.log(this.state)
    if (authenticated === undefined) return null
    return (
      <div>
        <Menu authenticated={authenticated} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                state={this.state}
                changeValue={this.changeValue}
                changeCurrency={this.changeCurrency}
              />
            )}
          />
          <Route path="/login" render={() => <Redirect to="/signin" />} />
          <Route
            path="/exchange"
            render={() => (authenticated ? <Exchanging /> : <Authenticate />)}
          />
          <Route
            path="/signin"
            render={() => (authenticated ? <Redirect to="/" /> : <SignIn />)}
          />
          <Route
            path="/signup"
            render={() => (authenticated ? <Redirect to="/" /> : <SignUp />)}
          />
        </Switch>
        <Footer />
      </div>
    )
  }
}
