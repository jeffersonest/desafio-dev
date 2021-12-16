import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhfRHAljnhV-KO7VRcP6qGtF2PnDiu2CE",
  authDomain: "desafios-456d1.firebaseapp.com",
  projectId: "desafios-456d1",
  storageBucket: "desafios-456d1.appspot.com",
  messagingSenderId: "1008261652893",
  appId: "1:1008261652893:web:8f2d3fcaa7d8ad15558f74",
  measurementId: "G-EPNXDKBGBN",
};

export const App = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();
