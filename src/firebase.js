import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9ib3Aa5pRZu_Lc8jzyyN4_XaO_VcJzKU",
    authDomain: "richardtube-844fb.firebaseapp.com",
    projectId: "richardtube-844fb",
    storageBucket: "richardtube-844fb.appspot.com",
    messagingSenderId: "226162629536",
    appId: "1:226162629536:web:e69c04ebc2f96a33ace2c5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider().addScope("https://www.googleapis.com/auth/youtube.force-ssl");

export { auth, db, provider };