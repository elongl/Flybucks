import React from 'react'
import { Icon } from 'semantic-ui-react'
import store from '../../../store'
import CopyToClipboard from 'react-copy-to-clipboard'
import QRCode from 'qrcode.react'

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <h3>Transaction ID: {store.transactionInformation.id}</h3>
    <h1 style={{ fontWeight: 300 }}>
      Send {store.deposit.value} {store.deposit.currency.symbol} to the address
      below
    </h1>

    <CopyToClipboard text={store.transactionInformation.payinAddress}>
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        <a style={{ borderBottom: '1px dotted #000', color: 'black' }}>
          {store.transactionInformation.payinAddress}
        </a>
        <Icon name="copy" size="large" />
      </div>
    </CopyToClipboard>
    <div
      style={{
        marginTop: '5rem',
        backgroundColor: 'white',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2 style={{ color: '#faa61a' }}>Scan QR-Code</h2>
      <QRCode value={store.transactionInformation.payinAddress} size={275} />
    </div>
  </div>
)
