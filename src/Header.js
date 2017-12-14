import React from 'react'
import { Segment } from 'semantic-ui-react'
import Menu from './Header/Menu'
import HeaderText from './Header/HeaderText'
import Exchange from './Header/Exchange'

const headerStyle = {
  backgroundImage:
    'url(https://firebasestorage.googleapis.com/v0/b/coin-exchange-dd8dc.appspot.com/o/background.jpg?alt=media&token=dc1c3959-49bb-493a-85d2-3cd1aee473eb)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: 720,
  textAlign: 'center'
}
// Props:
// authenticated
export default ({ authenticated }) => {
  return (
    <Segment vertical style={headerStyle}>
      <Menu authenticated={authenticated} />
      <div style={{ paddingTop: 50 }}>
        <HeaderText />
        <Exchange />
      </div>
    </Segment>
  )
}
