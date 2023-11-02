import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB68EskIJDJzgnotN1OBrx83NHAphMpyI8",
    authDomain: "fir-auth-mb.firebaseapp.com",
    projectId: "fir-auth-mb",
    storageBucket: "fir-auth-mb.appspot.com",
    messagingSenderId: "94871544247",
    appId: "1:94871544247:web:9137a9e0f7966ac8558832"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);



