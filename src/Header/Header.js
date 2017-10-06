import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from './Menu'
import HeaderText from './HeaderText'
import Exchange from './Exchange'

export default () => {
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <Menu />
        <HeaderText />
        <Exchange />
      </Segment>
    </div>
  )
}
