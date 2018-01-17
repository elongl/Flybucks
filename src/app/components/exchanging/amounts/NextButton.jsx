import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
export default () => (
  <Button
    animated
    size="massive"
    color="orange"
    style={{ marginLeft: '1.5rem', marginTop: '1.5rem' }}
  >
    <Button.Content visible>Next</Button.Content>
    <Button.Content hidden>
      <Icon name="right arrow" />
    </Button.Content>
  </Button>
)
