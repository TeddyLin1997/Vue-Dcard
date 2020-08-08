export const deepCopy = value => {
  const result = JSON.parse(JSON.stringify(value));
  return result;
};
