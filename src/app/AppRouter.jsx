import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from '../api/firebase'
import Menu from './pages/Menu'
import Footer from './pages/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import '../InjectGlobal'

export default class extends Component {
  state = { authenticated: undefined }
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
        <Menu authenticated={this.state.authenticated} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home authenticated={this.state.authenticated} />}
          />
          <Route path="/login" render={() => <Redirect to="signin" />} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
