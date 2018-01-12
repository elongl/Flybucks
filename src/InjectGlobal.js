import { injectGlobal } from 'react-emotion'
injectGlobal`
.react-rotating-text-cursor {
  animation: blinking-cursor 1s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
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
body {
  padding-right: 0 !important;
}
`
