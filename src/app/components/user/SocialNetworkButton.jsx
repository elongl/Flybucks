import React from 'react'
import { Button } from 'semantic-ui-react'
import firebase from '../../../api/firebase'
export default props => (
  <Button
    onClick={() => firebase.createUserWithSocialNetwork(props.name)}
    icon={props.name.toLowerCase()}
    color={
      props.name.toLowerCase() !== 'google'
        ? props.name.toLowerCase()
        : 'google plus'
    }
    style={{ marginBottom: 15, width: 265 }}
    size="big"
    content={
      props.type === 'signup' ? `Sign up with ${props.name}` : props.name
    }
  />
)
