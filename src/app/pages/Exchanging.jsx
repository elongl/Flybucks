import React from 'react'
import { Segment, Step as Process } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import FullPageContainer from '../components/common/FullPageContainer'
import Step from '../components/exchanging/Step'

export default withRouter(props => (
  <FullPageContainer>
    <Segment
      style={{
        width: '100vw',
        minHeight: '85vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Process.Group size="large">
        <Step
          icon="database"
          title="Amount"
          description="Choose your amounts"
        />
        <Step
          active
          icon="id card outline"
          title="Recipient"
          description="Enter payee address"
        />
        <Step
          disabled
          icon="info"
          title="Confirm Transaction"
          description="Review your order"
        />
        <Step
          disabled
          icon="payment"
          title="Billing"
          description="Send your funds"
        />
        <Step disabled icon="rocket" title="Exchanging" />
      </Process.Group>
    </Segment>
  </FullPageContainer>
))
