import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default withRouter(({ staticContext, history, ...props }) => (
  <Button
    {...props}
    labelPosition="right"
    icon="right arrow"
    size="big"
    style={{
      color: 'white',
      backgroundColor: '#faa61a'
    }}
    onClick={() => history.push('/')}
    content="Return to Homepage"
  />
))
