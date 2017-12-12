import React, { Component } from 'react'
import { Menu, Container, Button, Modal } from 'semantic-ui-react'
import Signup from './Signup'
import Login from './Login'
import firebase from '../Firebase'
export default class extends Component {
  state = {
    displaySignupModal: false,
    displayLoginModal: false,
    userSignedIn: false
  }
  componentDidMount = () => {
    console.log(firebase.isLoggedIn())
  }
  switchModal = () => {
    this.setState(prevState => ({
      displayLoginModal: !prevState.displayLoginModal,
      displaySignupModal: !prevState.displaySignupModal
    }))
  }
  hideModals = () => {
    if (this.state.displayLoginModal)
      this.setState({ displayLoginModal: false })
    else if (this.state.displaySignupModal)
      this.setState({ displaySignupModal: false })
  }
  render() {
    const login = this.state.displayLoginModal && (
      <Login switch={this.switchModal} hide={this.hideModals} />
    )
    const signup = this.state.displaySignupModal && (
      <Signup switch={this.switchModal} hide={this.hideModals} />
    )
    return (
      <Container>
        <Modal
          open={this.state.displaySignupModal || this.state.displayLoginModal}
          onClose={this.hideModals}
        >
          {login}
          {signup}
        </Modal>
        <Menu inverted borderless secondary size="large">
          <Menu.Item as="a" active>
            Exchange
          </Menu.Item>
          <Menu.Item as="a">Market</Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item position="right">
            <Button
              as="a"
              inverted
              content="Log In"
              onClick={() => this.setState({ displayLoginModal: true })}
            />
            <Button
              as="a"
              inverted
              content="Sign Up"
              style={{ marginLeft: '0.5em' }}
              onClick={() => this.setState({ displaySignupModal: true })}
            />
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
