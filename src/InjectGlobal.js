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

@media only screen and (max-width: 900px) {
  #headerExchange {
      flex-direction: column;
  }
}
@media only screen and (max-width: 1498px) {
  .reviewCard {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
  }
}
@media only screen and (max-width: 1000px) {
  #headerText {
    font-size 5vw !important;
  }
}
@media only screen and (max-width: 1539px) {
  .feature {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }
}
`
