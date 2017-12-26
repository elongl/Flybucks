import React from 'react'
import styled from 'react-emotion'
const Line = styled('div')` 
line-height: 1em;
position: relative;
outline: 0;
border: 0;
color: black;
text-align: center;
height: 1.5em;
opacity: .5;
&:before {
  content: '';
  // use the linear-gradient for the fading effect
  // use a solid background color for a solid bar
  background: linear-gradient(to right, transparent, #818078, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
&:after {
  content: '${props => props.text}';
  font-size: ${props => `${props.size || 16}px;`}
  position: relative;
  display: inline-block;
  color: black;

  padding: 0 .5em;
  line-height: 1.5em;
  color: #818078;
  background-color: #fcfcfa;
}
}
`

export default ({ text, size, style }) => (
  <Line text={text} size={size} style={style} />
)
