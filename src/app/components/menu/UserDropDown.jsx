import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default ({ displayName }) => (
  <Dropdown
    icon={null}
    text="Account Management"
    style={{ color: 'white', fontWeight: 700 }}
    className="ui inverted item button"
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
