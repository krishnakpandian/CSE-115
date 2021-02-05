import firebase from 'firebase';

// TODO: pass input for user email and password during registration
async function logoutUser(): Promise<void>{
    try {
        await firebase.auth().signOut();
        console.log("signed out!");
    } catch (e){
        console.log("Couldn't log out!");
    } 
}

export default logoutUser;