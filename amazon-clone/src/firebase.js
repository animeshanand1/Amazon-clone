
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTwPCKMJHTjtCo4WC_QfNCKn8Y4uyBcY0",
    authDomain: "clone-770c3.firebaseapp.com",
    projectId: "clone-770c3",
    storageBucket: "clone-770c3.appspot.com",
    messagingSenderId: "811684008496",
    appId: "1:811684008496:web:8311543a355a18947393f5",
    measurementId: "G-DBQWW9C3LL"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};