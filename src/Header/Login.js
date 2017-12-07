import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import firebase from '../Firebase'
import SocialNetworkButton from '../Components/SocialNetworkButton'
import LoginField from '../Components/LoginField'
import Modal from '../Components/Modal'
import HorizonalLine from '../Components/HorizontalLine'

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
    email: '',
    pass: '',
    invalidForm: false,
    invalidFormContent: ''
  }
  signIn = () => {
    const { email, pass } = this.state
    const response = firebase.signInWithEmailAndPassword(email, pass)
    response.catch(error =>
      this.setState({
        invalidForm: true,
        invalidFormContent: error.message
      })
    )
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
            <LoginField
              label="Enter your email address"
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
              label="Enter your password"
              type="password"
              placeholder="Password"
              icon="lock"
              onChange={event =>
                this.setState({
                  pass: event.target.value
                })
              }
            />
            <Button
              content="Sign in!"
              icon="check"
              labelPosition="right"
              onClick={this.signIn}
              size="big"
              style={{
                color: 'white',
                backgroundColor: '#10d078',
                width: 320,
                marginTop: 5,
                marginBottom: 10
              }}
            />
          </div>
          <HorizonalLine text="or login with" style={{ marginRight: 35 }} />
          <div style={{ ...rowFlex, marginTop: 25 }}>
            <SocialNetworkButton name="Google" />
            <SocialNetworkButton name="Facebook" />
            <SocialNetworkButton name="Twitter" />
          </div>
        </div>
        <p style={{ fontSize: 20, marginRight: 50 }}>
          Not a member? <a>Sign up here!</a>
        </p>
      </Segment>
    )
  }
}
