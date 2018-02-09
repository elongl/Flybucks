import React, { Component } from 'react'
import { Transition, Visibility } from 'semantic-ui-react'

export default class extends Component {
  state = { visible: false }
  render() {
    return (
      <Visibility once onOnScreen={() => this.setState({ visible: true })}>
        <Transition
          visible={this.state.visible}
          duration={this.props.duration || 1500}
          animation={this.props.animation}
        >
          {this.props.children}
        </Transition>
      </Visibility>
    )
  }
}
