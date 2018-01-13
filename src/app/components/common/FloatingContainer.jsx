import React from 'react'
import styled, { keyframes } from 'react-emotion'
const float = keyframes`
0% { transform: translateY(0); }
  50% { transform: translateY(0.5em); }
  100% { transform: translateY(0); }
`
const Container = styled('div')`
  animation: ${float} 3s ease-in-out infinite;
`
export default ({ children, style }) => (
  <Container style={style}>{children}</Container>
)
