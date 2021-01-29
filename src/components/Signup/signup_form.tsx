import firebase from 'firebase';
import React, { Component } from "react";

// TODO: env file for all firebase data
var firebaseConfig = {
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
function newUser(){
    firebase.auth().createUserWithEmailAndPassword("email here","password here").catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorCode + errorMessage);
    });
    
}

export default newUser;