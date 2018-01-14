import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
export default () => (
  <div>
    <Grid.Row style={{ padding: 0 }}>
      <Divider
        as="h4"
        horizontal
        section
        style={{
          width: '60%',
          textTransform: 'uppercase',
          height: 0
        }}
      >
        <a
          style={{ color: '#faa61a', cursor: 'pointer' }}
          onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
        >
          where do I start
        </a>
      </Divider>
    </Grid.Row>
  </div>
)
