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
    const { authenticated } = this.state
    if (authenticated === undefined) return null
    return (
      <div>
        <Menu authenticated={authenticated} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home authenticated={authenticated} />}
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
