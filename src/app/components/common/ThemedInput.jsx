import React from 'react'
import { Input, Label } from 'semantic-ui-react'
export default ({
  onChange,
  label,
  containerStyle,
  inputStyle,
  value,
  readOnly
}) => (
  <Input
    size="huge"
    labelPosition="right"
    onChange={onChange}
    value={value}
    style={containerStyle}
  >
    <Label
      style={{
        fontSize: 17,
        display: 'flex',
        alignItems: 'center',
        color: '#faa61a',
        backgroundColor: 'white',
        textTransform: 'uppercase'
      }}
    >
      {label}
    </Label>
    <input
      readOnly={readOnly}
      style={{
        fontWeight: 700,
        border: 'none',
        ...inputStyle
      }}
    />
  </Input>
)
