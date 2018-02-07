import React from 'react'
import { Segment, Grid, Header, List, Container } from 'semantic-ui-react'
export default () => (
  <Segment
    inverted
    vertical
    style={{ padding: '5rem', backgroundColor: '#394247' }}
  >
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Exchange</List.Item>
              <List.Item as="a">Charts</List.Item>
              <List.Item as="a">Mobile App</List.Item>
              <List.Item as="a">Affiliate Program</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Follow Us" />
            <List link inverted>
              <List.Item as="a">Facebook</List.Item>
              <List.Item as="a">Instagram</List.Item>
              <List.Item as="a">Twitter</List.Item>
              <List.Item as="a">Github</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">EGK Partnership</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Freaking Developers
            </Header>
            <p>Website Created by the Legendary Elon Gliksberg.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)
