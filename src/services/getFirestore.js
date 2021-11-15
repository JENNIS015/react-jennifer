import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA5d1EVYPjoNZ_Nt7pI1fNcBJcC5dap0pg",
    authDomain: "react-proyecto-jennifer.firebaseapp.com",
    projectId: "react-proyecto-jennifer",
    storageBucket: "react-proyecto-jennifer.appspot.com",
    messagingSenderId: "435806527897",
    appId: "1:435806527897:web:107a79dc1841febd4ef308"
  };

  

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}