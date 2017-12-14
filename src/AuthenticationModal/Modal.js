import React from 'react'
import { Modal, Header, Button, Icon } from 'semantic-ui-react'

// Props:
// onClose
// open
// header
// content
export default props => (
  <Modal open={props.open} onClose={props.onClose} basic size="small">
    <Header icon="browser" content={props.header} />
    <Modal.Content>
      <h3>{props.content}</h3>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={props.onClose} inverted>
        <Icon name="checkmark" /> Got it
      </Button>
    </Modal.Actions>
  </Modal>
)
