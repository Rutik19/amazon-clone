import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbigCIQYqzkhWx26qE90-efGvfd72wraw",
  authDomain: "clone1-e6a0a.firebaseapp.com",
  projectId: "clone1-e6a0a",
  storageBucket: "clone1-e6a0a.appspot.com",
  messagingSenderId: "60461712582",
  appId: "1:60461712582:web:8739d4e2cd600aa07a83c7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };