import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Typewriter from 'react-rotating-text'
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
      id="headerText"
      style={{
        color: 'white',
        fontSize: '3.75em',
        fontFamily: 'Montserrat',
        fontWeight: 100,
        letterSpacing: -1
      }}
    >
      <span>Exchange </span>
      <span style={{ fontWeight: 700, color: '#faa61a' }}>
        <Typewriter pause={4000} items={coins} />
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
