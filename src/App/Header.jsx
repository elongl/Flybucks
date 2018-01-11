import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from '../Header/Menu'
import HeaderText from '../Header/HeaderText'
import Exchange from '../Header/Exchange'

const headerStyle = {
  backgroundImage: `url(https://cdn.dribbble.com/users/13449/screenshots/1828176/attachments/304147/Lakeside_Sunset_1920x1080.jpg)`,
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
