import React from 'react'
import FloatingContainer from '../Components/FloatingContainer'
import { Button, Icon } from 'semantic-ui-react'
export default ({ authenticated, toggleSigninModal, toggleSignupModal }) =>
  authenticated ? (
    <FloatingContainer
      style={{
        opacity: 0.9,
        position: 'fixed',
        right: '3em',
        bottom: '3em',
        zIndex: 1
      }}
    >
      <Button href="#header" secondary size="big" circular>
        Start Exchanging
        <Icon name="right arrow" />
      </Button>
    </FloatingContainer>
  ) : (
    <FloatingContainer
      style={{
        opacity: 0.9,
        position: 'fixed',
        right: '3em',
        bottom: '3em',
        zIndex: 1
      }}
    >
      <Button
        size="big"
        style={{ backgroundColor: '#faa61a', color: 'white' }}
        onClick={() => toggleSigninModal(true)}
        content="Log In"
      />
      <Button
        size="big"
        onClick={() => toggleSignupModal(true)}
        secondary
        content="Sign Up"
      />
    </FloatingContainer>
  )
