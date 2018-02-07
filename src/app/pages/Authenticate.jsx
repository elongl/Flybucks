import React from 'react'
import { Image, Header, Segment } from 'semantic-ui-react'
import FullPageContainer from '../components/common/FullPageContainer'
import { withRouter } from 'react-router-dom'
export default withRouter(props => (
  <FullPageContainer>
    <Segment
      onClick={() => props.history.push('/signup')}
      style={{
        margin: 0,
        width: 450,
        minHeight: 500,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image src="/assets/images/welcome.svg" width="420" height="353.7" />
      <Header as="h1">Sign up to Flybucks</Header>
    </Segment>

    <div style={{ padding: '1rem' }} />

    <Segment
      onClick={() => props.history.push('/signin')}
      style={{
        margin: 0,
        width: 450,
        minHeight: 500,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faa61a'
      }}
    >
      <Image src="/assets/images/account.svg" width="420" height="353.7" />
      <Header as="h1" style={{ color: 'white' }}>
        Log in to your account
      </Header>
    </Segment>
  </FullPageContainer>
))
