import firebase from 'firebase';

// TODO: pass input for user email and password during registration
async function checkLogin(): Promise<boolean> {
    try {
      let check = true
      await firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("USER LOGGED IN!");
          console.log("The user that logged in: ", user);
          check = true
        } else {
          // No user is signed in.
          console.log("Not logged in!");
          check = false
        }
      });
      return check
    } catch (error) {
      return false
    }
  }

export default checkLogin;