import firebase from 'firebase';

// TODO: env file for all firebase data
const firebaseConfig = {
  apiKey: "AIzaSyB9y6F2kChB7JXgw_dXSvibzqQZ0uSkbKk",
  authDomain: "we-locate-9922e.firebaseapp.com",
  projectId: "we-locate-9922e",
  storageBucket: "we-locate-9922e.appspot.com",
  messagingSenderId: "42576953167",
  appId: "1:42576953167:web:072384b40dd30498800f3a",
  measurementId: "G-FQJN16Z8FZ"
};

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
    window.alert( "Creating user!");
    await db.collection("Users").doc(uid).set({
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