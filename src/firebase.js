import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDEzigCfRDUiOrtr8_mmUqXuKoYr93aR4",
    authDomain: "e-794bc.firebaseapp.com",
    projectId: "e-794bc",
    storageBucket: "e-794bc.appspot.com",
    messagingSenderId: "370588536136",
    appId: "1:370588536136:web:8d0fb77b1bf0a82af9777d",
    measurementId: "G-XS37J30D3J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }