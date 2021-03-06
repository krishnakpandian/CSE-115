import firebase from '../Signup/firebaseConfig'

//get google auth provider


/* Function logs in google user
  Takes no arguments
  Returns true for successful login, false otherwise
  Same login as when signing up google user, except
  a database doc is not created
*/
export async function loginGoogleUser(): Promise<boolean> {
  let uid: string | undefined;
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    
    uid = result.user?.uid;
    console.log(uid);
  }).catch((error) => {
    console.log(error.message);
  });

    const user = firebase.auth().currentUser;
    if (user) {
        return true;
    } else {
        return false;
    }
}

export default loginGoogleUser;