import React from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react'
export default props => (
  <Modal open={props.open} onClose={props.onClose} basic size="small">
    <Header icon="browser" content={props.headerContent} />
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
