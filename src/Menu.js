import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
export default () => {
  return (
    <Container>
      <Menu inverted pointing secondary size="large">
        <Menu.Item as="a" active>
          Exchange
        </Menu.Item>
        <Menu.Item as="a">Elon</Menu.Item>
        <Menu.Item as="a">Elay</Menu.Item>
        <Menu.Item as="a">Gliksberg</Menu.Item>
        <Menu.Item position="right">
          <Button as="a" inverted>
            Log in
          </Button>
          <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
