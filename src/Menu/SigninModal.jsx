import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import firebase from '../Firebase'
import SocialNetworkButton from '../AuthenticationModal/SocialNetworkButton'
import Field from '../AuthenticationModal/SigninField'
import HorizonalLine from '../Components/HorizontalLine'
import Alert from 'sweetalert2'

// Stylings
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
// Props:
// switch
// hide
export default class extends Component {
  state = {
    email: '',
    pass: ''
  }

  signIn = () => {
    const { email, pass } = this.state
    const response = firebase.signInWithEmailAndPassword(email, pass)
    response.then(() => {
      this.props.hide()
      Alert({
        position: 'top-right',
        type: 'success',
        title: 'Your are now logged in',
        showConfirmButton: false,
        timer: 1500
      })
    }, response.catch(error => Alert('Oops...', error.message, 'error')))
  }

  render() {
    const socialNetworks = ['Google', 'Facebook', 'Twitter'].map(name => (
      <SocialNetworkButton name={name} key={name} />
    ))
    return (
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
        <div
          style={{
            ...columnFlex,
            width: 600
          }}
        >
          <div style={{ ...columnFlex, alignItems: 'center' }}>
            <Field
              label="Enter your email address"
              type="text"
              placeholder="Email Address"
              icon="mail"
              onChange={event => this.setState({ email: event.target.value })}
              signIn={this.signIn}
            />
            <Field
              label="Enter your password"
              type="password"
              placeholder="Password"
              icon="lock"
              onChange={event => this.setState({ pass: event.target.value })}
              signIn={this.signIn}
            />
            <Button
              content="Sign in!"
              icon="sign in"
              labelPosition="right"
              onClick={this.signIn}
              size="big"
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
        </div>
        <p style={{ fontSize: 20 }}>
          Not a member?{' '}
          <a
            style={{ cursor: 'pointer', color: '#faa61a' }}
            onClick={this.props.switch}
          >
            Sign up here!
          </a>
        </p>
      </Segment>
    )
  }
}
