import React, { Component } from 'react'
import { Menu, Container, Modal, Visibility } from 'semantic-ui-react'
import MenuButton from '../Menu/MenuButton'
import SignupModal from '../Menu/SignupModal'
import SigninModal from '../Menu/SigninModal'
import firebase from '../Firebase'
import Alert from 'sweetalert2'
import UserDropDown from '../Menu/UserDropDown'
import FloatingButtons from '../Menu/FloatingButtons'
export default class extends Component {
  state = {
    showSignupModal: false,
    showSigninModal: false,
    floatingButtonsVisible: false
  }

  toggleSignupModal = toggle => this.setState({ showSignupModal: toggle })
  toggleSigninModal = toggle => this.setState({ showSigninModal: toggle })
  toggleFloatingButtons = toggle =>
    this.setState({ floatingButtonsVisible: toggle })

  switchModal = () => {
    this.setState(prevState => ({
      showSigninModal: !prevState.showSigninModal,
      showSignupModal: !prevState.showSignupModal
    }))
  }
  hideModals = () => {
    if (this.state.showSigninModal) this.toggleSigninModal(false)
    else if (this.state.showSignupModal) this.toggleSignupModal(false)
  }
  render() {
    const {
      showSigninModal,
      showSignupModal,
      floatingButtonsVisible
    } = this.state

    const { authenticated } = this.props

    const signinModal = showSigninModal && (
      <SigninModal switch={this.switchModal} hide={this.hideModals} />
    )
    const signupModal = showSignupModal && (
      <SignupModal switch={this.switchModal} hide={this.hideModals} />
    )
    const authenticationButtons = authenticated ? (
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
          onClick={() => this.toggleSigninModal(true)}
        />
        <MenuButton
          content="Sign Up"
          style={{ marginLeft: '0.5em' }}
          onClick={() => this.toggleSignupModal(true)}
        />
      </Menu.Item>
    )
    const routerButtons = [
      { active: true, content: 'Exchange' },
      { content: 'Charts' },
      { content: 'Affiliate' }
    ].map(({ content, active }) => (
      <Menu.Item
        as="a"
        content={content}
        key={content}
        active={active}
        header={active}
      />
    ))

    const floatingButtons = floatingButtonsVisible && (
      <FloatingButtons
        authenticated={authenticated}
        toggleSigninModal={this.toggleSigninModal}
        toggleSignupModal={this.toggleSignupModal}
      />
    )

    return (
      <Container>
        {floatingButtons}
        <Modal
          open={this.state.showSignupModal || this.state.showSigninModal}
          onClose={this.hideModals}
        >
          {signinModal}
          {signupModal}
        </Modal>

        <Visibility
          onBottomPassed={() => this.toggleFloatingButtons(true)}
          onBottomVisible={() => this.toggleFloatingButtons(false)}
          once={false}
        >
          <Menu inverted secondary size="huge">
            {routerButtons}
            {authenticationButtons}
          </Menu>
        </Visibility>
      </Container>
    )
  }
}
