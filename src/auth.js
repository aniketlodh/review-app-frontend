import { firebase,googleAuthProvider } from './firebase'

export const startlogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}