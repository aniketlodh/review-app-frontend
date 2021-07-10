import firebase from 'firebase/app'
import "firebase/auth"
const app = firebase.initializeApp({
    apiKey: "AIzaSyALgxWgT1VP8kEn61uBqGuldyuqlYah3FU",
    authDomain: "review-8f9f4.firebaseapp.com",
    projectId: "review-8f9f4",
    storageBucket: "review-8f9f4.appspot.com",
    messagingSenderId: "402449857750",
    appId: "1:402449857750:web:11ed26b4729c79e5431d77"
});

export const auth = app.auth()
export default app;
