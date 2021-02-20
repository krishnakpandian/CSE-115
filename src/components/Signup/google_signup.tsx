import firebase from './firebaseConfig';

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore(); 

async function newGoogleUser() {
  let uid: string | undefined;


  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential as firebase.auth.OAuthCredential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    uid = result.user?.uid;
    db.collection("Users").doc(uid).set({
      name: "Google User!"
    }).then(function() {
      window.alert("Doc completion notification.")
    });
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}

export default newGoogleUser;