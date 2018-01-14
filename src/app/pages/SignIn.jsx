import React, { Component } from 'react'
import { Segment, Button, Form } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import Alert from 'sweetalert2'
import firebase from '../../api/firebase'
import FullPageContainer from '../components/common/FullPageContainer'
import SocialNetworkButton from '../components/user/SocialNetworkButton'
import Field from '../components/user/SigninField'
import HorizonalLine from '../components/common/HorizontalLine'

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
export default withRouter(
  class extends Component {
    state = {
      email: '',
      pass: ''
    }

    signIn = event => {
      const formData = new window.FormData(event.target)
      const email = formData.get('email')
      const pass = formData.get('pass')
      const response = firebase.signInWithEmailAndPassword(email, pass)
      response.then(() => {
        Alert({
          position: 'top-right',
          type: 'success',
          title: 'Your are now logged in',
          showConfirmButton: false,
          timer: 1500
        })
        this.props.history.push('/')
      }, response.catch(error => Alert('Oops...', error.message, 'error')))
    }

    render() {
      const socialNetworks = ['Google', 'Facebook', 'Twitter'].map(name => (
        <SocialNetworkButton name={name} key={name} />
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
            <h1
              style={{
                fontSize: 66,
                fontFamily: 'Roboto',
                fontWeight: 100,
                margin: 0,
                marginRight: 10,
                textAlign: 'center'
              }}
            >
              Welcome back!
            </h1>
            <Form
              onSubmit={this.signIn}
              style={{
                ...columnFlex,
                width: 600
              }}
            >
              <div style={{ ...columnFlex, alignItems: 'center' }}>
                <Field
                  label="Enter your email address"
                  type="email"
                  placeholder="Email Address"
                  icon="mail"
                  name="email"
                  required
                />
                <Field
                  label="Enter your password"
                  type="password"
                  placeholder="Password"
                  icon="lock"
                  name="pass"
                  required
                />
                <Button
                  content="Sign in!"
                  icon="sign in"
                  labelPosition="right"
                  size="big"
                  type="submit"
                  style={{
                    color: 'white',
                    backgroundColor: '#faa61a',
                    width: 320,
                    marginTop: 5,
                    marginBottom: 10
                  }}
                />
              </div>
              <HorizonalLine text="or login with" style={{ marginRight: 35 }} />
              <div style={{ ...rowFlex, marginTop: 25 }}>{socialNetworks}</div>
            </Form>
            <p style={{ fontSize: 20 }}>
              Not a member?{' '}
              <Link
                to="/signup"
                style={{ cursor: 'pointer', color: '#faa61a' }}
              >
                Sign up here!
              </Link>
            </p>
          </Segment>
        </FullPageContainer>
      )
    }
  }
)
