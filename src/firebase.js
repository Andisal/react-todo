import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyA_ooi0atPuu84e_nMjsivURJxSMUuhyfY",
    authDomain: "todolist-493dd.firebaseapp.com",
    databaseURL: "https://todolist-493dd.firebaseio.com",
    projectId: "todolist-493dd",
    storageBucket: "todolist-493dd.appspot.com",
    messagingSenderId: "1093781087005"
  };
export const firebaseApp = firebase.initializeApp(config);