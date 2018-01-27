import React from 'react'
import ThemedInput from './ThemedInput'
export default ({ label, containerStyle, inputStyle, value, children }) => (
  <ThemedInput
    label={label}
    containerStyle={containerStyle}
    inputStyle={inputStyle}
    value={value || children}
    readOnly
  />
)
