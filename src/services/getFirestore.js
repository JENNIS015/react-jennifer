import firebase from "firebase/app"

 
const firebaseConfig = {
  apiKey: "AIzaSyCVhTcQ9sFFeuKSLrJZiVSHL8fREIqs63U",
  authDomain: "react-jennifer.firebaseapp.com",
  projectId: "react-jennifer",
  storageBucket: "react-jennifer.appspot.com",
  messagingSenderId: "262726968128",
  appId: "1:262726968128:web:cb5036082bafd8331190a5"
};

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}