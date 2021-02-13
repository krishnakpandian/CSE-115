import firebase from 'firebase';
import {firebaseConfig} from './firebaseConfig'

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore(); 

async function newGoogleUser() {
  let uid: string | undefined;
  firebase.auth().signInWithRedirect(provider);

  firebase.auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential as firebase.auth.OAuthCredential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
      }
      // The signed-in user info.
      const user = result.user;
      uid = result.user?.uid;
      db.collection("Users").doc(uid).set({
        name: "Google User!"
      })
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      
      const credential = error.credential;
    });
}

export default newGoogleUser;