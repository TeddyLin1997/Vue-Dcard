import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// firebase config
var firebaseConfig = {
  apiKey: "AIzaSyCUnhsY-Ve-fJb0lNlqYNkfUqqvK2jcz-g",
  authDomain: "dcard-database.firebaseapp.com",
  databaseURL: "https://dcard-database.firebaseio.com",
  projectId: "dcard-database",
  storageBucket: "dcard-database.appspot.com"
};

// firebase init
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export const auth = firebase.auth();
