import React, { Component } from 'react'
import { Transition, Visibility } from 'semantic-ui-react'

export default class extends Component {
  state = { visible: false }
  render() {
    return (
      <Visibility once onBottomVisible={() => this.setState({ visible: true })}>
        <Transition
          mountOnShow={false}
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
