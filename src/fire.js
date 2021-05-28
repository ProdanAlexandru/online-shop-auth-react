import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBTHyW3sX-PObWOO-GwYl4clevHf3X120I",
    authDomain: "loginregister-8316a.firebaseapp.com",
    projectId: "loginregister-8316a",
    storageBucket: "loginregister-8316a.appspot.com",
    messagingSenderId: "204685145531",
    appId: "1:204685145531:web:382be68bb2ee2523a5c09e"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;