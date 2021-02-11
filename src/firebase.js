import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPZXOxhR9k6j4GKh4TB7VQy9066_4qx_4",
  authDomain: "netflix-clone-62f03.firebaseapp.com",
  databaseURL: "https://netflix-clone-62f03-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-62f03",
  storageBucket: "netflix-clone-62f03.appspot.com",
  messagingSenderId: "876951169405",
  appId: "1:876951169405:web:f9b117724c13ed0cac8414",
  measurementId: "G-QWBL84GN9S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
