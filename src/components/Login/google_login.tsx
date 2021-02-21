import firebase from '../Signup/firebaseConfig'

const provider = new firebase.auth.GoogleAuthProvider();

async function loginGoogleUser(): Promise<boolean> {
  let uid: string | undefined;

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    //const credential = result.credential as firebase.auth.OAuthCredential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    //const token = credential.accessToken;
    // The signed-in user info.
    //const user = result.user;
    // uid = result.user?.uid;
    // ...
  }).catch((error) => {
    console.log(error)
    // Handle Errors here.
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    //const credential = error.credential;
    // ...
  });

    const user = firebase.auth().currentUser;
    if (user) {
        return true;
    } else {
        return false;
    }
}

export default loginGoogleUser;