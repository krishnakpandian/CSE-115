import firebase from './firebaseConfig';

//get google auth provider
const provider = new firebase.auth.GoogleAuthProvider();

//get firebase database 
const db = firebase.firestore(); 

/* Function logs in user with their google email
   Has no arguments and returns nothing
   Creates a database entry for that user
*/
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
      console.log("Doc completion notification.")
    });
  
  }).catch((error) => {
    // Errors
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
  
  });
}

export default newGoogleUser;