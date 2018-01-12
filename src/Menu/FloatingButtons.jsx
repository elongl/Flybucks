import React from 'react'
import FloatingContainer from '../Components/FloatingContainer'
import { Button, Icon } from 'semantic-ui-react'
export default ({ authenticated, toggleSigninModal, toggleSignupModal }) => (
  <FloatingContainer
    style={{
      opacity: 0.85,
      position: 'fixed',
      right: '3em',
      bottom: '3em',
      zIndex: 1
    }}
  >
    {authenticated ? (
      <div>
        <Button
          onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
          secondary
          size="big"
          circular
        >
          Start Exchanging
          <Icon name="right arrow" />
        </Button>
      </div>
    ) : (
      <div>
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
      </div>
    )}
  </FloatingContainer>
)
