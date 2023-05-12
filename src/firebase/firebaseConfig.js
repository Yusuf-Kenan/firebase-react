// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB212OUyJ5XCtvXBMQ823Af9LmUpIGCh3U",
  authDomain: "chatroom-7838e.firebaseapp.com",
  projectId: "chatroom-7838e",
  storageBucket: "chatroom-7838e.appspot.com",
  messagingSenderId: "172597146826",
  appId: "1:172597146826:web:f38f21ebd09554bce47033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();