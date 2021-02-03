import firebase from 'firebase';

// TODO: pass input for user email and password during registration
async function loginUser(email: string, password: string){
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
    } else {
      // No user is signed in.
    }

}

export default loginUser;