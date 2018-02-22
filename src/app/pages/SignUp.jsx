import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Segment, Button, Form } from 'semantic-ui-react'
import Alert from 'sweetalert2'
import firebase from '../../api/firebase'
import FullPageContainer from '../components/common/FullPageContainer'
import VerticalLine from '../components/common/VerticaLine'
import SocialNetworkButton from '../components/user/SocialNetworkButton'
import Field from '../components/user/SignupField'

const columnFlex = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}
const rowFlex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
}

export default withRouter(props => {
  const signUp = async event => {
    const formData = new window.FormData(event.target)
    const email = formData.get('email')
    const pass = formData.get('pass')
    const repass = formData.get('repass')
    const displayName = formData.get('displayName')
    if (pass === repass) {
      try {
        await firebase.createUserWithEmailAndPassword(email, pass, displayName)
        props.history.push('/')
      } catch (err) {}
    } else {
      Alert('Oops...', 'Please make sure your passwords match', 'error')
    }
  }

  const socialNetworks = ['Google', 'Facebook', 'Twitter'].map(
    socialNetwork => (
      <SocialNetworkButton
        name={socialNetwork}
        key={socialNetwork}
        type="signup"
      />
    )
  )
  const fields = [
    {
      type: 'email',
      name: 'email',
      icon: 'mail',
      placeholder: 'Email Address'
    },
    {
      type: 'text',
      name: 'displayName',
      icon: 'user',
      placeholder: 'Display Name'
    },
    {
      type: 'password',
      name: 'pass',
      icon: 'lock',
      placeholder: 'Password'
    },
    {
      type: 'password',
      name: 'repass',
      icon: 'repeat',
      placeholder: 'Retype Password'
    }
  ].map(props => <Field key={props.name} {...props} required />)

  return (
    <FullPageContainer>
      <Segment
        raised
        style={{
          ...columnFlex,
          width: 950,
          minHeight: 600,
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              fontSize: '4.5rem',
              fontFamily: 'Roboto',
              fontWeight: 100,
              margin: 0
            }}
          >
            Join for free
          </h1>
          <h2
            style={{
              fontSize: 23,
              fontFamily: 'Roboto',
              fontWeight: 100,
              margin: 0
            }}
          >
            to exchange crypto instantly now
          </h2>
        </div>
        <div
          style={{
            ...rowFlex,
            width: 600
          }}
        >
          <Form style={{ ...columnFlex }} onSubmit={signUp}>
            {fields}
            <Button
              content="Sign Up!"
              icon="signup"
              labelPosition="right"
              type="submit"
              size="big"
              style={{
                color: 'white',
                backgroundColor: '#faa61a',
                width: 250,
                marginTop: 5
              }}
            />
          </Form>
          <VerticalLine />
          <div style={columnFlex}>{socialNetworks}</div>
        </div>
        <p style={{ fontSize: 20 }}>
          Already a member?{' '}
          <Link to="/signin" style={{ cursor: 'pointer', color: '#faa61a' }}>
            Sign in here!
          </Link>
        </p>
      </Segment>
    </FullPageContainer>
  )
})
