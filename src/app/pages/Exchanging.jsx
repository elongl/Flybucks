import React from 'react'
import { Segment, Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import Exchange from '../components/home/header/Exchange'
import Process from '../components/exchanging/Process'
import CurrencyStats from '../components/exchanging/amounts/CurrencyStats'
import NextButton from '../components/exchanging/amounts/NextButton'

export default withRouter(({ history, authenticated }) => {
  let rate = history.location.state.rate
  console.log(rate)
  const updateRate = newRate => (rate = newRate)
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Segment
        vertical
        style={{ backgroundColor: '#0d141d', height: '5rem' }}
      />
      <Segment
        vertical
        style={{
          height: '65rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Process />
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
            updateRate={updateRate}
            state={history.location.state}
            authenticated={authenticated}
            style={{ boxShadow: '3px 3px 5px 6px #ccc' }}
          />
          <NextButton />
        </div>
        <Message>
          PLEASE NOTE: Bitcoin and Ethereum networks are heavily overloaded.
          Transactions processing may take time.
        </Message>
        <div />
      </Segment>
    </div>
  )
})
