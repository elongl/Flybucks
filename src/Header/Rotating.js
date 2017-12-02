import React from 'react'
import Rotating from 'react-rotating-text'
import { injectGlobal } from 'react-emotion'
injectGlobal`
.react-rotating-text-cursor {
  animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
}

@-moz-keyframes blinking-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes blinking-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes blinking-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes blinking-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`
export default () => (
  <div>
    <h1
      style={{
        color: 'white',
        fontSize: '4em',
        fontWeight: 'normal',
        marginTop: '3em'
      }}
    >
      Exchange{' '}
      <Rotating
        items={['Bitcoin', 'Ethereum', 'Litecoin', 'Dashcoin', 'EGK']}
      />{' '}
      With Cryptoknight!
    </h1>
  </div>
)
