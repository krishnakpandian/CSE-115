import firebase from 'firebase';
import React, { Component } from "react";

// TODO: env file for all firebase data
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
firebase.initializeApp(firebaseConfig);

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
}

export default newUser;