import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/analytics"

// Config
const firebaseConfig = {
  apiKey: "AIzaSyCpfJhqjVGBNuPbjz6FnXbrWNZWSXm9TUA",
  authDomain: "petmatcher-backend.firebaseapp.com",
  projectId: "petmatcher-backend",
  storageBucket: "petmatcher-backend.appspot.com",
  messagingSenderId: "697369941891",
  appId: "1:697369941891:web:fccf692efdb7c2af7888b6",
  measurementId: "G-J593HHMN70"
};

// Initialize firebase
if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig)
}

// Services reference
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

// GET functions
export async function getTestData() {
    const testRef = firestore.collection("test")
    const testQuery = testRef.limit(1)
    const testDoc = (await testQuery.get()).docs[0]
    return testDoc
}