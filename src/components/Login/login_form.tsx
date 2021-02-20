import firebase from '../Signup/firebaseConfig'

// TODO: pass input for user email and password during registration
async function loginUser(email: string, password: string): Promise<boolean>{
    await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error: " + errorCode + errorMessage);
    });
    console.log("Successful login?");

    const user = firebase.auth().currentUser;

    if (user) {
      console.log("User stuff: ", user.email);
      console.log("User ID: ", user.uid);
      return true;
    } else {
      window.alert("Wrong email/password for login");
      return false;
    }

}

export default loginUser;