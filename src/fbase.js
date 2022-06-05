import  firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlT5SM3GijdUq9UiCSydmAFxEPJF-u0c4",
  authDomain: "nwitter-v.firebaseapp.com",
  projectId: "nwitter-v",
  storageBucket: "nwitter-v.appspot.com",
  messagingSenderId: "515417718199",
  appId: "1:515417718199:web:2da021c43f39c47e7e3c32"
};

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
export const firebaseInstance = firebase;
