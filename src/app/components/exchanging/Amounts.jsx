import React from 'react'
import Exchange from '../../components/home/header/Exchange'
import CurrencyStats from '../../components/exchanging/amounts/CurrencyStats'
import NextButton from '../../components/exchanging/NextButton'
import Alert from 'sweetalert2'
import { observer } from 'mobx-react'
import store from '../../../store'
import { Message } from 'semantic-ui-react'

export default observer(({ pushStage }) => (
  <div>
    <CurrencyStats />
    <div
      style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}
    >
      <Exchange
        loadedFromExchanging
        style={{ boxShadow: '3px 3px 5px 6px #ccc' }}
      />
      <NextButton
        pushStage={() =>
          store.deposit.value !== ''
            ? pushStage()
            : Alert('Please enter deposit value.')
        }
      />
    </div>
    <Message>
      PLEASE NOTE: Bitcoin and Ethereum networks are heavily overloaded.
      Transactions processing may take time.
    </Message>
  </div>
))
