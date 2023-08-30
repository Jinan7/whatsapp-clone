// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/compat/database'
const firebaseConfig = {
    apiKey: "AIzaSyA5KRybIC6bTXaxUfLew-CM2VdPH4YG8fA",
    authDomain: "whatsapp-clone-a78a2.firebaseapp.com",
    projectId: "whatsapp-clone-a78a2",
    storageBucket: "whatsapp-clone-a78a2.appspot.com",
    messagingSenderId: "334764400513",
    appId: "1:334764400513:web:73612535f8cc8229a79280",
    measurementId: "G-RG9L4WZSZG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider, db}
