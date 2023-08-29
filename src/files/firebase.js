 import firebase from 'firebase';
 
 var firebaseConfig = {
  apiKey: "AIzaSyDdxiDRL15wUO7OWMHzDJfH-zkss4PbTgI",
  authDomain: "movieticketbookingapp-bd085.firebaseapp.com",
  projectId: "movieticketbookingapp-bd085",
  storageBucket: "movieticketbookingapp-bd085.appspot.com",
  messagingSenderId: "721527643900",
  appId: "1:721527643900:web:3205763210ad631c2f0179",
  measurementId: "G-Z6S1B7P0TZ"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;