import React, { Component } from 'react'
import * as exchangeRates from '../ExchangeRates'
import { Container, Button, Icon } from 'semantic-ui-react'
import ExchangeField from '../Exchange/ExchangeField'
import Alert from 'sweetalert2'

export default class extends Component {
  state = {
    youGive: '',
    youGet: '',
    ILStoBTC: ''
  }

  componentDidMount = async () => {
    const rates = await exchangeRates.getRates()
    const ILStoBTC = 1 / rates[0].price_ils
    this.setState({ ILStoBTC })
  }

  handleExchangeFromILStoBTC = event => {
    const { ILStoBTC } = this.state
    const give = event.target.value
    const get = give * ILStoBTC
    const displayGet = get
      .toString()
      .substring(0, get.toString().indexOf('.') + 7)

    this.setState({
      youGive: give,
      youGet: displayGet || 0
    })
  }
  handleExchangeFromBTCtoILS = event => {
    const BTCtoILS = 1 / this.state.ILStoBTC
    const get = event.target.value
    const give = get * BTCtoILS
    const displayGive = give
      .toString()
      .substring(0, give.toString().indexOf('.') + 6)

    this.setState({
      youGive: displayGive,
      youGet: get || 0
    })
  }

  render() {
    return (
      <Container style={{ paddingTop: '2em' }}>
        <ExchangeField
          placeholder="Deposit"
          value={this.state.youGive}
          onChange={this.handleExchangeFromILStoBTC}
          content="ILS"
          icon="shekel"
          style={{
            marginRight: '0.5em',
            opacity: 0.95
          }}
        />

        <Icon
          name="exchange"
          size="big"
          color="yellow"
          style={{ marginBottom: 10 }}
        />
        <ExchangeField
          placeholder="Recieve"
          value={this.state.youGet}
          onChange={this.handleExchangeFromBTCtoILS}
          content="BTC"
          icon="bitcoin"
          style={{
            marginLeft: '0.5em',
            marginRight: '1em',
            opacity: 0.95
          }}
        />

        <Button
          labelPosition="right"
          content="Exchange"
          icon="right arrow"
          size="huge"
          style={{
            paddingTop: '0.9em',
            paddingBottom: '0.9em',
            color: 'white',
            backgroundColor: '#faa61a'
          }}
          onClick={() =>
            this.props.authenticated
              ? Alert('Elon has not built an exchange function yet')
              : Alert(
                  'Who are you?',
                  'Please make sure you are logged in before exchanging.',
                  'question'
                )
          }
        />
      </Container>
    )
  }
}
