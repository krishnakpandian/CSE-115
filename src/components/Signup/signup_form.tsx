import firebase from 'firebase';


// TODO: env file for all firebase data
const firebaseConfig = {
<<<<<<< Updated upstream
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
=======
  apiKey: "AIzaSyB9y6F2kChB7JXgw_dXSvibzqQZ0uSkbKk",
  authDomain: "we-locate-9922e.firebaseapp.com",
  projectId: "we-locate-9922e",
  storageBucket: "we-locate-9922e.appspot.com",
  messagingSenderId: "42576953167",
  appId: "1:42576953167:web:072384b40dd30498800f3a",
  measurementId: "G-FQJN16Z8FZ"
>>>>>>> Stashed changes
};

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
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      window.alert("Successfully Checked In!")
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

export default newUser;