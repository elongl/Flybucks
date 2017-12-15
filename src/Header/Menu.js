import React, { Component } from 'react'
import { Menu, Container, Modal } from 'semantic-ui-react'
import MenuButton from '../Menu/MenuButton'
import SignupModal from '../Menu/SignupModal'
import SigninModal from '../Menu/SigninModal'
import firebase from '../Firebase'
import Alert from 'sweetalert2'
import UserDropDown from '../Menu/UserDropDown'

// Props:
// authenticated
export default class extends Component {
  state = {
    displaySignupModal: false,
    displaySigninModal: false
  }

  switchModal = () => {
    this.setState(prevState => ({
      displaySigninModal: !prevState.displaySigninModal,
      displaySignupModal: !prevState.displaySignupModal
    }))
  }
  hideModals = () => {
    if (this.state.displaySigninModal)
      this.setState({ displaySigninModal: false })
    else if (this.state.displaySignupModal)
      this.setState({ displaySignupModal: false })
  }
  render() {
    const signinModal = this.state.displaySigninModal && (
      <SigninModal switch={this.switchModal} hide={this.hideModals} />
    )
    const signupModal = this.state.displaySignupModal && (
      <SignupModal switch={this.switchModal} hide={this.hideModals} />
    )
    const authenticationButtons = this.props.authenticated ? (
      <Menu.Item position="right">
        <UserDropDown displayName={firebase.getCurrentUser().displayName} />
        <MenuButton
          content="Log Out"
          style={{ marginLeft: '0.5em' }}
          onClick={() => {
            Alert({
              title: 'Are you sure?',
              text: 'You will be logged out.',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Log out!'
            }).then(result => {
              if (result.value) firebase.signOut()
            })
          }}
        />
      </Menu.Item>
    ) : (
      <Menu.Item position="right">
        <MenuButton
          content="Log In"
          onClick={() => this.setState({ displaySigninModal: true })}
        />
        <MenuButton
          content="Sign Up"
          style={{ marginLeft: '0.5em' }}
          onClick={() => this.setState({ displaySignupModal: true })}
        />
      </Menu.Item>
    )
    const routerButtons = [
      { active: true, content: 'Exchange' },
      { content: 'Market' },
      { content: 'Tools' }
    ].map(({ content, active }) => (
      <Menu.Item as="a" content={content} key={content} active={active} />
    ))
    return (
      <Container>
        <Modal
          open={this.state.displaySignupModal || this.state.displaySigninModal}
          onClose={this.hideModals}
        >
          {signinModal}
          {signupModal}
        </Modal>
        <Menu inverted secondary size="huge">
          {routerButtons}
          {authenticationButtons}
        </Menu>
      </Container>
    )
  }
}
