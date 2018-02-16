import React from 'react'
import { Grid } from 'semantic-ui-react'
import GridSection from '../GridSection'
import { observer } from 'mobx-react'
import { digitsAfterDot } from '../../../../pureFunctions'
import store from '../../../../store'

export default observer(() => (
  <Grid divided style={{ margin: '2rem' }}>
    <GridSection
      leftText="exchange rate"
      rightText={`1 ${store.deposit.currency !== undefined &&
        store.deposit.currency.symbol} = ${store.rate !== undefined &&
        digitsAfterDot(store.rate, 6)} ${store.receive.currency !== undefined &&
        store.receive.currency.symbol}`}
    />
    <GridSection leftText="estimated arrival" rightText="≈ 5-30 minutes" />
    <GridSection leftText="network fee" rightText={'0.5%'} />
  </Grid>
))
