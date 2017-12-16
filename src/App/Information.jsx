import React from 'react'
import { Segment, Grid, Header, Image, Button } from 'semantic-ui-react'
export default () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: '2em' }}>
            We Help Our Business Afilliates
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            If you have a business and you wish to accept Bitcoin as a payment
            option, while keeping your books in Shekel Dollar or Euro, we offer
            a Checkout with Bitcoin service for stores and online stores.
          </p>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Customer Support At All Times
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Our rates are the most competitive in Israel. We support same day
            Wire transfers, Cash transfers, with a layout of over 150 branches,
            operate a Bitcoin ATM and offer you to purchase your Bitcoins using
            a Credit Card.
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            size="large"
            src="https://react.semantic-ui.com/assets/images/wireframe/white-image.png"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button size="huge">Check Them Out</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)
