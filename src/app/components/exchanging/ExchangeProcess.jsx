import React from 'react'
import { Step as Process } from 'semantic-ui-react'
import Step from './process/Step'
export default ({ stage, maxStage, gotoStage }) => (
  <Process.Group size="large" style={{ marginBottom: '5rem' }}>
    {[
      {
        stage: 0,
        icon: 'database',
        title: 'Amount',
        description: 'Choose your amounts'
      },
      {
        stage: 1,
        icon: 'id card outline',
        title: 'Recipient',
        description: 'Enter payee address'
      },
      {
        stage: 2,
        icon: 'info',
        title: 'Confirm Transaction',
        description: 'Review your order'
      },
      {
        stage: 3,
        icon: 'payment',
        title: 'Billing',
        description: 'Send your funds'
      },
      {
        stage: 4,
        icon: 'rocket',
        title: 'Exchanging'
      }
    ].map(step => (
      <Step
        key={step.title}
        icon={step.icon}
        stage={step.stage}
        title={step.title}
        description={step.description}
        active={step.stage === stage}
        disabled={step.stage > maxStage}
        gotoStage={gotoStage}
      />
    ))}
  </Process.Group>
)
