import crypto from 'crypto';

const stringifyParams = (params) => {
  let paramKeys = Object.keys(params);
  paramKeys.sort(); // SparkPlatform requires parameters to be alphabetical

  let string = '';

  for(let key of paramKeys) {
    if(Array.isArray(params[key])) {
      params[key] = params[key].join(',');
    }
    string += `${key}${params[key]}`;
  }

  return string;
};

export default class SignatureGenerator {
  constructor(key, secret) {
    this.secret = secret;
    this.key = key;
  }

  generate(endpoint, params, token) {
    params = params || {};

    const paramString = stringifyParams(params);
    const signature = `${this.secret}ApiKey${this.key}ServicePath/v1${endpoint}AuthToken${token}${paramString}`;
    const hash = crypto.createHash('md5').update(signature).digest('hex');

    return hash;
  }
}
