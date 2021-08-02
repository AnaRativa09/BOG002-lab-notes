import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDhPMBRNUnilaEtaSwsAaf4qmCUWG184Ug',
  authDomain: 'notesapp-42ab2.firebaseapp.com',
  projectId: 'notesapp-42ab2',
  storageBucket: 'notesapp-42ab2.appspot.com',
  messagingSenderId: '666905615704',
  appId: '1:666905615704:web:94a1d30f996e506b0ed92d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {
  firebase, auth, db, storage,
};
