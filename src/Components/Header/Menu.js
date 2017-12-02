import React, { Component } from 'react'
import { Menu, Container, Button, Modal } from 'semantic-ui-react'
import Login from './Login'
export default class extends Component {
  state = { showLogin: false }
  render() {
    return (
      <Container>
        <Modal
          dimmer="blurring"
          open={this.state.showLogin}
          onClose={() => this.setState({ showLogin: false })}
        >
          <Login />
        </Modal>

        <Menu inverted borderless secondary size="large">
          <Menu.Item as="a" active>
            Exchange
          </Menu.Item>
          <Menu.Item as="a">Market</Menu.Item>
          <Menu.Item as="a">About Us</Menu.Item>
          <Menu.Item position="right">
            <Button as="a" inverted>
              Log in
            </Button>
            <Button
              as="a"
              inverted
              style={{ marginLeft: '0.5em' }}
              onClick={() => this.setState({ showLogin: true })}
            >
              Sign Up
            </Button>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
