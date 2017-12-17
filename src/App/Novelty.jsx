import React from 'react'
import { Segment, Grid, Header, Image, Divider } from 'semantic-ui-react'

export default () => (
  <Segment style={{ padding: '2rem' }} vertical>
    <Grid centered stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={5}>
          <Header as="h3" style={{ fontSize: '2rem' }}>
            Why Flybucks?
          </Header>
          <p style={{ fontSize: '1.33rem' }}>
            We provide individuals and businesses a world class experience to
            exchange cryptos and digital tokens. Flybucks is the go-to spot for
            traders who demand lightning fast exchange execution, and best
            security practices. Whether you are new to cryptocurrencies, or a
            veteran, Flybucks was created for you!
          </p>
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src="https://sentry.io/_assets/illustrations/notifications-66951a2846dc3bb2c8166905e88aefc5cfa83c13c72d02e387edbf1076076a21.svg" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{ padding: 0 }}>
        <Divider
          as="h4"
          horizontal
          section
          style={{
            width: '80rem',
            textTransform: 'uppercase',
            height: 0
          }}
        >
          <a
            style={{ color: '#faa61a', cursor: 'pointer' }}
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: 'smooth' })
            }
          >
            where do I start
          </a>
        </Divider>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          <Image src="http://www.cryptolus.com/wp-content/uploads/2017/11/home-4.svg" />
        </Grid.Column>
        <Grid.Column width={5}>
          <Header as="h3" style={{ fontSize: '2rem', paddingTop: '1.5rem' }}>
            Today's Money. Cryptocurrencies.
          </Header>
          <p style={{ fontSize: '1.33rem' }}>
            Cryptocurrencies are digital gold. Money that promises to preserve
            and increase its value over time. Cryptos are also a fast and
            comfortable means of payment with a worldwide scope, private and
            anonymous. It's time to ditch paper money. Cryptocurrencies.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)
