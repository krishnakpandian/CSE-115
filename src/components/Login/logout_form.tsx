import firebase from '../Signup/firebaseConfig'

/* Function logs out user
   Takes no arguments and returns nothing
   Logs user out from their account
*/
async function logoutUser(): Promise<void>{
    try {
        await firebase.auth().signOut();
        console.log("signed out!");
    } catch (e){
        console.log("Couldn't log out!");
    } 
}

export default logoutUser;