import React from 'react'
import { Segment, Grid, Container } from 'semantic-ui-react'
const { Column } = Grid
export default () => (
  <Segment
    vertical
    inverted
    style={{
      minHeight: 217,
      backgroundColor: '#1F222B'
    }}
  >
    <Grid columns={2} style={{ margin: 'auto', width: 1150 }}>
      <Column>
        <Container>
          <h2>For Traders</h2>
          <p style={{ fontSize: 17 }}>
            Our rates are the most competitive in Israel. We support same day
            Wire transfers, Cash transfers, with a layout of over 150 branches,
            operate a Bitcoin ATM and offer you to purchase your Bitcoins using
            a Credit Card.
          </p>
        </Container>
      </Column>

      <Column>
        <h2>For Business</h2>
        <p style={{ fontSize: 17 }}>
          If you have a business and you wish to accept Bitcoin as a payment
          option, while keeping your books in Shekel Dollar or Euro, we offer a
          Checkout with Bitcoin service for stores and online stores.
        </p>
      </Column>
    </Grid>
  </Segment>
)
