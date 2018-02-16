import React from 'react'
import { observer } from 'mobx-react'
import store from '../../../store'
import { Button } from 'semantic-ui-react'
import ThemedLabel from '../common/ThemedLabel'
import { digitsAfterDot } from '../../../pureFunctions'

const DetailLabel = ({ label, value, inputStyle }) => (
  <ThemedLabel
    value={value}
    label={label}
    inputStyle={{ textAlign: 'right', ...inputStyle }}
  />
)
const Grid = ({ children }) => (
  <div
    style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column' }}
  >
    {children}
  </div>
)
export default observer(({ pushStage }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h1 style={{ fontWeight: 300, marginBottom: '2rem' }}>
      Check all the details before processing
    </h1>
    <Grid>
      {[
        {
          label: 'you have',
          value: `${store.deposit.value} ${store.deposit.currency.symbol}`
        },
        {
          label: 'you get',
          value: `${store.receive.value} ${store.receive.currency.symbol}`
        },
        {
          label: 'recipient address',
          value: store.recipientAddress,
          inputStyle: { fontSize: '1rem' }
        }
      ].map(section => <DetailLabel {...section} key={section.label} />)}
    </Grid>

    <Grid>
      {[
        {
          label: 'expected exchange rate',
          value: `1 ${store.deposit.currency.symbol} = ${store.rate} ${
            store.receive.currency.symbol
          }`
        },
        {
          label: 'commission included (0.5%)',
          value: `${digitsAfterDot(store.receive.value * 0.5 / 100, 6)} ${
            store.receive.currency.symbol
          }`
        },
        {
          label: 'estimated arrival',
          value: '≈ 5-30 minutes'
        }
      ].map(section => <DetailLabel {...section} key={section.label} />)}
    </Grid>
    <Button
      content="Confirm Transaction"
      color="orange"
      size="huge"
      onClick={pushStage}
    />
  </div>
))
