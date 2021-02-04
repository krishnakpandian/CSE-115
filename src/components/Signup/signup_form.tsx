import firebase from 'firebase';
import {firebaseConfig} from './firebaseConfig'

// TODO: env file for all firebase data


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 
// TODO: pass input for user email and password during registration
async function newUser(email: string, password: string): Promise<void>{
    let uid: string | undefined;
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then( (data) => {
        uid = data.user?.uid;
    })
    .catch( (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error: " + errorCode + errorMessage);
      return;
    });
    window.alert( "Creating user in database!");
    await db.collection("Users").doc(uid).set({
      name: email,
      password: password
    })
    .then(function() {
      window.alert("Doc completion notification.")
    })
    .catch(function(error) {
      console.error("Error adding user: ", error);
    });
    window.alert("Done w/acc creation.")
    
}

export default newUser;