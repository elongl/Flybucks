import React from 'react'
import { Grid } from 'semantic-ui-react'
import GridSection from './CurrencyStats/GridSection'
export default () => (
  <Grid divided style={{ margin: '2rem' }}>
    <GridSection leftText="exchange rate" rightText="1 BTC = 2.34455345 ETH" />
    <GridSection leftText="network fee (0.5%)" rightText="Something" />
    <GridSection leftText="estimated arrival" rightText="≈ 5-30 minutes" />
  </Grid>
)
