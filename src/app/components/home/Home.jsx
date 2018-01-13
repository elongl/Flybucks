import React from 'react'
import Header from './Header'
import Information from './Information'
import Reviews from './Reviews'
import CryptoRates from './CryptoRates'
import Novelty from './Novelty'

export default props => {
  if (props.authenticated === undefined) return null
  return (
    <div>
      <Header authenticated={props.authenticated} />
      <CryptoRates />
      <Information />
      <Reviews />
      <Novelty />
    </div>
  )
}
