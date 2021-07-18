import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDGx-jqFAMqDIkwkleDWKUgIGuMh0Pa2DI",
    authDomain: "my-react-app-1ef26.firebaseapp.com",
    projectId: "my-react-app-1ef26",
    storageBucket: "my-react-app-1ef26.appspot.com",
    messagingSenderId: "489176526956",
    appId: "1:489176526956:web:864ea04a46de12b700a849",
    measurementId: "G-ZMF7QC8DXP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase