import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from '../Header/Menu'
import HeaderText from '../Header/HeaderText'
import Exchange from '../Header/Exchange'

const headerStyle = {
  backgroundImage: `url(/assets/images/header-background.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '83.5vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

export default ({ authenticated }) => (
  <Segment vertical style={headerStyle}>
    <Menu authenticated={authenticated} />
    <div>
      <HeaderText />
      <Exchange authenticated={authenticated} />
    </div>
    <div style={{ height: '4rem' }} />
  </Segment>
)
