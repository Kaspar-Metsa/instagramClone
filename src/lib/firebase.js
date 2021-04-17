import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// replace these with your own config values from Firebase!
const config = {
  apiKey: 'AIzaSyDAaGZ-dT-IwFPKX3_26Trz0Wie1rqr_Yg',
  authDomain: 'instagram-myshkin.firebaseapp.com',
  projectId: 'instagram-myshkin',
  storageBucket: 'instagram-myshkin.appspot.com',
  messagingSenderId: '405929542321',
  appId: '1:405929542321:web:fc2d0242f56c41477ad890'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
