import React from 'react'
import { Segment, Grid, Header, List, Container } from 'semantic-ui-react'
export default () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Religious Ceremonies</List.Item>
              <List.Item as="a">Gazebo Plans</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Banana Pre-Order</List.Item>
              <List.Item as="a">DNA FAQ</List.Item>
              <List.Item as="a">How To Access</List.Item>
              <List.Item as="a">Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Follow Us" />
            <List link inverted>
              <List.Item as="a">Facebook</List.Item>
              <List.Item as="a">Instagram</List.Item>
              <List.Item as="a">Twitter</List.Item>
              <List.Item as="a">Github</List.Item>
              <List.Item as="a">Reddit</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Freaking Developers
            </Header>
            <p>Website Created by the almighty Elon Gliksberg</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)
