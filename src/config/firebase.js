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
  // 基本取得
  get: async path => {
    const result = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val())
      .catch(err => err);
    return result;
  },

  // 基本設定
  set: (path, value) => {
    return firebase
      .database()
      .ref(path)
      .set(value)
      .catch(err => err);
  },

  // 取得使用者資料
  getUser: uid => {
    const path = `user/${uid}`;
    return firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val())
      .catch(err => err);
  },

  // 設定使用者資料
  setUser: (uid, value) => {
    const path = `user/${uid}`;
    return firebase
      .database()
      .ref(path)
      .set(value)
      .catch(err => err);
  },

  // 取得看板文章
  getArticle: async kanbanName => {
    const path = `data/${kanbanName}`;
    const result = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val())
      .catch(err => err);
    return result ? result.reverse() : [];
  },

  // 發表文章
  setArticle: async (kanbanName, value) => {
    const path = `data/${kanbanName}`;
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

  // 文章留言
  setReaction: async (kanbanName, articleId, value) => {
    const path = `data/${kanbanName}/${articleId}/reaction`;
    const react = `data/${kanbanName}/${articleId}/react`;
    const id = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot?.val()?.length ?? 0);

    await firebase
      .database()
      .ref(`${path}/${id}`)
      .set({ ...value, id: id })
      .then(() => {
        return { id: id, status: true };
      })
      .catch(err => err);

    return firebase
      .database()
      .ref(react)
      .set(id + 1)
      .then(() => true)
      .catch(err => err);
  },

  addMood: async (kanbanName, id) => {
    const path = `data/${kanbanName}/${id}/mood`;
    const value = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val());

    return firebase.database
      .ref(path)
      .set(value + 1)
      .then(() => true)
      .catch(err => err);
  },

  subMood: async (kanbanName, id) => {
    const path = `data/${kanbanName}/${id}/mood`;
    const value = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val());

    return firebase.database
      .ref(path)
      .set(value - 1)
      .then(() => true)
      .catch(err => err);
  }
};

export const auth = firebase.auth();
