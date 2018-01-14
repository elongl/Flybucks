import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Segment, Button, Message } from 'semantic-ui-react'
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

export default class extends Component {
  state = {
    displayName: '',
    email: '',
    pass: '',
    repass: '',
    errorList: []
  }
  signUp = () => {
    const { email, pass, repass, displayName } = this.state
    if (this.validate(email, pass, repass)) {
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
            this.props.hide()
          }),
        response.catch(error => Alert('Oops...', error.message, 'error'))
      )
    }
  }

  validate = () => {
    // eslint-disable-next-line
    const validMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const { email, pass, repass, displayName, errorList } = this.state
    if (errorList.length !== 0) this.setState({ errorList: [] })
    let succeed = true
    if (!validMail.test(email)) {
      this.setState(prevState => ({
        errorList: [
          ...prevState.errorList,
          'Please make sure your entered a valid email address.'
        ]
      }))
      succeed = false
    }
    if (pass !== repass || pass.length < 6) {
      this.setState(prevState => ({
        errorList: [
          ...prevState.errorList,
          'Please make sure your passwords match and consist of 6 letters at least.'
        ]
      }))
      succeed = false
    }
    if (!displayName) {
      this.setState(prevState => ({
        errorList: [
          ...prevState.errorList,
          'Please make sure your entered a display name.'
        ]
      }))
      succeed = false
    }
    console.log(errorList)
    return succeed
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
        type: 'text',
        placeholder: 'Email Address',
        icon: 'mail',
        onChange: event => this.setState({ email: event.target.value })
      },
      {
        type: 'text',
        placeholder: 'Display Name',
        icon: 'user',
        onChange: event => this.setState({ displayName: event.target.value })
      },
      {
        type: 'password',
        placeholder: 'Password',
        icon: 'lock',
        onChange: event => this.setState({ pass: event.target.value })
      },
      {
        type: 'password',
        placeholder: 'Retype Password',
        icon: 'repeat',
        onChange: event => this.setState({ repass: event.target.value })
      }
    ].map(({ type, placeholder, icon, onChange }) => (
      <Field
        key={placeholder}
        type={type}
        placeholder={placeholder}
        icon={icon}
        onChange={onChange}
        signUp={this.signUp}
      />
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
          <Message
            error
            hidden={this.state.errorList.length === 0}
            header="There was some errors with your submission"
            list={this.state.errorList}
          />
          <div
            style={{
              ...rowFlex,
              width: 600
            }}
          >
            <div style={{ ...columnFlex }}>
              {fields}

              <Button
                content="Sign Up!"
                icon="signup"
                labelPosition="right"
                onClick={this.signUp}
                size="big"
                style={{
                  color: 'white',
                  backgroundColor: '#faa61a',
                  width: 250,
                  marginTop: 5
                }}
              />
            </div>
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
}
