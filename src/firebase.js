import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfOONHZBsOMudglVvbpChnRtLtZhMtNpU",
  authDomain: "netflix-clone-v3-1ce46.firebaseapp.com",
  projectId: "netflix-clone-v3-1ce46",
  storageBucket: "netflix-clone-v3-1ce46.appspot.com",
  messagingSenderId: "574824688398",
  appId: "1:574824688398:web:1791c0e260325f523b855f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
