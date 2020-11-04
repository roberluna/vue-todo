import firebase from 'firebase/app'
import "firebase/firestore"

  const firebaseConfig = {
    apiKey: "AIzaSyAXl9T302Uuvl4VsYlNkHiol-2OXcsLx2w",
    authDomain: "ejemplo-vue-171ba.firebaseapp.com",
    databaseURL: "https://ejemplo-vue-171ba.firebaseio.com",
    projectId: "ejemplo-vue-171ba",
    storageBucket: "ejemplo-vue-171ba.appspot.com",
    messagingSenderId: "640544758167",
    appId: "1:640544758167:web:767222f77336e6244d4cd2"
  };
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()