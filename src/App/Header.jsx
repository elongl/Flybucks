import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from '../Header/Menu'
import HeaderText from '../Header/HeaderText'
import Exchange from '../Header/Exchange'

const headerStyle = {
  backgroundImage:
    'url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/b708ce3208d6f981862e4f4d849ca7e1/photo-1513265124772-931ff24cef0b)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  textAlign: 'center'
}

export default ({ authenticated }) => (
  <Segment vertical style={headerStyle}>
    <Menu authenticated={authenticated} />
    <div
      style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <HeaderText />
      <Exchange authenticated={authenticated} />
    </div>
  </Segment>
)
