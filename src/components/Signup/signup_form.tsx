import firebase from 'firebase';
import {firebaseConfig} from './firebaseConfig'

// TODO: env file for all firebase data


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 
// TODO: pass input for user email and password during registration
function newUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error: " + errorCode + errorMessage);
    });
    window.alert(
      "Creating user!"
    )
    db.collection("Users").add({
      name: email,
      password: password
    })
    .then(function() {
      window.alert("Successfully Checked In!")
    })
    .catch(function(error) {
      console.error("Error adding user: ", error);
    });
}

export default newUser;