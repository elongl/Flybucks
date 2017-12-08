import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import firebase from '../Firebase'
import VerticalLine from '../Components/VerticaLine'
import SocialNetworkButton from '../Components/SocialNetworkButton'
import SignupField from '../Components/SignupField'
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
    invalidFormContent: ''
  }
  signUp = () => {
    const { email, pass, repass } = this.state
    if (this.validate(email, pass, repass)) {
      const response = firebase.createUserWithEmailAndPassword(email, pass)
      response.catch(error =>
        this.setState({
          invalidForm: true,
          invalidFormContent: error.message
        })
      )
    }
  }

  validate = () => {
    const { email, pass, repass } = this.state
    // eslint-disable-next-line
    let validMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!validMail.test(email)) {
      this.setState({
        invalidForm: true,
        invalidFormContent:
          'Please make sure you entered a valid email address.'
      })
      return false
    }
    if (pass !== repass || pass === '' || repass === '') {
      this.setState({
        invalidForm: true,
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
          header="Error"
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
            <SignupField
              type="text"
              placeholder="Email Address"
              icon="mail"
              onChange={event =>
                this.setState({
                  email: event.target.value
                })
              }
            />
            <SignupField
              type="text"
              placeholder="Username"
              icon="user"
              onChange={event =>
                this.setState({
                  username: event.target.value
                })
              }
            />

            <SignupField
              type="password"
              placeholder="Password"
              icon="lock"
              onChange={event =>
                this.setState({
                  pass: event.target.value
                })
              }
            />
            <SignupField
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
              onClick={this.signUp}
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
              type="signup"
              style={{ backgroundColor: '#d95132', color: 'white' }}
            />
            <SocialNetworkButton name="Facebook" type="signup" />
            <SocialNetworkButton name="Twitter" type="signup" />
          </div>
        </div>
        <p style={{ fontSize: 20 }}>
          Already a member?{' '}
          <a style={{ cursor: 'pointer' }} onClick={this.props.switch}>
            Sign in here!
          </a>
        </p>
      </Segment>
    )
  }
}
