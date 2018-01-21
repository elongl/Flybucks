import React, { Component } from 'react'
import { Transition, Visibility } from 'semantic-ui-react'

export default class extends Component {
  state = { visible: false }
  render() {
    return (
      <Visibility
        once={true}
        onTopVisible={() => this.setState({ visible: true })}
      >
        <Transition
          visible={this.state.visible}
          duration={this.props.duration || 1000}
          animation={this.props.animation}
        >
          {this.props.children}
        </Transition>
      </Visibility>
    )
  }
}
