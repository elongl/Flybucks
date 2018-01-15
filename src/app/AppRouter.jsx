import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from '../api/firebase'
import Menu from './pages/Menu'
import Footer from './pages/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AlreadyAuthenticated from './components/user/AlreadyAuthenticated'
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
            path="/signin"
            render={() =>
              authenticated ? <AlreadyAuthenticated /> : <SignIn />
            }
          />
          <Route
            path="/signup"
            render={() =>
              authenticated ? <AlreadyAuthenticated /> : <SignUp />
            }
          />
        </Switch>
        <Footer />
      </div>
    )
  }
}
