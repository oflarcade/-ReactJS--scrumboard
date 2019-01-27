import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyDU4Y6npYkR05gf5NryEuImE8Q6CtDW8xg",
    authDomain: "tclesprit.firebaseapp.com",
    databaseURL: "https://tclesprit.firebaseio.com",
    projectId: "tclesprit",
    storageBucket: "tclesprit.appspot.com",
    messagingSenderId: "531062767588"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;