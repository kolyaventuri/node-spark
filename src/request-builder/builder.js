import querystring from 'querystring';

export default class Builder {

  constructor(headers) {
    this.HEADERS = headers;

    this.TEMPLATE = {
      uri: '',
      headers: {},
      json: true
    };
  }

  frameworkRequest(uri) {
    return Object.assign({ uri }, this.TEMPLATE);
  }

  get(url, params) {
    let query = `?${querystring.stringify(params)}`;
    let framework = this.frameworkRequest(url + query);

    return Object.assign({
      method: 'GET'
    }, framework);
  }

  post(url, body) {
    let framework = this.frameworkRequest(url, body);

    return Object.assign({
      method: 'POST',
      body
    }, framework);
  }
}
