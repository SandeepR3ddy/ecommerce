import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyB2FB5WzTOkodwBi6dn0W7OcXXpMnOQhNE",
  authDomain: "ecommerce-e7dfa.firebaseapp.com",
  projectId: "ecommerce-e7dfa",
  storageBucket: "ecommerce-e7dfa.appspot.com",
  messagingSenderId: "958348381833",
  appId: "1:958348381833:web:875d78623f6500ec018058"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);