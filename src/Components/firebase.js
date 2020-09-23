import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDwlbq9G1Kt05syi2ByQiR0Dj1uexGRlHA",
    authDomain: "project-6a3e6.firebaseapp.com",
    databaseURL: "https://project-6a3e6.firebaseio.com",
    projectId: "project-6a3e6",
    storageBucket: "project-6a3e6.appspot.com",
    messagingSenderId: "167330002002",
    appId: "1:167330002002:web:a41bede92332338e295b8b",
    measurementId: "G-V18GPNS4QX"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;