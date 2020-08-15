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
  getArticle: async path => {
    const result = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val())
      .catch(err => err);
    return result ? result.reverse() : [];
  },

  setArticle: async (path, value) => {
    const id = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot?.val()?.length ?? 0);

    return firebase
      .database()
      .ref(`${path}/${id}`)
      .set({ ...value, id: id })
      .then(() => {
        return { id: id, status: true };
      })
      .catch(err => err);
  },

  getUser: path => {
    return firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val())
      .catch(err => err);
  },

  setUser: (path, value) => {
    return firebase
      .database()
      .ref(path)
      .set(value)
      .catch(err => err);
  }
};

export const auth = firebase.auth();
