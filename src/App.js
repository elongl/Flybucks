import React, { Component } from 'react'
import Header from './Header'
import Info from './Info'
import firebase from './Firebase'
export default class extends Component {
  state = { authenticated: undefined }
  componentDidMount = () => {
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
        <Info />
      </div>
    )
  }
}
