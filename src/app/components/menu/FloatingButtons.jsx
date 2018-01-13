import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import FloatingContainer from '../common/FloatingContainer'

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
        <Link to="/signin">
          <Button
            size="big"
            style={{ backgroundColor: '#faa61a', color: 'white' }}
            content="Log In"
          />
        </Link>
        <Link to="/signup">
          <Button size="big" secondary content="Sign Up" />
        </Link>
      </div>
    )}
  </FloatingContainer>
)
