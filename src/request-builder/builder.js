import querystring from 'querystring';
import alphabetize from '../utils/alphabetize';

export default class Builder {
  constructor(headers) {
    this.TEMPLATE = {
      uri: '',
      headers: headers,
      json: true
    };
  }

  get = (url, params) => {
    params = alphabetize(params);
    let query = `?${querystring.stringify(params)}`;

    let framework = Object.assign(this.TEMPLATE, { uri: url + query });

    return Object.assign({
      method: 'GET'
    }, framework);
  }

  post = (url, body) => {
    let framework = Object.assign(this.TEMPLATE, { uri: url });

    return Object.assign({
      method: 'POST',
      body
    }, framework);
  }
}
