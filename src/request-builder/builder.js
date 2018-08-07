import querystring from 'querystring';

export default class Builder {
  constructor(headers) {
    this.TEMPLATE = {
      uri: '',
      headers: headers,
      json: true
    };
  }

  get(url, params) {
    let query = `?${querystring.stringify(params)}`;

    let framework = Object.assign(this.TEMPLATE, { uri: url + query });

    return Object.assign({
      method: 'GET'
    }, framework);
  }

  post(url, body) {
    let framework = Object.assign(this.TEMPLATE, { uri: url });

    return Object.assign({
      method: 'POST',
      body
    }, framework);
  }

  static register(headers) {
    return new this(headers);
  }
}
