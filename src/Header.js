import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from './Components/Header/Menu'
import HeaderText from './Components/Header/HeaderText'
import Exchange from './Components/Header/Exchange'

const headerStyle = {
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
      <div style={{ paddingTop: 50 }}>
        <HeaderText />
        <Exchange />
      </div>
    </Segment>
  )
}
