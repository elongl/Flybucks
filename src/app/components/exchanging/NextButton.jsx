import React from 'react'
import { Button } from 'semantic-ui-react'
export default ({ pushStage }) => (
  <Button
    size="huge"
    labelPosition="right"
    style={{ marginLeft: '1.5rem', marginTop: '1.5rem', padding: '1.5rem 0' }}
    color="orange"
    onClick={pushStage}
    content="Next"
    icon="right arrow"
  />
)
