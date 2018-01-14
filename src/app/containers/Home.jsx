import React from 'react'
import Header from '../components/home/Header'
import Information from '../components/home/Information'
import Reviews from '../components/home/Reviews'
import Rates from '../components/home/Rates'
import Novelty from '../components/home/Novelty'

export default props => {
  if (props.authenticated === undefined) return null
  return (
    <div>
      <Header authenticated={props.authenticated} />
      <Rates />
      <Information />
      <Reviews />
      <Novelty />
    </div>
  )
}
