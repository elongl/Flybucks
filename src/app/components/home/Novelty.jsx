import React from 'react'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'
import BackToTopDivider from '../common/BackToTopDivider'
import EntryAnimation from '../common/EntryAnimation'

export default () => (
  <Segment style={{ padding: '2rem' }} vertical>
    <Grid centered stackable verticalAlign="middle">
      <Grid.Row style={{ padding: 0, minHeight: 445 }}>
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
          <EntryAnimation animation="fly left">
            <Image src="/assets/images/notifications.svg" />
          </EntryAnimation>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{ padding: 0 }}>
        <BackToTopDivider text={'where do i start'} />
      </Grid.Row>

      <Grid.Row style={{ padding: 0, minHeight: 445 }}>
        <Grid.Column width={4}>
          <EntryAnimation animation="fly right">
            <Image src="/assets/images/cryptocurrencies.svg" />
          </EntryAnimation>
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
