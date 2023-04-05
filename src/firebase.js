
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const API_KEY = process.env.REACT_APP_YT_API_KEY;
const firebaseConfig = {
    apiKey:API_KEY ,
    authDomain: "balagowda-yt-clone.firebaseapp.com",
    projectId: "balagowda-yt-clone",
    storageBucket: "balagowda-yt-clone.appspot.com",
    messagingSenderId: "1054882542397",
    appId: "1:1054882542397:web:f12f0f30c7ea7a40c38b54",
    measurementId: "G-VPQWL0KF38"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();