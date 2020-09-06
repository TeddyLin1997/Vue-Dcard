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

  // 是否已經點擊心情
  hasMood: async (kanbanName, id, user) => {
    const path = `data/${kanbanName}/${id}/mood`;
    const data = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val());

    if (data === null) return false;
    const target = data.find(item => item.name === user);
    return target === undefined ? false : true;
  },

  // 點擊心情
  addMood: async (kanbanName, id, user) => {
    const path = `data/${kanbanName}/${id}/mood`;

    const moodId = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot?.val()?.length ?? 0);

    return firebase
      .database()
      .ref(`${path}/${moodId}`)
      .set({ name: user, id: moodId })
      .then(() => {
        return { id: id, status: true };
      })
      .catch(err => err);
  },

  // 收回心情
  subMood: async (kanbanName, id, user) => {
    const path = `data/${kanbanName}/${id}/mood`;
    const data = await firebase
      .database()
      .ref(path)
      .once("value")
      .then(snapshot => snapshot.val());
    const findObj = data.find(item => item.name === user);
    return firebase
      .database()
      .ref(`${path}/${findObj.id}`)
      .remove()
      .then(() => true)
      .catch(err => err);
  }
};

export const auth = firebase.auth();
