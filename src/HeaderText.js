import React from 'react'
import { Header, Container } from 'semantic-ui-react'
export default () => {
  return (
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
  )
}
