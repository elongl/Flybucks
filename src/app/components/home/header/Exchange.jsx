import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import ExchangeField from './exchange/ExchangeField'
import { withRouter } from 'react-router-dom'

export default withRouter(props => (
  <div
    id={props.id}
    style={{
      marginTop: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}
  >
    <ExchangeField type="from" style={props.style} />
    <Icon
      name="exchange"
      size="big"
      color="yellow"
      style={{ margin: '0rem 1rem', marginBottom: '0.5rem' }}
    />
    <ExchangeField type="to" style={props.style} />

    {!props.loadedFromExchanging && (
      <Button
        labelPosition="right"
        content="Exchange"
        icon="right arrow"
        size="huge"
        onClick={() => props.history.push('/exchange')}
        style={{
          padding: '0.9em 0',
          margin: '1.5rem',
          color: 'white',
          backgroundColor: '#faa61a'
        }}
      />
    )}
  </div>
))
