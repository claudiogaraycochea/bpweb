import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxx6dbDRxo6owVIEMoTJ8-zRu4C_h_Rtg",
  authDomain: "xnextplay-ea1ba.firebaseapp.com",
  projectId: "xnextplay-ea1ba",
  storageBucket: "xnextplay-ea1ba.appspot.com",
  messagingSenderId: "255794430106",
  appId: "1:255794430106:web:fcfbf8fcfd0b9a85199f23"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;