import request from 'request-promise';
import crypto from 'crypto';

import APIService from '../api-service';

const HEADERS = {
  'User-Agent': 'Venturi Group Albuquerque',
  'X-SparkApi-User-Agent': 'Venturi Group Albuquerque'
};

const API = new APIService('https://sparkapi.com/v1', HEADERS);

export default class TokenGenerator {
  constructor(key, secret) {
    this.key = key;
    this.secret = secret;

    this.API_SIG = crypto.createHash('md5').update(secret + "ApiKey" + key).digest("hex");

    this.token = {expires: new Date(0)};
    this._generating = false;
  }

  waitForToken = (resolve = null) => {
    return new Promise(_resolve => {
      resolve = _resolve || resolve;
      setTimeout(() => {
        if (this.token.token) {
          return resolve(this.token);
        }

        return this.waitForToken(resolve);
      }, 500);
    });
  }

  async getToken() {
    if (this._generating) {
      return await this.waitForToken();
    }

    if(this.token.expires > new Date()) return this.token;
    this._generating = true;

    let result = await API.post('/session', { ApiKey: this.key, ApiSig: this.API_SIG });

    if(!result['D'].Success) {
      throw new Error('Something went wrong authorizing application.');
    }

    this.token = {
      token:   result.D.Results[0].AuthToken,
      expires: new Date(result.D.Results[0].Expires)
    };

    this._generating = false;

    return this.token;
  }
}
