import firebase from 'firebase';

// TODO: pass input for user email and password during registration
async function checkLogin(): Promise<boolean> {
    try {
      let check = true
      await firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          check = true
        } else {
          // No user is signed in.
          check = false
          return check;
        }
      });
      return check
    } catch (error) {
      return false
    }
  }

export default checkLogin;