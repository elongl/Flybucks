import React from 'react'
import { observer } from 'mobx-react'
import store from '../../../store'
import NextButton from './NextButton'
import ThemedInput from '../common/ThemedInput'
export default observer(({ pushStage }) => (
  <div>
    <h1 style={{ fontWeight: 300 }}>
      Enter the recipient's {store.receive.currency.name} address
    </h1>

    <ThemedInput
      label="enter recipient address"
      onChange={event => (store.recipientAddress = event.target.value)}
      value={store.recipientAddress}
      containerStyle={{ boxShadow: '3px 3px 5px 6px #ccc' }}
      inputStyle={{ width: '35vw' }}
    />
    <NextButton pushStage={pushStage} />
  </div>
))
