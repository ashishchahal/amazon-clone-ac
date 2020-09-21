import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkPZIv7trqXHhP7owK2YLkVgmH-FAye5g",
  authDomain: "clone-ac-271d9.firebaseapp.com",
  databaseURL: "https://clone-ac-271d9.firebaseio.com",
  projectId: "clone-ac-271d9",
  storageBucket: "clone-ac-271d9.appspot.com",
  messagingSenderId: "1028129715723",
  appId: "1:1028129715723:web:d3f88365b7828287def90e",
  measurementId: "G-L6QNYRH2T4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
