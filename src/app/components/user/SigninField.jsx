import React from 'react'
import Alert from 'sweetalert2'
import firebase from '../../../api/firebase'
import { Input, Icon } from 'semantic-ui-react'
const columnFlex = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}
export default props => (
  <div style={columnFlex}>
    {props.type !== 'password' ? (
      <label style={{ fontSize: 16 }}>{props.label}</label>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label style={{ fontSize: 16 }}>{props.label}</label>
        <a
          style={{ cursor: 'pointer', fontSize: 16, color: '#faa61a' }}
          onClick={async () => {
            const { value: email } = await Alert({
              title: 'Input email address',
              input: 'email',
              inputPlaceholder: 'Enter your email address',
              showCancelButton: true,
              showCloseButton: true
            })
            if (email) {
              firebase.resetPassword(email)
            }
          }}
        >
          Forgot password
        </a>
      </div>
    )}
    <Input
      iconPosition="left"
      placeholder={props.placeholder}
      type={props.type}
      style={{
        fontSize: 18,
        width: 320,
        marginTop: 5,
        marginBottom: 20
      }}
      name={props.name}
      required={props.required}
    >
      <Icon name={props.icon} />
      <input style={{ backgroundColor: '#f9f9f9' }} />
    </Input>
  </div>
)
