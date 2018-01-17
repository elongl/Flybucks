import React from 'react'
import { Item, Icon } from 'semantic-ui-react'
export default () => (
  <div style={{ display: 'flex' }}>
    <Item
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Item.Image size="tiny" src="/assets/cryptoicons/btc.svg" />
      <Item.Content>
        <Item.Header as="h1">Bitcoin</Item.Header>
      </Item.Content>
    </Item>
    <Icon
      name="long arrow right"
      size="massive"
      style={{ marginBottom: '1.5rem', margin: '0 5rem' }}
    />
    <Item
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Item.Image size="tiny" src="/assets/cryptoicons/btc.svg" />
      <Item.Content>
        <Item.Header as="h1">Bitcoin</Item.Header>
      </Item.Content>
    </Item>
  </div>
)
