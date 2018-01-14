import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from '../api/firebase'
import Menu from './containers/Menu'
import Footer from './containers/Footer'
import Home from './containers/Home'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
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
