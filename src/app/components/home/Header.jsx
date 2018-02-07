import React from 'react'
import { Segment } from 'semantic-ui-react'
import HeaderText from './header/HeaderText'
import Exchange from './header/Exchange'

const headerStyle = {
  backgroundImage: `url(/assets/images/background.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

export default () => (
  <Segment vertical style={headerStyle}>
    <HeaderText />
    <Exchange />
  </Segment>
)
