import React from 'react'
import { Dropdown } from 'semantic-ui-react'
// Props:
// displayName
export default ({ displayName }) => (
  <Dropdown
    item
    icon={null}
    text="Account Management"
    style={{
      borderStyle: 'solid',
      borderWidth: 2,
      fontWeight: 700,
      color: '#FFF',
      height: 38.5625
    }}
  >
    <Dropdown.Menu>
      <Dropdown.Header icon="tags" content={'Signed in as ' + displayName} />
      <Dropdown.Divider />
      <Dropdown.Item icon="user" text="Profile" />
      <Dropdown.Item icon="currency" text="Currencies" />
      <Dropdown.Item icon="exchange" text="Transactions" />
    </Dropdown.Menu>
  </Dropdown>
)
