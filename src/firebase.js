import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkVgh83CjIrWZpzXprQp_dpey00auK5xY",
  authDomain: "shikujiri-b81a8.firebaseapp.com",
  projectId: "shikujiri-b81a8",
  storageBucket: "shikujiri-b81a8.appspot.com",
  messagingSenderId: "713114151973",
  appId: "1:713114151973:web:25e797288b94a175b4e3cc",
  measurementId: "G-C8L6CJX8MG",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
