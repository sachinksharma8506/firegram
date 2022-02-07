import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC10ZBb0dI7Z_vlv7Wobcf1DaeakvGofUg",
  authDomain: "firegram-01.firebaseapp.com",
  projectId: "firegram-01",
  storageBucket: "firegram-01.appspot.com",
  messagingSenderId: "786310976073",
  appId: "1:786310976073:web:8ce3107facd3f88f48a598"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
console.log('projectStorage', projectStorage)
export {projectStorage, projectFirestore, timeStamp};