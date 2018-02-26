import React from 'react'
import { Icon } from 'semantic-ui-react'
import { digitsAfterDot } from '../../../../pureFunctions'

export default ({ rate }) => {
  const color = rate.percent_change_24h > 0 ? 'green' : 'red'
  const icon = rate.percent_change_24h > 0 ? 'up arrow' : 'down arrow'
  return (
    <div className="rate">
      <div style={{ margin: '1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <h2 style={{ margin: 0 }}>
            {rate.symbol} <Icon name={icon} color={color} />{' '}
          </h2>
          <h3 style={{ margin: 0 }}>
            {digitsAfterDot(rate.percent_change_24h, 2)}%
          </h3>
        </div>
        <h3 style={{ margin: 0 }}>{digitsAfterDot(rate.price_ils, 2)} ILS</h3>
        <h4 style={{ margin: 0 }}>Ranking: {rate.rank}</h4>
      </div>
    </div>
  )
}
