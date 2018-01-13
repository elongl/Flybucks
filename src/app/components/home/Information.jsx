import React from 'react'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'
import FloatingContainer from '../common/FloatingContainer'

export default () => (
  <Segment style={{ padding: '5rem' }} vertical>
    <Grid container stackable verticalAlign="middle" columns="equal">
      <Grid.Row>
        <Grid.Column>
          <Header as="h3" style={{ fontSize: '2rem' }}>
            Start Your Afilliate Program Today
          </Header>
          <p style={{ fontSize: '1.33rem' }}>
            If you have a business and you wish to accept Bitcoin as a payment
            option, while keeping your books in Shekel Dollar or Euro, we offer
            a Checkout with Bitcoin service for stores and online stores.
          </p>
          <Header as="h3" style={{ fontSize: '2rem', marginTop: '3rem' }}>
            The Future Is Already Here
          </Header>
          <p style={{ fontSize: '1.33rem' }}>
            Fair. Trustworthy. Instant. Our rates are the most competitive in
            Israel. We support same day Wire transfers, Cash transfers, with a
            layout of over 150 branches, operate a Bitcoin ATM and offer you to
            purchase your Bitcoins using a Credit Card.
          </p>
        </Grid.Column>
        <Grid.Column>
          <FloatingContainer>
            <Image src="/assets/images/globe.svg" />
          </FloatingContainer>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)
