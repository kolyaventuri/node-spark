const alphabetize = params => {
  const keys = Object.keys(params).sort();
  const newObj = {};

  for (const key of keys) {
    newObj[key] = params[key];
  }

  return newObj;
};

export default alphabetize;
