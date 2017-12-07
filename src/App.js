import React from 'react'
import Header from './Header'
import Info from './Info'
import firebase from './Firebase'

export default () => (
  <div>
    <Header />
    <Info />
  </div>
)
firebase.initializeApp()
