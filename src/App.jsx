import React, { Component } from 'react'
import Header from './App/Header'
import Information from './App/Information'
import Reviews from './App/Reviews'
import CryptoRates from './App/CryptoRates'
import Novelty from './App/Novelty'
import Footer from './App/Footer'
import firebase from './Firebase'
import './InjectGlobal'

export default class extends Component {
  state = {
    authenticated: undefined
  }
  componentDidMount = async () => {
    firebase.initializeApp()
    firebase.authenticationState(
      () => this.setState({ authenticated: true }),
      () => this.setState({ authenticated: false })
    )
  }
  render() {
    if (this.state.authenticated === undefined) return null
    return (
      <div>
        <Header authenticated={this.state.authenticated} />
        <CryptoRates />
        <Information />
        <Reviews />
        <Novelty />
        <Footer />
      </div>
    )
  }
}
