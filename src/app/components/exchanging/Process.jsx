import React from 'react'
import { Step as Process } from 'semantic-ui-react'
import Step from './process/Step'
export default () => (
  <Process.Group size="large">
    <Step
      active
      icon="database"
      title="Amount"
      description="Choose your amounts"
    />
    <Step
      disabled
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
)
