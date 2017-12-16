import React, { Component } from 'react'
import Header from './App/Header'
import Information from './App/Information'
import Reviews from './App/Reviews'
import Novelty from './App/Novelty'
import Footer from './App/Footer'
import firebase from './Firebase'
import { Button } from 'semantic-ui-react'
import FloatingButton from './App/FloatingButton'
import './InjectGlobal'

export default class extends Component {
  state = { authenticated: undefined, headerVisible: true }
  componentDidMount = () => {
    firebase.initializeApp()
    firebase.authenticationState(
      () => this.setState({ authenticated: true }),
      () => this.setState({ authenticated: false })
    )
  }
  headerIsShown = () => {
    this.setState({ headerVisible: true })
  }
  headerIsHidden = () => {
    this.setState({ headerVisible: false })
  }
  render() {
    if (this.state.authenticated === undefined) return null
    return (
      <div>
        <Header
          authenticated={this.state.authenticated}
          headerIsShown={this.headerIsShown}
          headerIsHidden={this.headerIsHidden}
        />
        <Information />
        <Reviews />
        <Novelty />
        <Footer />
        {!this.state.headerVisible && <FloatingButton />}
      </div>
    )
  }
}
