import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGRRylNuBruFind2NPp6miHz9wnfLpprQ",
  authDomain: "darazfronend.firebaseapp.com",
  projectId: "darazfronend",
  storageBucket: "darazfronend.appspot.com",
  messagingSenderId: "804287887577",
  appId: "1:804287887577:web:c9bf918065824ae7a3e6c8",
  measurementId: "G-V3DZ82Q6XS"
  };

  const firebasseApp = firebase.initializeApp(firebaseConfig);
  const  auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  const providers = new firebase.auth.FacebookAuthProvider();

  export{auth,provider,providers};


  // secretid
  // 2123243566788678