import React from 'react'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'
export default () => (
  <Segment style={{ padding: '0em' }} vertical>
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as="h3" style={{ fontSize: '2em', fontStyle: 'italic' }}>
            "What a Company"
          </Header>
          <p style={{ fontSize: '1.33em' }}>- Elon Gliksberg</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as="h3" style={{ fontSize: '2em', fontStyle: 'italic' }}>
            "I shouldn't have gone with their competitor."
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            <Image avatar src="/assets/images/avatar/large/nan.jpg" />
            <b>Nan</b> Chief Fun Officer Acme Toys
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)
