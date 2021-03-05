import firebase from '../Signup/firebaseConfig'

/* Function logs in existing user
  Takes in email password as args
  Return true if logged in properly, false otherwise
  Displays window alert for false log in
*/ 
async function loginUser(email: string, password: string): Promise<boolean>{
    await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error: " + errorCode + errorMessage);
    });
    // console.log("Successful login?");

    const user = firebase.auth().currentUser;

    if (user) {
      // console.log("User stuff: ", user.email);
      // console.log("User ID: ", user.uid);
      return true;
    } else {
      return false;
    }
}

export default loginUser;