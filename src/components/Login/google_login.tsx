import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

async function loginGoogleUser(): Promise<boolean> {
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
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      
      const credential = error.credential;
    });

    const user = firebase.auth().currentUser;
    if (user) {
        return true;
    } else {
        return false;
    }
}

export default loginGoogleUser;