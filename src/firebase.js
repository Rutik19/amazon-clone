import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTX5MtTvc6CAQqlTKH68VODu3MNO1QrSU",
  authDomain: "clone-7f5bc.firebaseapp.com",
  projectId: "clone-7f5bc",
  storageBucket: "clone-7f5bc.appspot.com",
  messagingSenderId: "154779852116",
  appId: "1:154779852116:web:21973afd85e2c8539b3cc1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
