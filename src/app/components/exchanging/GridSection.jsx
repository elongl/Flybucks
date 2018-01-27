import React from 'react'
import { Grid } from 'semantic-ui-react'
export default ({ leftText, rightText }) => (
  <Grid.Row style={{ display: 'flex', justifyContent: 'center' }}>
    <Grid.Column width={4}>
      <h3
        style={{
          color: '#b8b8b8',
          textTransform: 'uppercase',
          fontWeight: 300
        }}
      >
        {leftText}
      </h3>
    </Grid.Column>
    <Grid.Column width={5}>
      <h3>{rightText}</h3>
    </Grid.Column>
  </Grid.Row>
)
