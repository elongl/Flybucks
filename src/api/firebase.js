import * as firebase from 'firebase'
class Firebase {
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
  signInWithEmailAndPassword = (email, pass) =>
    firebase.auth().signInWithEmailAndPassword(email, pass)

  createUserWithEmailAndPassword = (email, pass) =>
    firebase.auth().createUserWithEmailAndPassword(email, pass)

  createUserWithSocialNetwork = socialNetwork => {
    let provider
    switch (socialNetwork) {
      case 'Google':
        provider = new firebase.auth.GoogleAuthProvider()
        break
      case 'Facebook':
        provider = new firebase.auth.FacebookAuthProvider()
        break
      case 'Twitter':
        provider = new firebase.auth.TwitterAuthProvider()
        break
      default:
        provider = undefined
    }
    firebase.auth().signInWithPopup(provider)
  }

  authenticationState = (signedIn, signedOut) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) signedIn()
      else signedOut()
    })
  }
  getCurrentUser = () => firebase.auth().currentUser
  updateProfile = profileObject =>
    firebase.auth().currentUser.updateProfile(profileObject)

  signOut = () => firebase.auth().signOut()
}
export default new Firebase()
