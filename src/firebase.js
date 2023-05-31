 import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBuQDlsz4a4R4A4uQ2wt_l02QyAoo_Cdfk",
    authDomain: "linkedin-clone-yt-e289b.firebaseapp.com",
    projectId: "linkedin-clone-yt-e289b",
    storageBucket: "linkedin-clone-yt-e289b.appspot.com",
    messagingSenderId: "204721341208",
    appId: "1:204721341208:web:ee9460b32dd289d4c9946d",
    measurementId: "G-QSZB2N00XW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
