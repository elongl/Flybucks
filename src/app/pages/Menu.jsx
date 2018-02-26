import React, { Component } from 'react'
import { Menu, Container, Visibility, Button } from 'semantic-ui-react'
import Alert from 'sweetalert2'
import { withRouter } from 'react-router-dom'
import firebase from '../../api/firebase'
import MenuButton from '../components/menu/MenuButton'
import UserDropDown from '../components/menu/UserDropDown'
import FloatingButtons from '../components/menu/FloatingButtons'

export default withRouter(
  class extends Component {
    state = { floatingButtonsVisible: false }

    toggleFloatingButtons = toggle =>
      this.setState({ floatingButtonsVisible: toggle })

    render() {
      const { floatingButtonsVisible } = this.state

      const { authenticated } = this.props
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
          <Button
            inverted
            onClick={() => this.props.history.push('/signin')}
            content="Log In"
          />

          <Button
            inverted
            style={{ marginLeft: '0.5em' }}
            onClick={() => this.props.history.push('/signup')}
            content="Sign Up"
          />
        </Menu.Item>
      )
      const routerButtons = [
        { content: 'Exchange', link: '/' },
        { content: 'Charts', link: '/charts' },
        { content: 'Affiliate', link: '/affiliate' }
      ].map(({ content, link }) => (
        <Menu.Item
          key={content}
          onClick={() => this.props.history.push(link)}
          active={window.location.pathname === link}
          content={content}
        />
      ))

      const floatingButtons = floatingButtonsVisible && (
        <FloatingButtons authenticated={authenticated} />
      )

      return (
        <Container
          style={{
            zIndex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: '0.75em'
          }}
        >
          {floatingButtons}
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
)
