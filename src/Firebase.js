import * as firebase from 'firebase'
class Firebase {
  // Add Responses On Promises.
  initializeApp = () => {
    const config = {
      apiKey: 'AIzaSyADdETym8W1dE0Bzz0XW2j5qyDtJo0qx6U',
      authDomain: 'coin-exchange-dd8dc.firebaseapp.com',
      databaseURL: 'https://coin-exchange-dd8dc.firebaseio.com',
      projectId: 'coin-exchange-dd8dc',
      storageBucket: 'coin-exchange-dd8dc.appspot.com',
      messagingSenderId: '231796294178'
    }
    firebase.initializeApp(config)
  }

  signInWithEmailAndPassword = (email, pass) => {
    return firebase.auth().signInWithEmailAndPassword(email, pass)
  }

  createUserWithEmailAndPassword = (email, pass) => {
    return firebase.auth().createUserWithEmailAndPassword(email, pass)
  }

  authenticationState = (signedIn, signedOut) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) signedIn()
      else signedOut()
    })
  }

  updateProfile = profileObject =>
    firebase.auth().currentUser.updateProfile(profileObject)

  signOut = () => firebase.auth().signOut()
}
export default new Firebase()
