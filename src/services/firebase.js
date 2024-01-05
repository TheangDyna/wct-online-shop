import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRXIsmOQyRsxGdTIv9Uk7Fy67Uk-I665g",
  authDomain: "wct-online-shop.firebaseapp.com",
  projectId: "wct-online-shop",
  storageBucket: "wct-online-shop.appspot.com",
  messagingSenderId: "226251132607",
  appId: "1:226251132607:web:af09c5a4540caafbd8400a",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };
