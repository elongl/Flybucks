import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from '../api/firebase'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import SignIn from './components/user/SignIn'
import SignUp from './components/user/SignUp'
import '../injectGlobal'

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
