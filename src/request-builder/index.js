import Builder from './builder';

export default class RequestBuilder {

  constructor(url, headers) {
      this.BASE_URL = url;

      let builder = new Builder(headers);

      this.buildMethods = {
        'GET': builder.get,
        'POST': builder.post
      }
  }

  build(url, params = {}, method = 'GET') {
    method = method.toUpperCase();

    return this.buildMethods[method](this.BASE_URL + url, params);
  }

}
