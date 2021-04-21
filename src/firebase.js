import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA8lvWLV14ldKvKKiyL6YaoAD0Rk9jkJ1o",
    authDomain: "netflix-clone-e77b9.firebaseapp.com",
    projectId: "netflix-clone-e77b9",
    storageBucket: "netflix-clone-e77b9.appspot.com",
    messagingSenderId: "419302831865",
    appId: "1:419302831865:web:e85fb512b9f742016f5428",
    measurementId: "G-WMRVBG23MF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;