import React, { Component } from 'react'
import Exchange from '../../components/home/header/Exchange'
import CurrencyStats from '../../components/exchanging/amounts/CurrencyStats'
import NextButton from '../../components/exchanging/NextButton'
import Alert from 'sweetalert2'
import { observer } from 'mobx-react'
import store from '../../../store'
import * as exchangeAPI from '../../../api/exchangeAPI'
import { Message } from 'semantic-ui-react'
import Loader from '../common/Loader'

@observer
export default class extends Component {
  state = { loading: false }
  render() {
    return (
      <div>
        <CurrencyStats />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2.5rem'
          }}
        >
          <Exchange
            loadedFromExchanging
            style={{ boxShadow: '3px 3px 5px 6px #ccc' }}
          />
          <NextButton
            pushStage={async () => {
              this.setState({ loading: true })
              const { result: minAmount } = await exchangeAPI.getMinAmount(
                store.deposit.currency.symbol,
                store.receive.currency.symbol
              )
              if (store.deposit.value < minAmount) {
                Alert('You have to deposit at least', minAmount)
                this.setState({ loading: false })
                return
              }
              this.props.pushStage()
            }}
          />
        </div>
        {this.state.loading && <Loader />}
        <Message>
          PLEASE NOTE: Bitcoin and Ethereum networks are heavily overloaded.
          Transactions processing may take time.
        </Message>
      </div>
    )
  }
}
