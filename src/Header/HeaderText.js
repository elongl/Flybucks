import React from 'react'
import { Container } from 'semantic-ui-react'
import Rotating from 'react-rotating-text'
import { injectGlobal } from 'react-emotion'
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.react-rotating-text-cursor {
  animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
}

@keyframes blinking-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
`

export default () => {
  return (
    <Container>
      <h1
        style={{
          color: 'white',
          fontSize: '3.75em',
          fontFamily: 'Montserrat',
          fontWeight: 100,
          marginTop: '3em',
          letterSpacing: -1
        }}
      >
        <span>Exchange </span>
        <span style={{ fontWeight: 700 }}>
          <Rotating
            pause={3000}
            style={{ color: '#98fb98' }}
            items={['Bitcoin', 'Ethereum', 'Litecoin', 'Dashcoin']}
          />
        </span>
        <span> With Moneyfood!</span>
      </h1>
      <hr width="1000" />

      <h2
        style={{
          fontSize: '1.9em',
          fontWeight: 'normal',
          fontFamily: 'Montserrat',
          color: 'white',
          letterSpacing: -1
        }}
      >
        The world's local currency within your reach.
      </h2>
    </Container>
  )
}
