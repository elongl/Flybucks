import React, { Component } from 'react'
import { Menu, Container, Button, Modal } from 'semantic-ui-react'
import Signup from './Signup'
import Login from './Login'
export default class extends Component {
  state = {
    showSignup: false,
    showLogin: false
  }
  switchModal = () => {
    this.setState(prevState => ({
      showLogin: !prevState.showLogin,
      showSignup: !prevState.showSignup
    }))
  }
  render() {
    return (
      <Container>
        <Modal
          open={this.state.showSignup || this.state.showLogin}
          onClose={() => this.setState({ showSignup: false, showLogin: false })}
        >
          {this.state.showSignup && <Signup switch={this.switchModal} />}
          {this.state.showLogin && <Login switch={this.switchModal} />}
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
              onClick={() => this.setState({ showLogin: true })}
            >
              Log in
            </Button>
            <Button
              as="a"
              inverted
              style={{ marginLeft: '0.5em' }}
              onClick={() => this.setState({ showSignup: true })}
            >
              Sign Up
            </Button>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
