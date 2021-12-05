import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyA8z93GFGnBeGeYSUD3WTQ1G2fI6TXAyf8",
  authDomain: "messenger-62072.firebaseapp.com",
  projectId: "messenger-62072",
  storageBucket: "messenger-62072.appspot.com",
  messagingSenderId: "1008642704759",
  appId: "1:1008642704759:web:63a966e02f58fae58d4d72",
}).auth()