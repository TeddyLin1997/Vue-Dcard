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

// 擴充database方法
export const database = {
  get: path => {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(path)
        .once("value")
        .then(snapshot => resolve(snapshot.val()))
        .catch(err => reject(err));
    });
  },

  set: (path, value) => {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(path)
        .set(value)
        .catch(err => reject(err));
    });
  }
};

export const auth = firebase.auth();
