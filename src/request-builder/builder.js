import querystring from 'querystring';

export default class Builder {

  constructor(headers) {
    this.TEMPLATE = {
      uri: '',
      headers: headers,
      json: true
    };
  }

  frameworkRequest(uri) {
    return Object.assign(this.TEMPLATE, { uri });
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
