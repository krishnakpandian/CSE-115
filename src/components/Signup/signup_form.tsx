import firebase from './firebaseConfig'

//Get firestore database
const db = firebase.firestore();

/* Function creates a newUser in the firebase database
   Takes in email and password in string forms
   Returns nothing
   Creates a firebase auth account and
   a database collectionn based on that user's ID 
*/
async function newUser(email: string, password: string): Promise<void>{
    let uid: string | undefined;
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then( (data) => {
        uid = data.user?.uid;
        db.collection("Users").doc(uid).set({
          name: email,
          password: password
        })
        .then(function() {
          // console.log("Database document completed.");
        })
        .catch(function(error) {
          console.error("Error adding user: ", error);
        });
    })
    .catch( (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error: " + errorCode + errorMessage);
      return;
    });
}

export default newUser;