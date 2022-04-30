import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();