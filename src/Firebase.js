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
  signInWithEmailAndPassword = async (email, pass) => {
    return await firebase.auth().signInWithEmailAndPassword(email, pass)
  }
  createUserWithEmailAndPassword = async (email, pass) => {
    return await firebase.auth().createUserWithEmailAndPassword(email, pass)
  }
}
export default new Firebase()
