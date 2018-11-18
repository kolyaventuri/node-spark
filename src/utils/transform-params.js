import validParams from '../spark/constants/valid-params';

export default params => {
  const keys = Object.keys(params);

  const newParamsObject = {};
  for (const key of keys) {
    let newKey = key;
    if (validParams.indexOf(key) > -1) {
      newKey = `_${key}`;
    }

    newParamsObject[newKey] = params[key];
  }

  return newParamsObject;
};
