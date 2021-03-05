import firebase from './firebaseConfig';


//get firebase database 
const db = firebase.firestore(); 

/* Function logs in user with their google email
   Has no arguments and returns nothing
   Creates a database entry for that user
*/
export async function newGoogleUser(): Promise<void> {
  let uid: string | undefined;
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */

    
    
    uid = result.user?.uid;
    db.collection("Users").doc(uid).set({
      name: "Google User!"
    }).then(function() {
      // console.log("Doc completion notification.")
    });
  
  }).catch((error) => {
    // Errors
 
    console.log(error.message);
    // The email of the user's account used.
  
  
  });
}

export default newGoogleUser;