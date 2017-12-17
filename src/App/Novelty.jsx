import React from 'react'
import { Segment, Header, Container, Divider, Image } from 'semantic-ui-react'
export default () => (
  <Segment
    style={{
      padding: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }}
    vertical
  >
    <Container style={{ width: '65rem' }}>
      <Image
        size="medium"
        floated="right"
        src="https://sentry.io/_assets/illustrations/notifications-66951a2846dc3bb2c8166905e88aefc5cfa83c13c72d02e387edbf1076076a21.svg"
      />
      <Header as="h3" style={{ fontSize: '2rem', paddingTop: '1.5rem' }}>
        Why Moneyfood?
      </Header>
      <p style={{ fontSize: '1.33rem' }}>
        We provide individuals and businesses a world class experience to
        exchange cryptos and digital tokens. Moneyfood is the go-to spot for
        traders who demand lightning fast exchange execution, and best security
        practices. Whether you are new to cryptocurrencies, or a veteran,
        Moneyfood was created for you!
      </p>
      <Divider
        as="h4"
        horizontal
        style={{
          width: '65rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          textTransform: 'uppercase'
        }}
      >
        <a
          style={{ color: '#faa61a', cursor: 'pointer' }}
          onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
        >
          where do I start
        </a>
      </Divider>
      <Image
        size="medium"
        floated="left"
        src="https://image.ibb.co/cdNTH6/cryptocurrency_bitcoin_gold_value_money_digital_currency_38b107083316884c_512x512.png"
      />
      <Header as="h3" style={{ fontSize: '2rem', paddingTop: '1.5rem' }}>
        Cryptocurrencies.
      </Header>
      <p style={{ fontSize: '1.33rem' }}>
        Cryptocurrencies are digital gold. Money that promises to preserve and
        increase its value over time. Cryptos are also a fast and comfortable
        means of payment with a worldwide scope, private and anonymous.
      </p>
    </Container>
  </Segment>
)
