import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp ({
authDomain: "messenger-36860.firebaseapp.com",
  projectId: "messenger-36860",
  storageBucket: "messenger-36860.appspot.com",
  messagingSenderId: "80849921731",
  appId: "1:80849921731:web:b40418d9cdedee6215e476",
  measurementId: "G-FKJD505F05"
}).auth()
