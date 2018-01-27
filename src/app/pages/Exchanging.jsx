import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import ExchangeProcess from '../components/exchanging/ExchangeProcess'
import Amounts from '../components/exchanging/Amounts'
import Recipient from '../components/exchanging/Recipient'
import Confirmation from '../components/exchanging/Confirmation'

const stages = [Amounts, Recipient, Confirmation]
export default class extends Component {
  state = { stage: 0, maxStage: 0 }
  pushStage = () => {
    if (this.state.stage === this.state.maxStage)
      this.setState(prevState => ({ maxStage: prevState.maxStage + 1 }))
    this.setState(prevState => ({ stage: prevState.stage + 1 }))
  }
  render() {
    const Stage = stages[this.state.stage]
    return (
      <div>
        <Segment
          vertical
          style={{ backgroundColor: '#0d141d', padding: '2.5rem' }}
        />
        <Segment
          vertical
          style={{
            backgroundColor: '#f5f5f5',
            height: '93vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <ExchangeProcess
            stage={this.state.stage}
            maxStage={this.state.maxStage}
            gotoStage={stage => this.setState({ stage })}
          />
          <Stage pushStage={this.pushStage} />
        </Segment>
      </div>
    )
  }
}
