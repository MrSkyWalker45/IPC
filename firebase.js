import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';                                                                   
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkcprhqKlMoied_zsWfDQq-f_rwS5jjCM",
  authDomain: "internationalpresscorps-d7c0d.firebaseapp.com",
  projectId: "internationalpresscorps-d7c0d",
  storageBucket: "internationalpresscorps-d7c0d.appspot.com",
  messagingSenderId: "399163018348",
  appId: "1:399163018348:web:7dfdbbb1d6eb1f27fddc49"
};

// Initialize Firebase


let app; 
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}                                     
else{
  app = firebase.app();
}                     

const db = app.firestore(); 
const auth = firebase.auth();
const storage = getStorage(app); 

export {db,auth,storage};
