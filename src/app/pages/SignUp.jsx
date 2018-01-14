import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Segment, Button, Message, Form } from 'semantic-ui-react'
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

export default withRouter(class extends Component {
  state = {
    errorList: []
  }
  signUp = event => {
    const formData = new window.FormData(event.target)
    const email = formData.get('email')
    const pass = formData.get('pass')
    const repass = formData.get('repass')
    const displayName = formData.get('displayName')
    if (pass === repass) {
      const response = firebase.createUserWithEmailAndPassword(email, pass)
      response.then(
        () =>
          firebase.updateProfile({ displayName }).then(() => {
            Alert({
              position: 'top-right',
              type: 'success',
              title: 'Your are now logged in',
              showConfirmButton: false,
              timer: 1500
            })
            this.props.history.push('/')
          }),
        response.catch(error => Alert('Oops...', error.message, 'error'))
      )
    } else {
      Alert('Oops...', 'Please make sure your passwords match', 'error')
    }
  }
  render() {
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
        placeholder: 'Email Address',
        icon: 'mail',
        name: 'email',
      },
      {
        type: 'text',
        placeholder: 'Display Name',
        icon: 'user',
        name: 'displayName'
      },
      {
        type: 'password',
        placeholder: 'Password',
        icon: 'lock',
        name: 'pass',
        minlength: 6
      },
      {
        type: 'password',
        placeholder: 'Retype Password',
        icon: 'repeat',
        name: 'repass'
      }
    ].map(props => (
      <Field {...props} required />
    ))

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
          <div>
            <h1
              style={{
                fontSize: 66,
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
            <Form style={{ ...columnFlex }} onSubmit={this.signUp}>
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
  }
})
