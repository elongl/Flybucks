import React from 'react'
import FloatingContainer from '../Components/FloatingContainer'
import { Button } from 'semantic-ui-react'
export default () => (
  <FloatingContainer style={{ position: 'fixed', right: '5em', bottom: '3em' }}>
    <Button primary>Sign In</Button>
    <Button secondary>Sign Up</Button>
  </FloatingContainer>
)
