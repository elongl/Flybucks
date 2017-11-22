import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from './Header/Menu'
import HeaderText from './Header/HeaderText'
import Exchange from './Header/Exchange'

let headerStyle = {
  backgroundImage: 'url(https://image.ibb.co/cn4qqw/download.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 720,
  textAlign: 'center'
}
export default () => {
  return (
    <Segment vertical style={headerStyle}>
      <Menu />
      <HeaderText />
      <Exchange />
    </Segment>
  )
}
