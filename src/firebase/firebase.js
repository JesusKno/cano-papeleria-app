import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const fireBaseCredentials = {
    apiKey: "AIzaSyATmTIKZgcPBvmNve827LGJAMm02G0aQzA",
    authDomain: "papeleria-cano.firebaseapp.com",
    projectId: "papeleria-cano",
    storageBucket: "papeleria-cano.appspot.com",
    messagingSenderId: "551399334841",
    appId: "1:551399334841:web:64dd63be09bce71be2cc68"
};

const app = initializeApp(fireBaseCredentials);

export const db = getFirestore(app);