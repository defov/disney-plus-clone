import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYbiW53WzK5tydTMksZdZPN-0tDi6IMBw",
    authDomain: "react-docs-a5876.firebaseapp.com",
    projectId: "react-docs-a5876",
    storageBucket: "react-docs-a5876.appspot.com",
    messagingSenderId: "452727086900",
    appId: "1:452727086900:web:2ef5047d7b0ba7f3628f61"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth, provider, storage }
export default db;
