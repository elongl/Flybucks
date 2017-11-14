import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from './Menu'
import HeaderText from './HeaderText'
import Exchange from './Exchange'
import './Header.css'

let headerStyle = {
  backgroundImage: 'url(https://image.ibb.co/cn4qqw/download.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 720,
  textAlign: 'center'
}
export default () => {
  return (
    <Segment vertical inverted style={headerStyle}>
      <Menu />
      <HeaderText />
      <Exchange />
    </Segment>
  )
}
