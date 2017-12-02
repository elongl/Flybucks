import React, { Component } from 'react'
import { Segment, Input, Icon, Button, Modal, Header } from 'semantic-ui-react'
import styled from 'react-emotion'

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

// Components
const VerticalLine = styled('div')`
  border-left: 1px solid;
  height: 230px;
  opacity: 0.25;
`
const SocialButton = props => (
  <Button
    style={{ ...props.style, marginBottom: 15, width: 265 }}
    size="big"
    content={`Sign up with ${props.name}`}
    icon={props.icon}
    color={props.color}
  />
)
const Field = props => (
  <Input
    iconPosition="left"
    placeholder={props.placeholder}
    type={props.type}
    style={{ marginBottom: 5, width: 250 }}
    onChange={props.onChange}
  >
    <Icon name={props.icon} />
    <input style={{ backgroundColor: '#f9f9f9' }} />
  </Input>
)
const Popup = props => (
  <Modal open={props.open} onClose={props.onClose} basic size="small">
    <Header icon="browser" content={props.headerContent} />
    <Modal.Content>
      <h3>{props.content}</h3>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={props.onClose} inverted>
        <Icon name="checkmark" /> Got it
      </Button>
    </Modal.Actions>
  </Modal>
)

export default class extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
    invalidMail: false,
    invalidPass: false
  }
  signUp = () => {
    if (this.validate) {
      // TODO: Add firebase sign up.
    }
  }

  validate = () => {
    // eslint-disable-next-line
    let validMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!validMail.test(this.state.email)) {
      this.setState({ invalidMail: true })
      return false
    }
    if (
      this.state.password !== this.state.rePassword ||
      this.state.password === '' ||
      this.state.rePassword === ''
    ) {
      this.setState({ invalidPass: true })
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
        <Popup
          open={this.state.invalidMail}
          onClose={() => this.setState({ invalidMail: false })}
          headerContent="Invalid Email Address"
          content="You entered an invalid email address. Please check your email address."
        />
        <Popup
          open={this.state.invalidPass}
          onClose={() => this.setState({ invalidPass: false })}
          headerContent="Passwords Don't Match"
          content="You entered passwords that don't match or empty passwords. Please check your passwords."
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
            <Field
              type="text"
              placeholder="Email Address"
              icon="mail"
              onChange={event =>
                this.setState({
                  email: event.target.value
                })
              }
            />
            <Field
              type="text"
              placeholder="Username"
              icon="user"
              onChange={event =>
                this.setState({
                  username: event.target.value
                })
              }
            />

            <Field
              type="password"
              placeholder="Password"
              icon="lock"
              onChange={event =>
                this.setState({
                  password: event.target.value
                })
              }
            />
            <Field
              type="password"
              placeholder="Retype Password"
              icon="repeat"
              onChange={event =>
                this.setState({
                  rePassword: event.target.value
                })
              }
            />
            <Button
              content="Sign Up!"
              icon="check"
              labelPosition="right"
              onClick={this.validate}
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
            <SocialButton
              name="Google"
              icon="google"
              style={{ backgroundColor: '#d95132', color: 'white' }}
            />
            <SocialButton name="Facebook" icon="facebook" color="facebook" />
            <SocialButton name="Twitter" icon="twitter" color="twitter" />
          </div>
        </div>
        <p style={{ fontSize: 18, marginRight: 50 }}>
          Already a member? <a>Sign in here!</a>
        </p>
      </Segment>
    )
  }
}
