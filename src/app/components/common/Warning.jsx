import React from 'react'
import { Image, Header, Segment } from 'semantic-ui-react'
import FullPageContainer from './FullPageContainer'
import ReturnHome from './ReturnHome'

export default ({ header }) => (
  <FullPageContainer>
    <Segment
      raised
      style={{
        width: 950,
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image src={'/assets/images/warning.svg'} size="large" />
      <Header style={{ fontSize: '1.5rem' }}>{header}</Header>
      <ReturnHome />
    </Segment>
  </FullPageContainer>
)
