import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBWcHs5-_7DITtl0I88LTWE89xJCmAR_8c",
    authDomain: "perez-negocios.firebaseapp.com",
    databaseURL: "https://perez-negocios.firebaseio.com",
    projectId: "perez-negocios",
    storageBucket: "perez-negocios.appspot.com",
    messagingSenderId: "424497076546",
    appId: "1:424497076546:web:029100663e54ee5e03d0db"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);