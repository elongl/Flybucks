import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Rotating from 'react-rotating-text'
const coins = [
  'Bitcoin',
  'Ethereum',
  'Litecoin',
  'Dashcoin',
  'Gliksberg',
  'Ripple'
]
export default () => (
  <Container>
    <Header
      as="h1"
      style={{
        color: 'white',
        fontSize: '3.75em',
        fontFamily: 'Montserrat',
        fontWeight: 100,
        marginTop: '3em',
        letterSpacing: -1
      }}
    >
      <span>Exchange </span>
      <span style={{ fontWeight: 700, color: '#faa61a' }}>
        <Rotating pause={3000} items={coins} />
      </span>
      <span> With Flybucks!</span>
    </Header>
    <hr width="90%" />

    <h2
      style={{
        fontSize: '2em',
        fontWeight: 'normal',
        fontFamily: 'Montserrat',
        color: 'white'
      }}
    >
      The world's local currency within your reach.
    </h2>
  </Container>
)
