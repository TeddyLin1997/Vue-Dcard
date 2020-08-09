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
