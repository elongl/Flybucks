import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import VerticalLine from '../Components/VerticaLine'
import SocialNetworkButton from '../Components/SocialNetworkButton'
import firebase from '../Firebase'
import LoginField from '../Components/LoginField'
import Modal from '../Components/Modal'

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
export default class extends Component {
  state = {
    username: '',
    email: '',
    pass: '',
    repass: '',
    invalidForm: false,
    invalidFormHeader: '',
    invalidFormContent: ''
  }
  signUp = (email, pass, repass) => {
    if (this.validate(email, pass, repass)) {
      const response = firebase.createUserWithEmailAndPassword(email, pass)
      response.catch(error =>
        this.setState({
          invalidForm: true,
          invalidFormHeader: 'Error',
          invalidFormContent: error.message
        })
      )
      // TODO: Congratulations Component
    }
  }

  validate = (email, pass, repass) => {
    // eslint-disable-next-line
    let validMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!validMail.test(this.state.email)) {
      this.setState({
        invalidForm: true,
        invalidFormHeader: 'Invalid Email Address',
        invalidFormContent:
          'Please make sure you entered a valid email address.'
      })
      return false
    }
    if (
      this.state.pass !== this.state.repass ||
      this.state.pass === '' ||
      this.state.repass === ''
    ) {
      this.setState({
        invalidForm: true,
        invalidFormHeader: 'Invalid Passwords',
        invalidFormContent:
          'Please make sure your passwords match and consist of 6 letters at least.'
      })
      return false
    }
    return true
  }

  render() {
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
        <Modal
          open={this.state.invalidForm}
          onClose={() => this.setState({ invalidForm: false })}
          header={this.state.invalidFormHeader}
          content={this.state.invalidFormContent}
        />
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
          <div style={{ ...columnFlex }}>
            <LoginField
              type="text"
              placeholder="Email Address"
              icon="mail"
              onChange={event =>
                this.setState({
                  email: event.target.value
                })
              }
            />
            <LoginField
              type="text"
              placeholder="Username"
              icon="user"
              onChange={event =>
                this.setState({
                  username: event.target.value
                })
              }
            />

            <LoginField
              type="password"
              placeholder="Password"
              icon="lock"
              onChange={event =>
                this.setState({
                  pass: event.target.value
                })
              }
            />
            <LoginField
              type="password"
              placeholder="Retype Password"
              icon="repeat"
              onChange={event =>
                this.setState({
                  repass: event.target.value
                })
              }
            />
            <Button
              content="Sign Up!"
              icon="check"
              labelPosition="right"
              onClick={() =>
                this.signUp(
                  this.state.email,
                  this.state.pass,
                  this.state.repass
                )
              }
              size="big"
              style={{
                color: 'white',
                backgroundColor: '#10d078',
                width: 250,
                marginTop: 5
              }}
            />
          </div>
          <VerticalLine />
          <div style={columnFlex}>
            <SocialNetworkButton
              name="Google"
              icon="google"
              style={{ backgroundColor: '#d95132', color: 'white' }}
            />
            <SocialNetworkButton
              name="Facebook"
              icon="facebook"
              color="facebook"
            />
            <SocialNetworkButton
              name="Twitter"
              icon="twitter"
              color="twitter"
            />
          </div>
        </div>
        <p style={{ fontSize: 18, marginRight: 50 }}>
          Already a member? <a>Sign in here!</a>
        </p>
      </Segment>
    )
  }
}
