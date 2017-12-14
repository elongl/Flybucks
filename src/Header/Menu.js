import React, { Component } from 'react'
import { Menu, Container, Modal } from 'semantic-ui-react'
import MenuButton from '../Menu/MenuButton'
import SignupModal from '../Menu/SignupModal'
import SigninModal from '../Menu/SigninModal'
import firebase from '../Firebase'

// Props:
// authenticated
export default class extends Component {
  state = {
    displaySignupModal: false,
    displayLoginModal: false
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
    const loginModal = this.state.displayLoginModal && (
      <SigninModal switch={this.switchModal} hide={this.hideModals} />
    )
    const signupModal = this.state.displaySignupModal && (
      <SignupModal switch={this.switchModal} hide={this.hideModals} />
    )
    const authenticationButton = this.props.authenticated ? (
      <Menu.Item position="right">
        <MenuButton content="Profile" />
        <MenuButton
          content="Log Out"
          style={{ marginLeft: '0.5em' }}
          onClick={() => firebase.signOut()}
        />
      </Menu.Item>
    ) : (
      <Menu.Item position="right">
        <MenuButton
          content="Log In"
          onClick={() => this.setState({ displayLoginModal: true })}
        />
        <MenuButton
          content="Sign Up"
          style={{ marginLeft: '0.5em' }}
          onClick={() => this.setState({ displaySignupModal: true })}
        />
      </Menu.Item>
    )

    return (
      <Container>
        <Modal
          open={this.state.displaySignupModal || this.state.displayLoginModal}
          onClose={this.hideModals}
        >
          {loginModal}
          {signupModal}
        </Modal>

        <Menu inverted secondary size="large">
          <Menu.Item as="a" active>
            Exchange
          </Menu.Item>
          <Menu.Item as="a">Market</Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          {authenticationButton}
        </Menu>
      </Container>
    )
  }
}
