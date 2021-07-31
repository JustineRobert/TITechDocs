import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOT6ZWzCTampubEZRng8NlwQxfHIzhatA",
  authDomain: "titech-docs.firebaseapp.com",
  projectId: "titech-docs",
  storageBucket: "titech-docs.appspot.com",
  messagingSenderId: "54224862090",
  appId: "1:54224862090:web:94c3a4ba447ff2db052673"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };