import { database } from "../config/firebase";

// 深拷貝
export const deepCopy = value => {
  const result = JSON.parse(JSON.stringify(value));
  return result;
};

// 取得當前時間字串
export const getNowDateTime = () => {
  const now = new Date();
  const result = `${now.getMonth() +
    1}月${now.getDate()}日 ${now.getHours()}:${now.getMinutes()}`;
  return result;
};

// firebase database處理
export const getFirebaseData = path => {
  return new Promise((resolve, reject) => {
    database
      .ref(path)
      .once("value")
      .then(snapshot => resolve(snapshot.val()))
      .catch(err => reject(err));
  });
};

export const setFirebaseData = (path, value) => {
  return new Promise((resolve, reject) => {
    database
      .ref(path)
      .set(value)
      .catch(err => reject(err));
  });
};
