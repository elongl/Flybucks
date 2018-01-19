import React from 'react'
import Header from '../components/home/Header'
import Information from '../components/home/Information'
import Reviews from '../components/home/Reviews'
import Rates from '../components/home/Rates'
import Novelty from '../components/home/Novelty'

// check if possible to remove prop equals
export default ({ state, changeValue, changeCurrency }) => (
  <div>
    <Header
      changeValue={changeValue}
      changeCurrency={changeCurrency}
      state={state}
    />
    <Rates />
    <Information />
    <Reviews />
    <Novelty />
  </div>
)
