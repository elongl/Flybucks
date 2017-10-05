import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Input,
  Label
} from 'semantic-ui-react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
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

          <Container text>
            <Header
              as="h1"
              content="Time to Evolve Cryptocurrencies"
              inverted
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginTop: '3em'
              }}
            />
            <Header
              as="h2"
              content="The world's local currency within your reach."
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
          </Container>

          <Container style={{ paddingTop: '2em' }}>
            <Input
              labelPosition="right"
              type="text"
              placeholder="You Have"
              size="huge"
              style={{ marginRight: '0.5em' }}
            >
              <Label basic>
                <Icon name="dollar" />
              </Label>
              <input />
              <Label>.00</Label>
            </Input>

            <Icon name="exchange" size="big" />

            <Input
              labelPosition="right"
              type="text"
              placeholder="You Get"
              size="huge"
              style={{ marginLeft: '0.5em', marginRight: '1em' }}
            >
              <Label basic>
                <Icon name="bitcoin" />
              </Label>
              <input />
              <Label>.00</Label>
            </Input>
            <Button
              color="green"
              size="huge"
              style={{ paddingTop: '0.9em', paddingBottom: '0.9em' }}
            >
              Exchange
              <Icon name="right arrow" />
            </Button>
          </Container>
        </Segment>
      </div>
    )
  }
}
