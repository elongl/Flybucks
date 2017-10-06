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
import axios from 'axios'

export default class App extends Component {
  state = {
    youHave: '',
    youGet: '',
    ILStoBTC: ''
  }

  componentDidMount() {
    axios
      .get(
        'http://www.apilayer.net/api/live?access_key=acafc0bb45eef112ab535b81dfc1116b'
      )
      .then(({ data }) =>
        this.setState({ ILStoBTC: 1 / data.quotes.USDILS * data.quotes.USDBTC })
      )
    this.youHave.focus()
  }

  handleExchangeChange = event => {
    const { ILStoBTC } = this.state
    const have = event.target.value
    const get = event.target.value * ILStoBTC
    this.setState({ youHave: have, youGet: get })
  }
  checkIfNumber = event => {
    if (!(event.charCode >= 48 && event.charCode <= 57)) event.preventDefault()
  }

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
              value={this.state.youHave}
              ref={ref => (this.youHave = ref)}
              onChange={this.handleExchangeChange}
              onKeyPress={this.checkIfNumber}
            >
              <Label basic>
                <Icon name="shekel" />
              </Label>
              <input />
              <Label>.00</Label>
            </Input>

            <Icon name="exchange" size="big" />

            <Input
              disabled
              labelPosition="right"
              type="text"
              placeholder="You Get"
              size="huge"
              style={{ marginLeft: '0.5em', marginRight: '1em' }}
              value={this.state.youGet}
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
              onClick={() => window.alert(this.state.ILStoBTC)}
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
