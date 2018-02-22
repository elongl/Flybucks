import { injectGlobal } from 'react-emotion'
injectGlobal`

body {
  padding-right: 0 !important;
}

#features {
  display: flex !important;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#rates {
  width: 80%;
  display: flex !important;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;  
}

.feature {
  display: flex;
  justify-content: center;
}

.reviewCard {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 1000px) {
  #headerText {
    font-size 5vw !important;
  }
}

@media only screen and (max-width: 950px) {
  #headerExchange {
      flex-direction: column;
  }
}

@media only screen and (max-width: 1150px) {
  #exchangingExchange {
      flex-direction: column;
      padding: 3rem;
  }
}

@media only screen and (max-width: 1539px) {
  .reviewCard, .feature {
    flex-basis: 50%;
  }  
}

@media only screen and (max-width: 700px) {  
  .feature {
    flex-basis: 100%;    
  }
}

@media only screen and (max-width: 841px) {
  .reviewCard {
    flex-basis: 100%;
  }  
}

@keyframes blinking-cursor {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
}

.react-rotating-text-cursor {
  animation: blinking-cursor 1s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
}
`
