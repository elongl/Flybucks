import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container'
import Feature from './features/Feature'
export default () => (
  <Segment
    vertical
    inverted
    style={{
      padding: '5rem',
      backgroundColor: '#424242',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}
  >
    <Feature header="Security" image="/assets/images/security.png">
      Security is our priority. We employ an agressive cold storage policy on
      all currencies in our system.
    </Feature>
    <Feature header="Currencies" image="/assets/images/currencies.png">
      We aim to support a large number of crypto currencies, and provide a
      stable market for smaller niche currencies.
    </Feature>
    <Feature header="Asset Trading" image="/assets/images/charts.png">
      We will be providing some unique trading opportunities apart from
      currencies, more infomation coming soon.
    </Feature>
    <Feature header="Support" image="/assets/images/support.png">
      We believe good support is second only to security and endevour to answer
      your queries as quickly as possible.
    </Feature>
  </Segment>
)
