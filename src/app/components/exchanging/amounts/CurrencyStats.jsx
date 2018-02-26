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
      rightText={`1 ${store.from.currency !== undefined &&
        store.from.currency.symbol} = ${store.rate !== undefined &&
        digitsAfterDot(store.rate)} ${store.to.currency !== undefined &&
        store.to.currency.symbol}`}
    />
    <GridSection leftText="estimated arrival" rightText="≈ 5-30 minutes" />
    <GridSection leftText="network fee" rightText={'0.5%'} />
  </Grid>
))
