import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
        apiKey: "AIzaSyApjWd4S8KPuT4rOuG4sGutgiUiO9gWAig",
        authDomain: "design-dimensions.firebaseapp.com",
        projectId: "design-dimensions",
        storageBucket: "design-dimensions.appspot.com",
        messagingSenderId: "757801068530",
        appId: "1:757801068530:web:a725dee25d74373baded6b"
})
export const getFirebase = firebase
export const getFirestore = firebase.firestore(app)

export default app