import * as firebase from 'firebase'
import Alert from 'sweetalert2'

class Firebase {
  loggedInAlert() {
    Alert({
      position: 'top-right',
      type: 'success',
      title: 'Your are now logged in',
      showConfirmButton: false,
      timer: 1500
    })
  }

  catchAlert(error) {
    Alert(error.code, error.message, 'error')
  }

  initializeApp() {
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

  async signInWithEmailAndPassword(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass)
      this.loggedInAlert()
    } catch (err) {
      this.catchAlert(err)
    } finally {
      return firebase.auth().currentUser
    }
  }

  async createUserWithEmailAndPassword(email, pass, displayName) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass)
      await firebase.auth().currentUser.updateProfile({ displayName })
      this.loggedInAlert()
    } catch (err) {
      this.catchAlert(err)
    } finally {
      return firebase.auth().currentUser
    }
  }

  async createUserWithSocialNetwork(socialNetwork) {
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
    try {
      await firebase.auth().signInWithPopup(provider)
      this.loggedInAlert()
    } catch (err) {
      this.catchAlert(err)
    }
  }

  authenticationState(signedIn, signedOut) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) signedIn()
      else signedOut()
    })
  }

  async resetPassword(email) {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      Alert(
        'Password Reseted!',
        'Your new password was sent to your email!',
        'success'
      )
    } catch (err) {
      this.catchAlert(err)
    }
  }

  getCurrentUser() {
    return firebase.auth().currentUser
  }

  signOut() {
    firebase.auth().signOut()
  }
}
export default new Firebase()
